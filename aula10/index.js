//Tipos de Dados Primitivos
// String, number undefined, null, boolean, symbol
const nome = 'luiz'; //string
const nome1 = "luiz"; //string
const nome2 = `luiz`; //string
const num1 = 10; //number
const num2 = 10.52 //number
let nomeAluno; //undefinned -> nao aponta pra local nenhum na memoria 
let sobrenomeAluno = null; //null -> nao aponta pra local nenhum na memoria (Explicitamente eu digo que nao aponta)
const verdadeiro = true; //logico
const falso = false; //logico

//Para sabermos o tipo, usamos typeof

//Para convertermos uma string em int/float, usamos:
//parseInt(string)
//parseFloat(string)
//O mais novo metodo e Number(string)