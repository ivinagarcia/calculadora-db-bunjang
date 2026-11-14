// Multiplicador total (Dólar + IOF/Spread do cartão + Taxas Proxy + Margem Dark Bloom)
const MULTIPLICADOR_DOLAR = 8.40;

document.addEventListener('DOMContentLoaded', () => {
    const spanFator = document.getElementById('textoFator');
    if (spanFator) {
        spanFator.textContent = "R$ " + MULTIPLICADOR_DOLAR.toFixed(2).replace('.', ',');
    }
});

function calcular() {
    // Pega apenas o valor numérico que a pessoa digitou (em USD)
    let valor = parseFloat(document.getElementById('valor').value) || 0;

    // Multiplica o valor digitado pelo fator atualizado
    let valorFinal = valor * MULTIPLICADOR_DOLAR;

    // Mostra APENAS o resultado final formatado na tela
    let resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = "Valor Final: <br> R$ " + valorFinal.toFixed(2).replace('.', ',');
}
