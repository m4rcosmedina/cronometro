/*
let numero = 5;


let lanzamiento = setInterval(()=>{
    console.log ('lanzamiento en'+ numero + 'segundos');
    numero-- ;
    if (numero == 0){
        clearInterval(lanzamiento);
    }

},1000);
*/

let cuentaHora = 00;
let cuentaMinutos = 00;
let cuentaSegundos = 00;

let segundos = document.querySelector('#segundos');
let minutos = document.querySelector('#minutos');
let horas = document.querySelector('#horas');


function playReloj() {
    contador = setInterval(function () {
        if (cuentaSegundos == 60) {
            cuentaSegundos = 00;
            cuentaMinutos++;
        }
        if (cuentaMinutos == 60) {
            cuentaMinutos = 00;
            cuentaHora++;
        }
        if (cuentaSegundos < 10 ){
            cuentaSegundos = "0" + cuentaSegundos;
        }

        segundos.innerHTML = cuentaSegundos;
        cuentaSegundos++;
        minutos.innerHTML = cuentaMinutos;
        horas.innerHTML = cuentaHora;
}, 1000);
}
function resetReloj() {
  if(cuentaSegundos>0 || cuentaMinutos>0 || cuentaHora || 0){
      cuentaSegundos = 00;
      cuentaMinutos = 00;
      cuentaHora = 00;
  }
   segundos.innerHTML = cuentaSegundos;
   minutos.innerHTML = cuentaMinutos;
   horas.innerHTML = cuentaHora;
   clearInterval(contador)
}
function stopReloj() {
    window.clearInterval(contador);
}

