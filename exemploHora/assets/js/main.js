function escopo () {
    const text = document.querySelector('#texto');

    // function formatHour(num) {
    //     if(num < 10) return '0'+num;
    //     else return num;
    // }

    // function getDayWeek(day) {
    //     const dayWeek = ['Domingo', 'Segunda-Feira', 'Terca-Feira',
    //                      'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sabado'];
    //     return dayWeek[day];
    // }

    // function getMonthName(month) {
    //     const months = ['Janeiro', 'Fevereiro', 'Marco', 'Abril',
    //                      'Maio', 'Junho', 'Julho', 'Agosto',
    //                       'Setembro', 'Outubro', 'Novembro', 'Dezembro']
        
    //     return months[month];
    // }

    horario = new Date();

    // hour = horario.getHours();
    // minutes = horario.getMinutes();
    // seconds = horario.getSeconds();
    // day = horario.getDay();
    // month = horario.getMonth();
    // year = horario.getFullYear();
    // date = horario.getDate();

    // // console.log(typeof(hora), typeof(minutos), typeof(segundos));
    // console.log(year);
    // text.innerHTML = `${date} de ${getMonthName(month)} de ${year}, ${getDayWeek(day)} <br> ${formatHour(hour)}:${formatHour(minutes)}:${formatHour(seconds)}`;

    const opcoes = {
        dateStyle : 'full',
        timeStyle : 'short'
    };
    text.innerHTML = horario.toLocaleString('pt-BR', opcoes);
}

escopo();
