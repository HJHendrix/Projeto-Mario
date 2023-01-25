
/*
OBJETIVO 1- quando o usuario clicar no botao de ver trailer, devemos abrir a modal com video trailer
    - passo 1 - dar um jeito de pegar o elemento que representa o botao na tela usando o js
    - passo 2 - dar um jeito de identificar quando o usuario clicar no botao
    - passo 3 - dar um jeito de pegar o elemento da modal no js
    - passo 4 - abrir a modal na tela

OBJETIVO 2- quando o usuario clicar em x, devemos fechar a modal
    - passo 1 - dar um jeito de pegar o elemento de fechar modal usando o js
    - passo 2 - dar um jeito de identificar quando o usuario clicar no X
    - passo 3 - fecahr a modal
*/

const botaoTrailer = document.querySelector('.botao-trailer');
const botaoFecharModal = document.querySelector(".fechar-modal");
console.log(botaoFecharModal);
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;

function alternarModal(){
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
    console.log('clicou no botao veja o trailer');
    
    alternarModal();
    video.setAttribute("src", linkDoVideo);
});


botaoFecharModal.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", "");
});