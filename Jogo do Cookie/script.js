const buttonClique = document.querySelector(".clique");
const pontuacaoElemento = document.querySelector(".score");

let pontuacao = 0;

function atualizarPontuacao() {
    pontuacaoElemento.textContent = "Pontuação: " + pontuacao;
}

buttonClique.onclick = function () {
    pontuacao += 1;  
    atualizarPontuacao();
    checar()  
};

function checar(){

    if (pontuacao == 100){
    
        alert("PARABENS VOCÊ CHEGOU A 100!!!!")
    }

}


const buttonComoJogar = document.querySelector(".comoJogar");
const modal = document.querySelector("dialog");
const buttonClose = document.getElementById("fecharModal");

buttonComoJogar.onclick = function () {
    modal.showModal();
}

buttonClose.onclick = function () {
    modal.close();
}
