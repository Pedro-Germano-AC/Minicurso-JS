let num1 = 4.45;

console.log(Math.floor(num1)); //Arredonda para baixo
console.log(Math.ceil(num1)); //Aredonda para cima
console.log(Math.round(num1)); //Arredonda com base na metodologia padrao
console.log(Math.random()); //Numero aleatorio entre 0 e 1
console.log(Math.min(1, 2, 50000, 3, 25, -3, -5555)); //Separa o menor valor dentre os disponiveis
console.log(Math.max(1, -4, -31, -44412312, 3333)); //Separa o maior valor dentre os disponiveis

//Trickzinho

console.log(Math.floor(Math.random() * (10 - 5) + 5)); //Retorna um valor aleatorio entre 10 e 5