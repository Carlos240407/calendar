const calendar = ()=>{
    const days = document.getElementById('dias-mes');
    var muestraMes = document.querySelector('.mes');
    var atras = document.querySelector('.back');
    var adelante = document.querySelector('.go');
    var today = new Date();
    var dia = today.getDay();
    var mes = today.getMonth();
    var año = today.getFullYear();
    var dias_Mes = today.getDate();
    var nameMonths = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
    muestraMes.innerHTML = nameMonths[mes];

    diasMes()
    function diasMes(){
        var diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    
        for (var dia = 1; dia <= 31; dia++) {
            days.innerHTML +=`<span class="days">${dia}</span>`
        }
    }

}




calendar()