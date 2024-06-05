const board = document.getElementById("board")
const casinhas = board.getElementsByTagName("div")
const boxVencedor = document.getElementById("vencedor")

let jogadas = 0;

for (let i=0; i<casinhas.length; i++) {
  console.log(casinhas[i])
  casinhas[i].addEventListener('click', casinhaclick)
}

function casinhaclick() {
    if(this.innerHTML == "") {
        if(jogadas%2 == 0) {
            this.innerHTML = "X";
        }else{
            this.innerHTML = "O";
        }
        jogadas +=1;    
    }
    if(jogadas >=5){
        verificaGanhador()
    }
}

function verificaGanhador() {
    //validando na horizontal
    if(casinhas[0].innerHTML == casinhas[1].innerHTML 
        && casinhas[1].innerHTML == casinhas[2].innerHTML
        && casinhas[1].innerHTML != ""
    ) {
        boxVencedor.innerHTML = "O '" + casinhas[0].innerHTML + "' Venceu!"
    }
    if(casinhas[3].innerHTML == casinhas[4].innerHTML
        && casinhas[4].innerHTML == casinhas[5].innerHTML
        && casinhas[3].innerHTML != ""
    ) {
        alert("O '" + casinhas[3].innerHTML + "' Venceu!")
    }
    if(casinhas[6].innerHTML == casinhas[7].innerHTML
        && casinhas[7].innerHTML == casinhas[8].innerHTML
        && casinhas[6].innerHTML != ""
    ) {
        alert("O '" + casinhas[6].innerHTML + "' Venceu!")
    }

    //validando na vertical
    if(casinhas[0].innerHTML == casinhas[3].innerHTML
        && casinhas[3].innerHTML == casinhas[6].innerHTML
        && casinhas[0].innerHTML != ""
    ) {
        alert("O '" + casinhas[0].innerHTML + "' Venceu!")
    }
    if(casinhas[1].innerHTML == casinhas[4].innerHTML 
        && casinhas[4].innerHTML == casinhas[7].innerHTML
        && casinhas[1].innerHTML != ""
    ) {
        alert("O '" + casinhas[1].innerHTML + "' Venceu!")
    }
    if(casinhas[2].innerHTML == casinhas[5].innerHTML 
        && casinhas[5].innerHTML == casinhas[8].innerHTML
        && casinhas[2].innerHTML != ""
    ) {
        alert("O '" + casinhas[2].innerHTML + "' Venceu!")
    }

    //validando na diagonal
    if(casinhas[0].innerHTML == casinhas[4].innerHTML 
        && casinhas[4].innerHTML == casinhas[8].innerHTML
        && casinhas[0].innerHTML != ""
    ) {
        alert("O '" + casinhas[0].innerHTML + "' Venceu!")
    }
    if(casinhas[2].innerHTML == casinhas[4].innerHTML
        && casinhas[4].innerHTML == casinhas[6].innerHTML
        && casinhas[2].innerHTML != ""
    ) {
        alert("O '" + casinhas[2].innerHTML + "' Venceu!")
    }
}