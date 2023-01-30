
// const [primeiroNumero, , segundoNumero, ...resto] = numeros; //rest e o operador de resto.

// console.log(primeiroNumero, segundoNumero);
// console.log(resto);
// console.log(resto[2]);
const numeros = [1, 2, 3, 4, 5, 6, 7, 8];

const teste = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
const [,[,,teste2], ...teste3] = teste;
console.log(teste2);
console.log(teste3);