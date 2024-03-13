var erros = 0;
var pokemons= ["balbassaur", 
"squirtle",
"charmander",
"pikachu",
"eevee",
"ditto"]

var pokeballs
var board =[];
rows = 3;
collums = 5;

wwindow.onload = function(){
    shuffleCards();
    startGame();
}

function shuffleCards(){
    pokeballs = pokeballs.concat(pokeballs); //dubbles each card
    console.log(pokeballs);
    //suffles cards
    for(let i = 0; i < pokeballs.lenght; i++) {
        let j = Math.floor(Math.random()* pokeballs.lenght); //get random index
        //swap
        let temp = pokeballs[i];
        pokeballs[i]= pokeballs [j];
        pokeballs[j]= temp;
    }

    function startGame(){
        //arrange the board by 3 x 4

        for (let r = 0 ; r < rows; r++){
            let row = [];
            for (let c = 0; c < collums; c++){
                let pokeballImg = pokeballSet.pop();
                row.push(pokeballImg);

              //<Img id = "0-0">
                let pokeball = document.creativeElement("img")
                pokeball.id = r.toString()+  "-"+ c.toString();
                pokeball.src = "img/" +pokeballImg + ".png";
                pokeball.classList.add("pokeball");
                document.getElementById("board").append(pokeball);

            }
            board.push(row);
        }
        
    }
    
}