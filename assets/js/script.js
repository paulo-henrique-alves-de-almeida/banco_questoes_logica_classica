// elementos
const btnTabelaVerdade = document.getElementById('tabela_verdade');
const btnTablo = document.getElementById('tablo');
const btnDeducaoNatural = document.getElementById('deducao_natural');
const btnSilogismo = document.getElementById('silogismo');
const btnOutros = document.getElementById('outros')

btnTabelaVerdade.addEventListener('click', () => {
    window.location.href = 'assets/paginas/tabela_verdade.html';
});

btnTablo.addEventListener('click', () => {
    window.location.href = 'assets/paginas/tablo.html';
});

btnDeducaoNatural.addEventListener('click', () => {
    window.location.href = 'assets/paginas/deducao_natural.html';
});

btnSilogismo.addEventListener('click', () => {
    window.location.href = 'assets/paginas/silogismo.html';
});

btnOutros.addEventListener('click', () => {
    window.location.href = 'assets/paginas/outros.html';
});

