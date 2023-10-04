function ehQuadradoMagico(matriz) {
    const n = matriz.length;

    let numeros = new Set();
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            numeros.add(matriz[i][j]);
        }
    }
    for(let i = 1; i <= n * n; i++) {
        if(!numeros.has(i)) return false;
    }

    const somaReferencia = matriz[0].reduce((a, b) => a + b, 0);

    for(let i = 0; i < n; i++) {
        let somaLinha = 0, somaColuna = 0;
        for(let j = 0; j < n; j++) {
            somaLinha += matriz[i][j];
            somaColuna += matriz[j][i];
        }
        if(somaLinha !== somaReferencia || somaColuna !== somaReferencia) return false;
    }

    let somaDiagonal1 = 0, somaDiagonal2 = 0;
    for(let i = 0; i < n; i++) {
        somaDiagonal1 += matriz[i][i];
        somaDiagonal2 += matriz[i][n - 1 - i];
    }

    if(somaDiagonal1 !== somaReferencia || somaDiagonal2 !== somaReferencia) return false;

    return true;
}

function arrayParaMatriz(array) {
    const n = Math.sqrt(array.length);
    let matriz = [];
    for(let i = 0; i < n; i++) {
        matriz.push(array.slice(i * n, (i + 1) * n));
    }
    return matriz;
}

const testArray = [2, 7, 6, 9, 5, 1, 4, 3, 8];
const testMatriz = arrayParaMatriz(testArray);
const resultado = ehQuadradoMagico(testMatriz);
console.log(resultado);
