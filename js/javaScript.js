function converteNumero() {

    let numero = document.getElementById('numero').value; // Recebe valor do número do input
    let res = ''; // Variável com resultado
    let output = document.getElementById('resultado'); // Variavel para mostrarmos o resultado

    // Vetores auxiliares para cálculo
    let cent = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM']; // Centenas
    let dez = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC']; // Dezenas
    let un = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX']; // Unidades

    // Primeiro, contabilizamos os 1000
    while (numero >= 1000) {
        res = res + 'M';
        numero -= 1000;
    }

    // Pelo valor, pegamos nos vetores auxiliares os números que devemos adicionar
    res = res + cent[Math.floor(numero/100)];
    numero = numero%100;

    res = res + dez[Math.floor(numero/10)];
    numero = numero%10;

    res = res + un[numero];

    // Finalmente, colocamos no HTML o resultado obtido
    output.textContent = res;

}