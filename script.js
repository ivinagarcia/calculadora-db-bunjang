// Multiplicador total (Dólar + IOF/Spread + Taxas Proxy + Margem Dark Bloom)
// Sugestões: 8.10 (equilibrado) ou 8.30 (margem cheia proporcional à alta do dólar)
const MULTIPLICADOR_DOLAR = 8.10;

function calcular() {
    // Pega apenas o valor numérico que a pessoa digitou (em USD)
    let valor = parseFloat(document.getElementById('valor').value) || 0;

    // Multiplica o valor digitado pelo multiplicador atualizado
    let valorFinal = valor * MULTIPLICADOR_DOLAR;

    // Mostra APENAS o resultado final formatado na tela
    let resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = "Valor Final: <br> R$ " + valorFinal.toFixed(2).replace('.', ',');
}
