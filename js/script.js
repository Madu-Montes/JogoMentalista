var numSecreto = parseInt(Math.random() * 1001);

//enquanto chute diferente de numSecreto, pedir novo chute
// != -> sinal de negação/diferente
while (chute != numSecreto) {
    var chute = prompt('Digite um número entre 1 e 1000');

    //se chute  = ao numSecreto então imprimir o alert de Acertou
    if (chute == numSecreto) {
        alert('Acertou! Você é um Mentalista :)');
    }
    //se errado, dar dicas 
    else if (chute > numSecreto) {
        alert('Errou :( O número secreto é menor do que ' + chute);
    }
    else if (chute < numSecreto) {
        alert('Errou :( O número secreto é maior do que ' + chute)
    }
}




