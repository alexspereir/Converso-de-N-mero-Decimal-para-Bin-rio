var numDecimal = '';
var numBinario = '';


function calculo(decimal) {
    decimal = parseInt(decimal);
    let binario = [''];
    let resultado = '';
    let posicao = 0;
    while (decimal > 0) {
        if (binario[posicao].length == 4) {
            posicao += 1;
            console.log(binario, posicao);
            binario[posicao] = '';
        }

        if ((decimal % 2) == 0) {
            binario[posicao] = '0' + binario[posicao];
            decimal /= 2;
        } else {
            binario[posicao] = '1' + binario[posicao];
            decimal = parseInt(decimal/2);
        }
        console.log(binario.length);
    }

    for (var i = binario.length-1; i >= 0; i--) {
        if (binario[i].length < 4) {
            resultado = ("0000" + binario[i]).slice(-4) + ' ';
        } else {
            resultado = i > 0 ? resultado + binario[i] + ' ' : resultado + binario[i];
        }

        console.log(binario, resultado, i);
    }

    return resultado;
}

function converter() {
    numDecimal = document.getElementById('decimal');
    numBinario = document.getElementById('binario');
    if (numDecimal.value == '') {
        numDecimal.placeholder = 'Digite um valor!';
    } else {
        numBinario.value = calculo(numDecimal.value);
    }
}

