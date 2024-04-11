var errors = 0;
var pokemon = [
    "balbasaur",
    "charmander",
    "ditto",
    "pikachu",
    "squirtle",
    "eevee"
];

var pokemonSet;
var board = [];
var rows = 6;
var collums = 2;

var pokemon1Selected;
var pokemon2Selected;

window.onload = function(){
    shuffel();
    startGame();
}

function shuffel(){
    pokemonSet = pokemon.concat(pokemon);
    for (let i = 0; i < pokemonSet.length; i++){
        let j = Math.floor(Math.random() * pokemonSet.length);
        let temp = pokemonSet[i];
        pokemonSet[i] = pokemonSet[j];
        pokemonSet[j] = temp;
    }
}

function startGame(){
    for (let r = 0; r < rows; r++){
        let row = [];
        for (let c = 0; c < collums; c++){
            let pokemonImg = pokemonSet.pop();
            row.push(pokemonImg);

            let card = document.createElement("img");
            card.id = r.toString() + "-" + c.toString();
            card.src = "img/" + pokemonImg + ".png";
            card.classList.add("card");
            card.addEventListener("click", selectedPokemon);
            document.getElementById("board").append(card);
        }
        board.push(row);
    }
    setTimeout(Closed, 2000);
}

function Closed(){
    for (let r = 0; r < rows; r++){
        for (let c = 0; c < collums; c++){
            let card = document.getElementById(r.toString() + "-" + c.toString());
            card.src = "img/Closed.png";
        }
    }
}

function selectedPokemon() {
    if (this.src.includes("Closed")) {
        if (!pokemon1Selected) {
            pokemon1Selected = this;
            revealCard(pokemon1Selected);
        } else if (!pokemon2Selected && this != pokemon1Selected) {
            pokemon2Selected = this;
            revealCard(pokemon2Selected);
            setTimeout(update, 1000);
        }
    }
}

function revealCard(card) {
    let coords = card.id.split("-");
    let r = parseInt(coords[0]);
    let c = parseInt(coords[1]);
    card.src = "img/" + board[r][c] + ".png";
}

function update() {
    if (pokemon1Selected.src !== pokemon2Selected.src) {
        pokemon1Selected.src = "img/Closed.png";
        pokemon2Selected.src = "img/Closed.png";
        errors += 1;
        document.getElementById("errors").innerText = errors;
    } else {
        if (checkWin()) {
            handleWin();
            return;
        }
    }
    pokemon1Selected = null;
    pokemon2Selected = null;
}

function checkWin() {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < collums; c++) {
            let card = document.getElementById(r.toString() + "-" + c.toString());
            if (card.src.includes("Closed")) {
                return false;
            }
        }
    }
    return true;
}

function handleWin() {
    let choice = confirm("Congratulations! You found all the Pokémon cards. Do you want to try again?");
    if (choice) {
        location.reload();
    } else {
        window.location.href = "index.html";
    }
}
