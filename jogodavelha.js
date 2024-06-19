const board = document.getElementById("board");
const casinhas = board.getElementsByClassName("casinha");
const boxVencedor = document.getElementById("vencedor");
const overlay = document.getElementById("overlay");

let jogadas = 0;
let jogoAtivo = true;

// Adiciona evento de clique a todas as casinhas
for (let casinha of casinhas) {
  casinha.addEventListener("click", casinhaClick);
}

// Função para lidar com o clique em uma casinha
function casinhaClick() {
  if (!jogoAtivo || this.innerHTML !== "") return;

  this.innerHTML = jogadas % 2 === 0 ? "X" : "O";
  jogadas++;

  if (jogadas >= 5) {
    verificaResultado();
  }
}

// Função para verificar o resultado do jogo
function verificaResultado() {
  const linhasVitoria = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Linhas
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Colunas
    [0, 4, 8], [2, 4, 6] // Diagonais
  ];

  for (let linha of linhasVitoria) {
    const [a, b, c] = linha;
    if (casinhas[a].innerHTML !== "" &&
        casinhas[a].innerHTML === casinhas[b].innerHTML &&
        casinhas[b].innerHTML === casinhas[c].innerHTML) {
      mostraResultado(casinhas[a].innerHTML);
      return;
    }
  }

  if (jogadas === 9) {
    mostraResultado("Empate");
  }
}

// Função para mostrar o resultado (vitória ou empate)
function mostraResultado(resultado) {
  jogoAtivo = false;
  if (resultado === "Empate") {
    boxVencedor.innerHTML = "Deu velha!";
  } else {
    boxVencedor.innerHTML = `O '${resultado}' Venceu!`;
  }
  overlay.classList.add("visible");
}

// Função para reiniciar o jogo
function reiniciarJogo() {
  for (let casinha of casinhas) {
    casinha.innerHTML = "";
  }
  boxVencedor.innerHTML = "";
  overlay.classList.remove("visible");
  jogoAtivo = true;
  jogadas = 0;
}
