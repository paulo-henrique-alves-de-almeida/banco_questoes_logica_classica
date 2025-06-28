// elementos
const btnVoltar = document.getElementById('btn-voltar');

const q1 = document.getElementById('q1');

btnVoltar.addEventListener('click', () => {
    window.location.href = "../../index.html";
});

q1.addEventListener('click', () => {
    window.location.href = "questao.html";
});
