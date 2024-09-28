const buttonClique = document.querySelector(".clique");
const pontuacaoElemento = document.querySelector(".score");

//Variavel para armazenar a pontuação
let pontuacao = 0;

// Função responsável por atualizar o valor da pontuação exibida na tela
function atualizarPontuacao() {
    pontuacaoElemento.textContent = "Pontuação: " + pontuacao;
}

// Evento que será executado toda vez que o botão for clicado
buttonClique.onclick = function () {
    pontuacao += 1;  
    atualizarPontuacao();
    checar()  
};

// Função para verificar se a pontuação chegou a 100
function checar(){

    if (pontuacao == 100){
    
        alert("PARABÊNS VOCÊ CHEGOU A 100!!!!")
    }
    else if (pontuacao == 1000){
    
        alert("PARABÊNS VOCÊ CHEGOU A 1000!!!!\n\n Você é maluco.")
    }

}

const buttonComoJogar = document.querySelector(".comoJogar");
const modal = document.querySelector("dialog");
const buttonClose = document.getElementById("fecharModal");

//Função para abrir o modal
buttonComoJogar.onclick = function () {
    // Exibe o modal 
    modal.showModal();
}
//Função para fechar o modal
buttonClose.onclick = function () {
    // Fecha o modal chamando o método close()
    modal.close();
}
