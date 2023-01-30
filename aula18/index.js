//Objetos

// const pessoa1 = {
//     nome: 'Luiz',
//     sobrenome: 'Miranda',
//     idade: 25
// };

// const pessoa2 = {
//     nome: 'Maria',
//     sobrenome: 'Pereira',
//     idade: 25
// };

// console.log(pessoa1.nome);
// console.log(pessoa1.sobrenome);
// console.log(pessoa1.idade);

// console.log(pessoa2.nome);
// console.log(pessoa2.sobrenome);
// console.log(pessoa2.idade);

//Funcao que cria objeto:

// function criarPessoa (_nome, _sobrenome, _idade){
//     return {
//         _nome: _nome,
//         _sobrenome: _sobrenome,
//         _idade: _idade
//     };
// }
//Como eu estou repetindo os nomes, posso definir tudo na mesma linha: 

function criarPessoa (_nome, _sobrenome, _idade){
    return { _nome, _sobrenome, _idade };
}

// console.log(criarPessoa('Pedro', 'Germano', 20));
const pessoa1 = criarPessoa('Pedro', 'Germano', 20);
const pessoa2 = criarPessoa('Joao', 'Moreira', 22);
const pessoa3 = criarPessoa('Paulo', 'Carlos', 23);


console.log(pessoa1._nome, pessoa2._sobrenome, pessoa3._idade);

console.log(pessoa1._nome, pessoa2._nome, pessoa3._nome);

//Objetos podem conter metodos (Funcoes dentro de objetos:)

const person = {
    nome: 'Maria',
    sobrenome: 'Pereira',
    idade: 25,
    //Nao colocamos a palavra "Function" antes, porem e uma funcao
    falar (){
        console.log("Ola mundo!");
    },

    usoThis(){
        console.log(`Oi, ${this.nome} ${this.sobrenome}!`);
    },

    incrementaIdade(){
        this.idade++;
    },
    
    falaIdade() {
        console.log(`A minha idade e: ${this.idade}!`);
    }
};
//E assim que chamamos um metodo de um objeto!
//O this esta pegando um dos atributos do objeto
person.falar()
person.usoThis();
person.falaIdade();
person.incrementaIdade()
person.falaIdade();