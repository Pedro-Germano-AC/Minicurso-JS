function escopo () {
    const form = document.querySelector('.form');
    
    function recebeEventoForm (_evento) {
        _evento.preventDefault();

        
    }

    form.addEventListener('submit', recebeEventoForm);
}


