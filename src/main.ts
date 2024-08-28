function multiplicaNumeros(valor1: number, valor2: number): number {
    return valor1 * valor2;
}

const resultado: number = multiplicaNumeros(9, 5);

console.log(`O resultado da multiplicação é: ${resultado}!`);

function criaSaudacao(nome: string): void {
    return console.log(`Olá, ${nome}!`);
}

criaSaudacao("Raphael");