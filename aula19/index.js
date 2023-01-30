/*
Tipos de dados (valor) Primitivos (Imutaveis) - string, number, boolean, undefined, null, (bigint, symbol)
*/

//Aqui nos so estamos trocando o valor, substituindo ele
// let nome = 'Luiz';
// nome = 'Otavio';

// console.log(nome[0]);
// nome[0] = 'R'; //Nao podemos fazer isso, pois string e imutavel
// console.log(nome[0]);

// let a = 'A';
// let b = a; // Estamos copiando o valor de a para b. Mas eles sao independentes apos isso.
// console.log(a, b);

// a = 'Outra coisa';
// console.log(a, b);

/*
Referencia (mutavel) - Array, object, function
*/

let a = [1, 2, 3, 4];
let b = a; //Nesse caso, a e b apontam para o valor do array na memoria.

console.log(a, b);