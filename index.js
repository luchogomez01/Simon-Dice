//inicializar un array vacio llamado _arrayColores scope global
let _arrayColores = [];

//1- boton inicia juego.
const botonInicio = document.getElementById("botonInicio");
botonInicio.onclick = () =>{ 
    mostrarColor();
}
/*2- juego de los cuadrados elige un cuadrado de color de manera aleatoria.
	-agarrar un color de los 4 de manera aleatoria desde un array declarado en esta funcion               
	-la salida seria que guarde el valor del color elegido en el array vacio.*/
function _elegirColor (){
    const colores = ["rojo","azul","amarillo","verde"];
    let colorAleatorio = colores[Math.floor(Math.random() * colores.length)]
    _arrayColores.push(colorAleatorio);
    console.log(_arrayColores); 
};
/*3- muestra al jugador el cuadrado de color elegido poniendole un filtro al color
	-agarra el _arrayColores con los valores guardados de la funcion en el punto 2
	-reproduce el / los colores en el orden del _arrayColores poniendole un filtro*/
function mostrarColor(){
    _elegirColor ();
    for (let i = 0; i < _arrayColores.length; i++) {
        let item = _arrayColores[i];
        setTimeout(() => {
            document.querySelector('.' + item).classList.add('active');
            setTimeout(() => { 
                document.querySelector('.' + item).classList.remove('active')},800);
        }, 1000 * (i + 1));
        //tengo una clase en el css que es "active". El item toma valor de los strings que tengo en el array, lo uso en el query selector y con classlist add le agrego un estilo (si uso )
        //no es una promesa, no espera nada por fuera, el objetivo es que se ejecute en los parametros que promete, por eso le aumento el tiempo multiplicandole la 1 para que siempre espere a que termine el anterior. le sume 1 porque cuando la i es 0 quedaba o segundos (1000 + 0)
    }
};
/*4 - jugador clickea un cuadrado de color
	funcion que valide por booleano comparando los valores del array con el valor que devuelve clickear el cuadrado de color si lo clickeado es correcto o no:
       		-si es false: alert ("perdiste, fin del juego")
       		-si es true, continua el juego*/

// const rojo = document.querySelector('#cajaRojo').onclick = () =>{const string = "rojo"; console.log(string); return string};
// const azul = document.querySelector('#cajaAzul').onclick = () =>{const string = "azul"; console.log(string); return string};
// const amarillo = document.querySelector('#cajaAmarillo').onclick = () =>{ const string = "amarillo";console.log(string); return string};;
// const verde = document.querySelector('#cajaVerde').onclick = () =>{ const string = "verde";console.log(string); return string};
let _arrayUsuario = [];
for (let caja of document.getElementsByClassName('caja')){
    caja.addEventListener('click', (event) => {
        let _color = event.target.classList[1];
        _arrayUsuario.push(_color);
        console.log(_arrayUsuario); 
         if (_validar() === false){
            alert("perdiste");
            document.location.reload();
        } 
        else if (_arrayColores.length === _arrayUsuario.length){
            _arrayUsuario = [];
            mostrarColor();
        }   
    });
};

function _validar (){
    let validacion = true;
    for (let i = 0; i < _arrayUsuario.length; i++) {       
        if (_arrayUsuario[i] !== _arrayColores[i]){
            validacion = false;
            break;
        }
        else {
            validacion = true
            console.log(validacion)
        }
    }
    return validacion;
};

const botonReset = document.getElementById("botonReset");
botonReset.onclick = ()=>{
    document.location.reload();
};   


