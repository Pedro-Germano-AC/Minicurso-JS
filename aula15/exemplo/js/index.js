const numero = Number(prompt("Digite o numero desejado"));
const numtitulo = window.document.getElementById("num-titulo"); // Repare que eu estou recuperando a partir de uma variavel
const textoBody = window.document.getElementById("textoBody"); // idem

numtitulo.innerHTML = numero; // Estou modificando o meu html.
textoBody.innerHTML = `<p>Raiz quadrada: ${numero**1/2}</p>
                        <p> ${numero} e inteiro ${Number.isInteger(numero)}</p>
                        <p> E NaN? ${isNaN(numero)}</p>
                        <p> Arredondando para baixo ${Math.floor(numero)}</p>
                        <p> Arredondando para cima: ${Math.ceil(numero)}</p>
                        <p> Com duas casas decimais ${numero.toFixed(2)}</p>`