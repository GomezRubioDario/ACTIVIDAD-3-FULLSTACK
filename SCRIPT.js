const contenedor = document.getElementById("adivinanzas");
const botonRes = document.getElementById ("boton");
const resultadoAdivinanza = document.getElementById ("resultado");


const preguntas = [
// adivinanza 1 
    {
        pregunta: "1. Negro simiente, tostad0 al carbón, potente aliciente, energía marrón",
        respuestas: {
            a:  "Corteza", 
            b:  "Chocolate", 
            c:  "Cucaracha", 
            d:  "Café", 
            e:  "Madera", 
            f:  "Cuero"
        },
        respuestaCorrecta: "d"
    },

// adivinanza 2
    {
        pregunta: "2. Tengo llaves pero no cerradura. El blanco y el negro pasan por mi cintura",
        respuestas: {

            a:  "Cofre del tesóro",
            b:  "Auto", 
            c:  "Candado", 
            d:  "Corazón", 
            e:  "Html", 
            f:  "Karate"
       },
        respuestaCorrecta: "f"
    },

// adivinanza 3
    {
        pregunta: "3. ¿Quién es algo y nada a la vez?",
        respuestas: {

            a:  "Silencio",
            b:  "Ramón", 
            c:  "Pensamiento", 
            d:  "Pez", 
            e:  "Zapallo", 
            f:  "Otro pez"
        },
        respuestaCorrecta: "d"
    }
]; 


function mostrarAdivinanzas(){
    const preguntasYrespuestas = [];

    preguntas.forEach((preguntaActual,numeroDePregunta) => {
        const respuestas = [];
        for(letraRespuesta in preguntaActual.respuestas){
            respuestas.push(
                `<label>        
                    <input type="radio" name="${numeroDePregunta}" value="${letraRespuesta}">
                    ${letraRespuesta} : ${preguntaActual.respuestas[letraRespuesta]}
                </label>`
            );
        }

        preguntasYrespuestas.push(

            `<div class="cuestion"> ${preguntaActual}   
            </div>
            <div class="respuestas"> ${respuestas.join('')}   
            </div>`

        );

    });

    contenedor.innerHTML = preguntasYrespuestas.join(''); 

}

mostrarAdivinanzas();

function mostrarResultado(){
    const respuestas = contenedor.querySelectorAll(".respuestas");
    let respuestasCorrectas = 0;

preguntas.forEach((preguntaActual, numeroDePregunta) => {
    const todasLasRespuestas = respuestas[numeroDePregunta];
    const checkboxRespuestas = `input[name='${numeroDePregunta}']:checked`;
    const respuestaElegida = (todasLasRespuestas.querySelector(checkboxRespuestas) || {}).value;

    if(respuestaElegida === preguntaActual.respuestaCorrecta){
        respuestaCorrecta++;

        respuestas[numeroDePregunta].getElementsByClassName.color = 'blue';
    } else{
        respuestas[numeroDePregunta].style.color = 'red';
    }
});

resultadoAdivinanza.innerHTML = 'Acertaste' + respuestasCorrectas + 'preguntas de un total de' + preguntas.length;

}

botonRes.addEventListener ('click', mostrarAdivinanzas);