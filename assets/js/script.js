// elementos
const btnTabelaVerdade = document.getElementById('tabela_verdade');
const btnTablo = document.getElementById('tablo');
const btnDeducaoNatural = document.getElementById('deducao_natural');

btnTabelaVerdade.addEventListener('click', () => {
    window.location.href = 'assets/paginas/tabela_verdade.html';
});

btnTablo.addEventListener('click', () => {
    window.location.href = 'assets/paginas/tablo.html';
});

btnDeducaoNatural.addEventListener('click', () => {
    window.location.href = 'assets/paginas/deducao_natural.html';
});

