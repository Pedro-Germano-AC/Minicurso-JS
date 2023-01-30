//funcoes

// function saudacao (_nome) {
//     console.log(`Bom dia, ${_nome}!`);
//     return _nome;
// }

// const variavel = saudacao('Pedro');

// console.log(variavel);

// function soma(_x, _y) {
//     return _x + _y;
// }

// console.log(soma(4, 4));

//Para definir valores padroes caso eu nao especifique os parametros:

// function soma(_x = 2, _y = 3) {
//     return _x + _y;
// }

// console.log(soma());
// console.log(soma(3));
// console.log(soma(3, 4));

//Funcao anonima:
//Preciso colocar o ;

const raiz = function (_x) {
    return _x ** 0.5;
};

console.log(raiz(3));

//Arrow Function:

const raiz2 = (_x) => {
    return _x ** 0.5;
};

console.log(raiz2(3));

//Ou para um parametro na arrow function:

const raiz3 = _x => _x ** 0.5;

console.log(raiz3(3));

//Para mais de um parametro na arrow function, use parenteses:

const pot = (_x, _y) => _x ** _y;

console.log(pot(2, 3));