const confirma = confirm('Voce fara uma soma?');

if (confirma) {
    let num1 = prompt('Digite o primeiro valor');
    num1 = Number(num1);
    let num2 = prompt('Digite o segundo valor');
    num2 = Number(num2);
    alert(num1 + num2);
}