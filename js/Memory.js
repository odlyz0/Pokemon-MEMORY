var errors = 0;
var pokemon = [
    "balbasaur",
    "charmander",
    "ditto",
    "pikachu",
    "squirtle",
    "eevee"
]

var pokemonSet;
var board =[];
var rows = 3;
var collums = 4;

window.onload = function(){
    shuffel();
    startGame();
}

function shuffel(){
pokemonSet = pokemon.concat(pokemon); //makes two of each pokemon
console.log(pokemonSet);
//shuffle 
for (let i = 0; i < pokemonSet.length; i++){
    let j = Math.floor(Math.random() * pokemonSet.length); //gets random index
//swap
let temp = pokemonSet [i];
pokemonSet [i]= pokemonSet[j];
pokemonSet[j]= temp;

}
console.log(pokemonSet)
}

function startGame(){
//board 3x4
for (let r = 0; r< rows; r++){
let row = [];
for (let c = 0; c <collums; c++){
    let pokemonImg = pokemonSet.pop();
    row.push(pokemonImg) //Js

     // <img id="0-0" class="card" src="img/eevee.jpg">

    let card = document.createElement("img");
    card.id = r.toString()+ "-" + c.toString();
    card.src = "img/"+ pokemonImg + ".png";
    card.classList.add("card");
    document.getElementById("board").append(card)
}
board.push(row)
}
console.log(board)
setTimeout(Closed, 2000)
}

function Closed(){
    for (let r = 0; r< rows; r++){
        for(let c = 0; c< collums; c++){
            let card = document.getElementById(r.toString() + "-"+ c.toString());
            card.src = "Closed.png"
        }
    }
}