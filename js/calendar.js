'use strict'
const calendar = ()=>{
    var nameMonths = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    var diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    // *********************** Dom Elements ************************* //
    var days = document.getElementById('dias-mes');
    var muestraMes = document.querySelector('.mes');
    var outYear = document.getElementById('year');
    var back = document.querySelector('.back');
    var go = document.querySelector('.go');
    // *********************** Dom Elements ************************* //

    // *********************** Objetos de fecha ************************* //
    var today = new Date();
    var day = today.getDay();
    var month = today.getMonth();
    var year = today.getFullYear();
    var dayMonth = today.getDate();
    // *********************** Objetos de fecha ************************* //

    // *********************** Representacion de objetos en el dom ************************* //
    go.addEventListener('click', nextMonth);
    back.addEventListener('click', lastMonth);

    // *********************** // Representacion de objetos en el dom // ************************* //
    function writeMonth(m){
        for(let i=starWeek(); i>0; i--){
            days.innerHTML +=`<span class="days active">${getTotalDays(month-1)-(i-1)}</span>`;
        }

        for (let i=1; i<= getTotalDays(month); i++) {
            if(i === dayMonth){
                days.innerHTML +=`<span class="days active">${i}</span>`;
            }else{
                days.innerHTML +=`<span class="days">${i}</span>`;
            }
        }
    }

    function getTotalDays(mes){
        if(mes == -1) mes = 11;
        if(mes == 0 || mes == 2 || mes == 4 || mes == 6 || mes == 7 || mes == 9 || mes == 11){
            return 31;
        }else if(mes == 3 || mes == 5 || mes == 8 || mes == 10){
            return 30;
        }
        añoBisiesto() ? 29 : 28;
    }

    function lastMonth(){
        if(month !== 0){
            month--;
            muestraMes.textContent = nameMonths[month]
        }else{
            month = 11;
            year--;
        }setNewDate();
    }

    function nextMonth(){
        if(month !== 11){
            month++;
        }else{
            month = 0;
            year++;
        }setNewDate();
    }

    function añoBisiesto(){
        return((year % 100 !==0) && (year % 4 == 0) || (year % 400 ==0));
    }


    function starWeek(){
        let initWeek = new Date(year, month, 1);
        return ((initWeek.getDay()-1) === -1) ? 6 : initWeek.getDay()-1;
        // return initWeek.getDay();
    }

    function setNewDate(){
        today.setFullYear(year, month, day);
        muestraMes.textContent = nameMonths[month];
        outYear.textContent = year;
    }

    writeMonth(month);

    setNewDate()

}




calendar()