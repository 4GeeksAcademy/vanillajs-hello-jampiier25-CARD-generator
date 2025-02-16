import "bootstrap";
import "./style.css";

window.onload = () => {
  generarCarta();
  
//funcion para generar una carta aleatoria//
function generarCarta() {
    let cardNumber = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", ];
    let suit = ["Diamonds", "Spades", "Hearts", "Clubs"];
    let randomCardNumber = Math.floor(Math.random() * cardNumber.length);
    let randomSuitNumber = Math.floor(Math.random() * suit.length);
    let finalSuit = suit[randomSuitNumber];
    let finalCardNumber = cardNumber[randomCardNumber];
    
    document.getElementById('cardContent').innerHTML = finalCardNumber;
    document.getElementById('theCard').className = "";
    document.getElementById('theCard').classList.add("card");
    document.getElementById('theCard').classList.add(getSuiteClass(finalSuit));

    //modficar el tamaño de la carta por parte del usuario // 
    //input ancho//
    document.getElementById('ancho').addEventListener('input', e =>{
      document.getElementById('theCard').style.width= e.target.value + 'px'
    })
    //input alto//
    document.getElementById('alto').addEventListener('input', e =>{
      document.getElementById('theCard').style.height= e.target.value + 'px'
    })
    //boton inicio temp.//
    document.getElementById('startButton').addEventListener('click', iniciarTemporizador);
    // boton stop temp.//
    document.getElementById('stopButton').addEventListener('click', detenerTemporizador);
    //boton generar carta//
    document.getElementById("generateCard").addEventListener('click', generarCarta);
  //obtener el valor de la carta con su respectivo color de palo//
    document.getElementById('cardContent').style.color = getColorBySuit(finalSuit);

  //funcion para obtener el palo//
  function getSuiteClass(suit) {
    switch (suit) {
      case "Diamonds": return "suit-diamonds";
      case "Spades": return "suit-spades";
      case "Hearts": return "suit-hearts";
      case "Clubs": return "suit-clubs";
    }
  }
  //funcion para definir el valor de la carta segun el color del palo //
  function getColorBySuit(suit) {
    switch (suit) {
      case "Diamonds": return "red";  
      case "Hearts": return "red";    
      case "Spades": return "black";  
      case "Clubs": return "black";   
      default: return "black"; 
    }
  }
  //setInterval(generarCarta, 10000); intervalo para hacerlo en 10s sin necesidad de un botón para poder usarlo en un futuro//
  //variable y funcion para los botones de empezar y detener el temporizador//
  let intervalo;
  //empezar temporizador//
  function iniciarTemporizador() {
    if (!intervalo) {
      intervalo = setInterval(generarCarta, 5000); //intervalo de 5s para usarlo con un botón no le puse 10s ya que me resultaba demasiado tiempo para poder notar el temporizador//
    }
  }
  //detener temporizador//
  function detenerTemporizador() {
    clearInterval(intervalo);
    intervalo = null;
  }
   //  creo que esta vez he ordenado algo mas el codigo o al menos lo he organizado para entender dónde y
   //  qué esté haciendo cada cosa al igual que ya lo metí todo en el openload que es en lo que más fallo y se me olvida 
   //  ehehe=) espero este todo lo pedido mas el toque personal que tengo, al final le puse un pikachu al background de la carta 
   // y me gustaria aprender a ponerle un icono al title de la pagina //

}
}