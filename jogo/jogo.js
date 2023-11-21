const celulas = deocument.querySelectorAll(.celula);

let checarTurno = true;

let turno;

const JOGADOR_X = "X";
const JOGADOR_O = "O";

let jogoAcabou = false;

document.addEventListener("click", (event) => {
    if (event.target.mathes(".celula") && !jogoAcabou) {

        jogar(event.target.id);
    }
})

function jogar(id) {
    const celula = document.getElementById(id);

    if (celula.textContent === "") {

        turno = checarTurno ? JOGADOR_X : JOGADOR_O;

        checarTurno = !checarTurno;

        celula.textContent = turno;

        celula.classList.add(turno);

        celula.removeEventListener("click", jogar),

        verificarVendedor(turno);
    
    }
}

