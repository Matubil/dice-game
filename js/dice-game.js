// pedir nombre de 2 jugadores
const player1name = document.getElementById('player1name')
const player2name = document.getElementById('player2name')


let player1score =0;
let player2score =0;
let player1;
let player2;
// deberia tomarlos del formulario
// asignar un nombre al player1 y un nombre al player2
function tomarNombresDeJugadores(evt) {
    // Importante al momento de captar un formulario con JS
    evt.preventDefault();//hacia que no vuelva a cargar todo lo del js
    player1 = evt.target.elements.player1.value;
    player2 = evt.target.elements.player2.value;

    player1name.innerHTML = player1;
    player2name.innerHTML = player2;

    // console.dir(evt.target.classList)

    evt.target.classList.add('hidden') // lo que va a hacer es esconderme el formulario apenas se ejecute creo ver clase a las 2:10 maso
    document.getElementById('game-container').classList.remove('hidden')
}

//le pone evt pero no molesta el nombre porque  puede ser cualquiera ya que lo enviamos desde la funcion en el html

function lanzarDados(player, evt){
            //1-6
    const dado1 = parseInt(Math.random() * 6) + 1;
            //1-6
    const dado2 = parseInt(Math.random() * 6) + 1;
    const resultado = dado1 + dado2;

    if(player === 1){
        player1score = resultado;
    }else{
        player2score = resultado;
    }

    const dado1HTML = document.getElementById(`p${player}-d1`)
    const dado2HTML = document.getElementById(`p${player}-d2`)

    dado1HTML.src = `/assets/images/dice/dice-${dado1}.png` 
    dado2HTML.src = `/assets/images/dice/dice-${dado2}.png` 

    console.log(dado1,dado2)

    const resultadoHTML = document.getElementById(`score${player}`)

    resultadoHTML.innerHTML = resultado;

    // evt.target.classList.add('hidden')//para que se oculten los botones cuando le damos al boton

    evt.target.disabled = true
    console.dir(evt.target)

    if((player1score > 0)&&(player2score > 0)){
        determinarGanador();
    }
}

function determinarGanador(){
    if(player1score > player2score){
        document.getElementById('ganador').innerHTML= `El ganador es el ${player1}`
    }else if(player1score < player2score){
        document.getElementById('ganador').innerHTML= `El ganador es el ${player2}`
    }else{
        document.getElementById('ganador').innerHTML= `Hubo un empate`
    }
}