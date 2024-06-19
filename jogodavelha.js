const board = document.getElementById("board")
const casinhas = board.getElementsByTagName("div")
const boxVencedor = document.getElementById("vencedor")

let jogadas = 0;
let jogoAtivo = true; 

for (let i=0; i<casinhas.length; i++) {
  console.log(casinhas[i])
  casinhas[i].addEventListener('click', casinhaclick)
}

function casinhaclick() {
    if (!jogoAtivo) return;

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
    let vencedor = "";
    if(casinhas[0].innerHTML == casinhas[1].innerHTML 
        && casinhas[1].innerHTML == casinhas[2].innerHTML
        && casinhas[1].innerHTML != ""
    ) {
        vencedor = casinhas[0].innerHTML
    }
    if(casinhas[3].innerHTML == casinhas[4].innerHTML
        && casinhas[4].innerHTML == casinhas[5].innerHTML
        && casinhas[3].innerHTML != ""
    ) {
        vencedor = casinhas[3].innerHTML;
    }
    if(casinhas[6].innerHTML == casinhas[7].innerHTML
        && casinhas[7].innerHTML == casinhas[8].innerHTML
        && casinhas[6].innerHTML != ""
    ) {
        vencedor = casinhas[6].innerHTML;
    }

    //validando na vertical
    if(casinhas[0].innerHTML == casinhas[3].innerHTML
        && casinhas[3].innerHTML == casinhas[6].innerHTML
        && casinhas[0].innerHTML != ""
    ) {
        vencedor = casinhas[0].innerHTML;
    }
    if(casinhas[1].innerHTML == casinhas[4].innerHTML 
        && casinhas[4].innerHTML == casinhas[7].innerHTML
        && casinhas[1].innerHTML != ""
    ) {
        vencedor = casinhas[1].innerHTML;
    }
    if(casinhas[2].innerHTML == casinhas[5].innerHTML 
        && casinhas[5].innerHTML == casinhas[8].innerHTML
        && casinhas[2].innerHTML != ""
    ) {
        vencedor = casinhas[2].innerHTML;
    }

    //validando na diagonal
    if(casinhas[0].innerHTML == casinhas[4].innerHTML 
        && casinhas[4].innerHTML == casinhas[8].innerHTML
        && casinhas[0].innerHTML != ""
    ) {
        vencedor = casinhas[0].innerHTML;
    }
    if(casinhas[2].innerHTML == casinhas[4].innerHTML
        && casinhas[4].innerHTML == casinhas[6].innerHTML
        && casinhas[2].innerHTML != ""
    ) {
        vencedor = casinhas[2].innerHTML;
    }

    if(vencedor) {
        jogoAtivo = false;
        boxVencedor.innerHTML = "O '" + vencedor + "' Venceu!";
    }
}

function reiniciarJogo() {
    for (let i = 0; i < casinhas.length; i++) {
        casinhas[i].innerHTML = "";
    }
    boxVencedor.innerHTML = "";
    jogoAtivo = true;
    jogadas = 0;
}