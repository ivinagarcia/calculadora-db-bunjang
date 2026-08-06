function calcular() {
    // Pega o valor digitado
    let valor = parseFloat(document.getElementById('valor').value) || 0;

    // Cotação fixa do Dólar
    let cotacaoDolar = 5.25;
    
    // Fator 7.60
    let fator = 7.60;

    // Faz a conversão para reais e multiplica pelo fator 7.60
    let valorFinal = (valor * cotacaoDolar) * fator;

    // Mostra APENAS o resultado final na tela
    let resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = "Valor Final: <br> R$ " + valorFinal.toFixed(2).replace('.', ',');
}