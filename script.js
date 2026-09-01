let botao = document.querySelector("#botao-like");

botao.addEventListener("click", function () {
    botao.textContent = "♥ Curtido!";
});


let botaoCuriosidade = document.querySelector("#botao-curiosidade");

let curiosidade = document.querySelector("#curiosidade");

botaoCuriosidade.addEventListener("click", function () {
    curiosidade.textContent = "Curiosidade: o Chevrolet Impala 1967 usado por Dean se tornou um dos maiores símbolos de Supernatural e é carinhosamente chamado pelos fãs de Baby!";
});
