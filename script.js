function calcular() {
    // Pega apenas o valor numérico que a pessoa digitou
    let valor = parseFloat(document.getElementById('valor').value) || 0;

    // Multiplica o valor digitado diretamente por 7,60
    let valorFinal = valor * 7.60;

    // Mostra APENAS o resultado final formatado na tela
    let resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = "Valor Final: <br> R$ " + valorFinal.toFixed(2).replace('.', ',');
}
