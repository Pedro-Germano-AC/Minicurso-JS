const form = document.querySelector('#formulario'); //Uso # pois e o ID.
const resultado = document.querySelector('#resultado');
const descricao = document.querySelector('#descricao')

descricao.innerHTML = `<p><b>MENOR QUE 18,5    - 	MAGREZA</b></p>
                       <p><b>ENTRE 18,5 E 24,9 - 	NORMAL</b></p>
                       <p><b>ENTRE 25,0 E 29,9 - 	SOBREPESO</b></p>
                       <p><b>ENTRE 30,0 E 39,9 - 	OBESIDADE</b></p>
                       <p><b>MAIOR QUE 40,0    - 	OBESIDADE GRAVE</b></p>

                       `;
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const peso = document.querySelector('#peso');
    const altura = document.querySelector('#altura');
    const imc = Number(peso.value) / Number(altura.value)**2;

    console.log(peso.value, altura.value);

    if(imc > 0 && imc < 18.5){
        resultado.innerHTML = `<p>O seu IMC eh: ${imc}. Atualmente, classificado como <b>magreza</b>.</p>`;
    } else if (imc >= 18.5 && imc < 25) {
        resultado.innerHTML = `<p>O seu IMC eh: ${imc}. Atualmente, classificado como <b>normal</b>.</p>`;
    } else if (imc >= 25 && imc < 30){
        resultado.innerHTML = `<p>O seu IMC eh: ${imc}. Atualmente, classificado como <b>sobrepeso</b>.</p>`;
    } else if (imc>= 30 && imc < 40){
        resultado.innerHTML = `<p>O seu IMC eh: ${imc}. Atualmente, classificado como <b>obesidade</b>.</p>`;
    } else {
        resultado.innerHTML = `<p>O seu IMC eh: ${imc}. Atualmente, classificado como <b>obesidade grave</b>.</p>`;
    }
});