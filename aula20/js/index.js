function escopo () {
    const form = document.querySelector('.form'); //.form, pois e o nome da classe. Se fosse id seria #id
    const resultado = document.querySelector('.resultado');
    const pessoas = [];

    function criarPessoa(_nome, _sobrenome, _peso, _altura) {
        return {_nome, _sobrenome, _peso, _altura};
    }

    function recebeEventoForm (evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push(criarPessoa(nome.value, sobrenome.value, peso.value, altura.value));

        console.log(pessoas);

        resultado.innerHTML+=`<p>Nome: ${nome.value} - Sobrenome ${sobrenome.value} - Peso: ${peso.value} - Altura: ${altura.value}</p>`;
    }

    form.addEventListener('submit', recebeEventoForm);

}

escopo();