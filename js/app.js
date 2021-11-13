
let cuentaHora = 00;
let cuentaMinutos = 00;
let cuentaSegundos = 00;

let boton = document.getElementById('start');
boton.disabled = false

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

        if(cuentaSegundos > 00 ){
            boton.disabled = true
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
      boton.disabled = false;
      window.clearInterval(contador);
  }
   segundos.innerHTML = cuentaSegundos;
   minutos.innerHTML = cuentaMinutos;
   horas.innerHTML = cuentaHora;
   clearInterval(contador)
}
function stopReloj() {
    window.clearInterval(contador);
    boton.disabled = false;
}




