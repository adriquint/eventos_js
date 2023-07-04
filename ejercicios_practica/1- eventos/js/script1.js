"use strict";

/* Tarea
 * Objetivos: adquirir herramientas y poner
 * en práctica lo visto en clase
 */

/* 1 - Enunciado
Transforme todos los eventos a continuación a eventos con on-event
Verifique que en la consola no figura ningún error en alguno de ellos
Verifique que en la consola sigan apereciendo los mensajes de log
*/

const boton = document.querySelector("button");

/*boton.addEventListener("click", () => {
    console.log("Respuesta evento click");
    boton.className = "btnClick";
})*/

boton.onclick = () => { 
    console.log("Respuesta evento on-click");
    boton.className = "btnClick";
}

/*boton.addEventListener("mouseover", () => {
    console.log("Respuesta evento mouseover");
    boton.className = "btnOver";
})*/

boton.onmouseover = () => { 
    console.log("Respuesta evento on-mouseover");
    boton.className = "btnOver";
}

/*boton.addEventListener("mouseout", () => {
    console.log("Respuesta evento mouseout");
    boton.className = "btnOut";
})*/

boton.onmouseout = () => { 
    console.log("Respuesta evento on-mouseout");
    boton.className = "btnOut";
}

/* 2 - Enunciado
Cree un evento que capture cuando cambia la caja de seleccion
Utilice el ejemplo de clase de modo "white y black" para guiarse
en como capturar este evento y además como capturar el valor
actual seleccionado en la caja de seleccion.
*/

const select = document.querySelector('select');

select.onchange = () => {
    switch (select.value) {
        case 'efectivo':
            console.log("Eligió pagar en efectivo");
            break;
        case 'transferencia':
            console.log("Eligió pagar por transferencia");
            break;
        case 'tarjeta':
            console.log("Eligió pagar con tarjeta");
            break;
    }
}

/* 3 - Enunciado
Cree un evento que capture cuando haya finalizado de ingresar
su nombre en el elemento "input". Deberá con un alert informar
el nombre ingresado al finalizar su ingreso.
PISTA: Debe utilizar el mismo tipo de evento que en el ejercicio
anterior.
*/

const input = document.querySelector("input");

input.onchange = () => {
    input.value === "Adriana" ? alert("El nombre ingresado es correcto.") : alert("El nombre ingresado es incorrecto. Intente de nuevo");
}