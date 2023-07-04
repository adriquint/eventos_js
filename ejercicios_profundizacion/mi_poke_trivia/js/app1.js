"use strict";

let numero = 0;  // Se utiliza para saber el nº de pokemon a adivinar
let cantidadAcertados = 0;  // Se utiliza para saber cuantos pokemons fueron adivinados
let cantidadEncuestados = 0;  // Se utiliza para saber cuantos pokemons se intentaron adivinar

const resultText = document.querySelector("#resultText")
const imgPoke = document.querySelector("#imgpokemon")

const input = document.querySelector("input")
const puntaje = document.getElementById("puntaje")

function restart() {
    console.log("--Funcion restart--")

    resultText.textContent = ""
    imgPoke.classList.remove("success")
    numero = Math.round(Math.random()*(pokemons.length));
    imgPoke.src = (pokemons[numero].thumbnail);
    input.value = "";
    
    //Pruebas
    console.log(`Numero random: ${numero}`);
    console.log(`Nombre Poke: ${pokemons[numero].name}`);    
}

function resultado() {
    console.log("--Funcion resultado--");
    cantidadEncuestados = (cantidadEncuestados + 1);
        
    (input.value) === (pokemons[numero].name) ? (
        resultText.textContent = "¡Felicitaciones! Respuesta correcta",
        imgPoke.classList.add("success"),
        cantidadAcertados = cantidadAcertados + 1,
        console.log(`Cantidad de Acertados: ${cantidadAcertados}`)
    ) : (
        resultText.textContent = "-> RESPUESTA INCORRECTA",
        imgPoke.classList.remove("success"),
        console.log("Respuesta incorrecta")
        );
    
        /*if ((input.value) === (pokemons[numero].name)) {
        return alert("Respuesta correcta");
    } else {
        return alert("Ese no es el nombre, intente de nuevo");
    }*/

    (cantidadAcertados) >= (cantidadEncuestados / 2) ? (
        puntaje.classList.remove("puntajeBajo"),
        console.log("Puntaje bueno")
    ) : (
        puntaje.classList.add("puntajeBajo")
    );

    console.log(`Cantidad de encuestados: ${cantidadEncuestados}`);
    console.log(`Cantidad de acertados: ${cantidadAcertados}`);

    //return cantidadEncuestados;
}

restart();
//agregarEventos();
//resultado();

//funcion de incio que..
/*const iniciales = (nombre) => nombre[0].toUpperCase()
console.log(iniciales("Jean"));
console.log(input.toLowerCase())
console.log(pokemons[numero].name)*/