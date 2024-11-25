function gerarAleatorios() {
    var vetor = [];
    var geracoes = [];
    var numeros = Array.from({ length: 60 }, (_, i) => i + 1);

    while (vetor.length < 6) {
        var indexAleatorio = Math.floor(Math.random() * numeros.length);
        var numero = numeros.splice(indexAleatorio, 1)[0];
        geracoes.push(numero);
        vetor.push(numero);
    }

    console.log("Gerações:", geracoes);
    console.log("Finais:", vetor);
}
