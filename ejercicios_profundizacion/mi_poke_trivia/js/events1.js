"use strict";

const send = document.getElementById('send')
const reload = document.getElementById('reload')

/*function agregarEventos() {  
  reload.addEventListener("click", restart)
}*/

reload.onclick = () => restart()

//const input = document.querySelector("input"); CREO QUE VA EN .APP

//Lo primero que pensé:
/*send.onclick = () => {
  input.onchange = () => {
    input.value === "" ? console.log("Esperando ingreso de datos") : resultado();
  }
}*/

send.onclick = () => {
  input.onchange = () => resultado()
} 

/*function resultado() {
  console.log("funcion resultado")

}*/

// --> Evaluar: si es el nombre que corresponde al id que corresponde al thumbnail


//De carpeta 5 - COMO GUIA
/*function update(bgColor, textColor) {
  body.style.backgroundColor = bgColor;
  body.style.color = textColor;
}

select.onchange = () => {
  select.value === 'black' ? update('black','white') : update('white','black');
}*/

//De carpeta de practica - COMO GUIA
/*const input = document.querySelector("input");

input.onchange = () => {
    input.value === "Adriana" ? alert("El nombre ingresado es correcto.") : alert("El nombre ingresado es incorrecto. Intente de nuevo");
}*/