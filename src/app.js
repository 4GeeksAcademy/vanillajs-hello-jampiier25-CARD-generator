import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  generarCarta();
  

function generarCarta() {
  let cardNumber = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", ];
  let suit = ["Diamonds", "Spades", "Hearts", "Clubs"];
  let randomCardNumber = Math.floor(Math.random() * cardNumber.length);
  let randomSuitNumber = Math.floor(Math.random() * suit.length);
  let finalSuit = suit[randomSuitNumber];
  
  document.getElementById('cardContent').innerHTML = cardNumber[randomCardNumber];
  document.getElementById('theCard').className = "";
  document.getElementById('theCard').classList.add("card");
  document.getElementById('theCard').classList.add(getSuiteClass(finalSuit));

  document.getElementById('ancho').addEventListener('input', e =>{
    document.getElementById('theCard').style.width= e.target.value + 'px'
  })
  
  document.getElementById('alto').addEventListener('input', e =>{
    document.getElementById('theCard').style.height= e.target.value + 'px'
  })
}
let intervalo;

function getSuiteClass(suit) {
  switch (suit) {
    case "Diamonds": return "suit-diamonds";
    case "Spades": return "suit-spades";
    case "Hearts": return "suit-hearts";
    case "Clubs": return "suit-clubs";
  }
}
document.getElementById("generateCard").addEventListener('click', generarCarta);

//setInterval(generarCarta, 10000); intervalo para hacerlo en 10s sin necesidad de un botón//

function iniciarTemporizador() {
  if (!intervalo) {
    intervalo = setInterval(generarCarta, 5000); //intervalo de 5s para usarlo con un botón//
  }
}

function detenerTemporizador() {
  clearInterval(intervalo);
  intervalo = null;
} // funcion para detener el temporizador//

//boton inicio temp.//
document.getElementById('startButton').addEventListener('click', iniciarTemporizador);

// boton stop temp.//
document.getElementById('stopButton').addEventListener('click', detenerTemporizador);


document.getElementById('cardContent').style.color = ' generarCarta ';


//   miInput.addEventListener("input", e => {

//})//

//agregar un label input para modificar el width y height de la carta//






}