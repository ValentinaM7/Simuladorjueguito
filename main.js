const preguntasPistas = [
    { categoria: "Lugares",
        respuesta: "Tokyo",
        pistas: ["Esta ciudad fue conocida como Edo hasta el siglo XIX.",
                "Es la sede de la torre más alta del mundo construida en una ciudad que no está en el Medio Oriente.",
                "Aquí conviven templos antiguos con tecnología de vanguardia y trenes bala",
                "Es la capital de Japón. " ,]
            
        },
    { categoria: "Lugares",
        respuesta: "Cuba",
        pistas: ["Este país insular fue un importante centro de comercio de azúcar en los siglos XVIII y XIX.",
                "Su capital es conocida por sus autos clásicos y su arquitectura colonial",
                "Es famosa por su música como el son, la salsa y la rumba.",
                "Es una isla del Caribe cuyo sistema político es comunista desde 1959." ,]
    },
    { categoria: "Deportes",
        respuesta: "Waterpolo",
        pistas: ["Este deporte combina habilidades de natación, estrategia y trabajo en equipo, y se juega en un entorno acuático.",
                "Se practica en una piscina, y los jugadores deben mantenerse a flote todo el tiempo sin tocar el fondo.",
                "El objetivo es lanzar una pelota al arco del equipo contrario, similar al fútbol pero en el agua.",
                "Es un deporte de equipo que se juega en el agua con una pelota y dos arcos.",
        ]
    },
    { categoria: "Deportes",
        respuesta: "Novak Djokovic",
        pistas: ["Este atleta serbio ganó su primer título de Grand Slam en el Abierto de Australia en 2008.",
                "Es conocido por su resistencia física, su juego desde el fondo de la cancha y su habilidad para defender.",
                "Ha sido número uno del ranking ATP en múltiples ocasiones, compitiendo intensamente con Federer y Nadal.",
                "Es un famoso tenista serbio cuyo nombre comienza con N y cuyo apellido empieza con D.",
                ]
    },
    { categoria: "Musica",
        respuesta: "Luis Miguel",
        pistas: [ "Nació en Puerto Rico, pero es considerado un ícono de la música mexicana.",
            "Fue conocido como “El Sol” desde muy joven por su carisma y potencia vocal.",
            "Es famoso por interpretar boleros, baladas y mariachi, y por revitalizar el género romántico en los años 90.",
            "Es un cantante latino muy popular, con una exitosa serie de Netflix basada en su vida.",
        ]
    },
    { categoria: "Musica",
        respuesta: "Reggae",
        pistas: ["Este estilo musical se originó a finales de los años 60 en una isla del Caribe.",
            "Se caracteriza por un ritmo relajado, con énfasis en los tiempos débiles del compás.",
            "Sus letras suelen hablar de paz, amor, justicia social y espiritualidad rastafari.",
            "Es un género musical asociado a Bob Marley y a Jamaica.",
        ]
    }
]

const preguntasYRespuestas =[
    {pregunta: "¿Cuál es el elemento químico con el símbolo 'Au'?",respuesta: "Oro"},
    {pregunta: "¿Qué país tiene la mayor cantidad de hablantes nativos de español en el mundo?", respuesta: "México"},
    {pregunta: "¿En qué año cayó el Muro de Berlín?",respuesta: "1989"},
    {pregunta: "¿Cuál es el río más largo del mundo?",respuesta: "Amazonas"},
    {pregunta: "¿Quién escribió *Cien años de soledad*?",respuesta: "Gabriel García Márquez"},
    {pregunta: "¿Cuál es el número primo más pequeño mayor que 100?", respuesta: "101"},
    {pregunta: "¿Qué científico desarrolló la teoría general de la relatividad?", respuesta: "Albert Einstein"},
    {pregunta: "¿En qué continente se encuentra el desierto del Sahara?", respuesta: "África"},
    {pregunta: "¿Qué país fue sede de los Juegos Olímpicos en 2008?",respuesta: "China"},
    {pregunta: "¿Cuál es la capital de Nueva Zelanda?",respuesta: "Wellington"},
]


let juego = true

while(juego){
    let bienvenida = prompt("Bienvenido a este simulador de juegos. \n ¿Qué le gustaría hacer? \n\n 1- Jugar Pistas \n 2- Jugar Preguntas y respuestas \n 3 - Agregar preguntas")


    switch(bienvenida){
        case "1":
            alert("Elegiste la opción 1. \n ¿Estás preparado para jugar? \n\n En este juego te daremos distintas pistas y tú tendrás que adivinar de qué o quién se trata. \n Estás preparado?")
            

            let siguejugando = true;
            while (siguejugando) {
                    let opcion = prompt("Elige una categoría: \n A-Lugares \n B-Deportes \n C-Musica"); jugarPorCategoria();

                    let unavezmas = prompt("¿Querés seguir jugando? Si o no")
                    if (unavezmas.toLowerCase () !== "si"){
                        siguejugando=false;
                    alert ("Gracias por jugar");
                    }
                }
            break;
        
        case "2":
            alert("Veamos el otro juego \n En este juego tendrás que responder preguntas de cultura general");
            let ready = prompt("¿Estás preparado?")
                if (ready.toLowerCase () === "si"){
                    JuegoPreguntasYRespuestas ();
                }else{(unavezmas.toLowerCase () !== "si");
                    {siguejugando=false;
                    alert ("Gracias por jugar");
                    }
                }
            break;
        case "3":
            alert("Agregarás preguntas al segundo juego") ; agregarPregunta() 
            
        break;
        
        default:
            alert("No es una opción valida");
    }
    let volveralmenu = prompt("¿Querés ver las opciones nuevamente? si/no")
    if (volveralmenu.toLowerCase() !== "si") {
        juego = false
    }
}

function jugarPorCategoria(opcion) {
    let categoriaElegida = "";

    switch(opcion.toUpperCase()) {
        case "A":
            categoriaElegida = "Lugares";
            pistasLugares1();
            pistasLugares2();
            break;
        case "B":
            categoriaElegida = "Deportes";
            pistasDeportes1();
            pistasDeportes2();
            break;
        case "C":
            categoriaElegida = "Musica";
            pistasMusica1();
            pistasMusica2();
            break;
        default:
            alert("No contamos con esa categoría... \n aún");
            return;
    }
}

function pistasLugares1(){
    let preguntaTokyo = "";
    //Aca es para buscar la pregunta
    for (let i=0; i<preguntasPistas.length;i++){
        if(
        preguntasPistas[i].categoria === "Lugares" && preguntasPistas[i].respuesta === "Tokyo")
        {preguntaTokyo = preguntasPistas[i];
        }
    }
    
    //Juego con las pistas + Bandera

    let RespuestaCorrecta = false;

    for (let i=0; i<preguntaTokyo.pistas.length;i++){
        let intento = prompt(preguntaTokyo.pistas[i] + "\n ¿En qué estás pensando?")

    if (intento.toLowerCase() == "tokyo"){
        alert("¡Muy bien! Correcto. Vamos con mas pistas.")
        break;
    }else{
        alert("OH NO!! Vamos con otra pista...")
    }
    
}}
if  (!RespuestaCorrecta) {
    alert("Se acabaron las pistas, que mal... La respuesta era Tokyo");
}
function pistasLugares2(){
    let preguntaCuba = "";
    //Aca es para buscar la pregunta
    for (let i=0; i<preguntasPistas.length;i++){
        if(
        preguntasPistas[i].categoria === "Lugares" && preguntasPistas[i].respuesta === "Cuba")
        {preguntaCuba = preguntasPistas[i];
        }
    }
    
    //Juego con las pistas + Bandera

    let RespuestaCorrecta = false;

    for (let i=0; i<preguntaCuba.pistas.length;i++){
        let intento = prompt(preguntaCuba.pistas[i] + "\n ¿En qué estás pensando?")

    if (intento.toLowerCase() == "cuba"){
        alert("¡Muy bien! Correcto. Vamos con mas pistas.")
        break;
    }else{
        alert("OH NO!! Vamos con otra pista...")
    }
    
}}
if  (!RespuestaCorrecta) {
    alert("Se acabaron las pistas, que mal... La respuesta era Cuba");
}



function pistasDeportes1(){
    let preguntaWaterpolo = "";
    //Aca es para buscar la pregunta
    for (let i=0; i<preguntasPistas.length;i++){
        if(
        preguntasPistas[i].categoria === "Deportes" && preguntasPistas[i].respuesta === "Waterpolo")
        {preguntaWaterpolo = preguntasPistas[i];
        }
    }
    
    //Juego con las pistas + Bandera

    let RespuestaCorrecta = false;

    for (let i=0; i<preguntaWaterpolo.pistas.length;i++){
        let intento = prompt(preguntaWaterpolo.pistas[i] + "\n ¿En qué estás pensando?")

    if (intento.toLowerCase() == "waterpolo"){
        alert("¡Muy bien! Correcto. Vamos con mas pistas.")
        break;
    }else{
        alert("OH NO!! Vamos con otra pista...")
    }
    
}}
if  (!RespuestaCorrecta) {
    alert("Se acabaron las pistas, que mal... La respuesta era waterpolo");
}

function pistasDeportes2(){
    let preguntaNovac = "";
    //Aca es para buscar la pregunta
    for (let i=0; i<preguntasPistas.length;i++){
        if(
        preguntasPistas[i].categoria === "Deportes" && preguntasPistas[i].respuesta === "Novac Djokovic")
        {preguntaNovac = preguntasPistas[i];
        }
    }
    
    //Juego con las pistas + Bandera

    let RespuestaCorrecta = false;

    for (let i=0; i<preguntaNovac.pistas.length;i++){
        let intento = prompt(preguntaNovac.pistas[i] + "\n ¿En qué estás pensando?")

    if (intento.toLowerCase() == "novac djokovic"){
        alert("¡Muy bien! Correcto. Vamos con mas pistas.")
        break;
    }else{
        alert("OH NO!! Vamos con otra pista...")
    }
    
}}
if  (!RespuestaCorrecta) {
    alert("Se acabaron las pistas, que mal... La respuesta era Novac Djokovic");
}



function pistasMusica1(){
    let preguntaLuisM = "";
    //Aca es para buscar la pregunta
    for (let i=0; i<preguntasPistas.length;i++){
        if(
        preguntasPistas[i].categoria === "Musica" && preguntasPistas[i].respuesta === "Luis Miguel")
        {preguntaLuisM = preguntasPistas[i];
        }
    }
    
    //Juego con las pistas + Bandera

    let RespuestaCorrecta = false;

    for (let i=0; i<preguntaLuisM.pistas.length;i++){
        let intento = prompt(preguntaLuisM.pistas[i] + "\n ¿En qué estás pensando?")

    if (intento.toLowerCase() == "luis miguel"){
        alert("¡Muy bien! Correcto. Vamos con mas pistas.")
        break;
    }else{
        alert("OH NO!! Vamos con otra pista...")
    }
    
}}
if  (!RespuestaCorrecta) {
    alert("Se acabaron las pistas, que mal... La respuesta era Luis Miguel");
}

function pistasMusica2 (){
    let preguntaReggae = "";
    //Aca es para buscar la pregunta
    for (let i=0; i<preguntasPistas.length;i++){
        if(
        preguntasPistas[i].categoria === "Musica" && preguntasPistas[i].respuesta === "Reggae")
        {preguntaReggae = preguntasPistas[i];
        }
    }
    
    //Juego con las pistas + Bandera

    let RespuestaCorrecta = false;

    for (let i=0; i<preguntaReggae.pistas.length;i++){
        let intento = prompt(preguntaReggae.pistas[i] + "\n ¿En qué estás pensando?")

    if (intento.toLowerCase() == "reggae"){
        alert("¡Muy bien! Correcto. Vamos con mas pistas.")
        break;
    }else{
        alert("OH NO!! Vamos con otra pista...")
    }
    
}}

if  (!RespuestaCorrecta) {
    alert("Se acabaron las pistas, que mal... La respuesta era reggae");
}

function JuegoPreguntasYRespuestas () {
    for (let i=0; i<preguntasYRespuestas.length; i++){
        let respuestaJugador = prompt(preguntasYRespuestas[i].pregunta);
    if (respuestaJugador.toLowerCase () === preguntasYRespuestas[i].respuesta.toLowerCase()){
        alert("Muy bien! Siguiente")
    }else{
        alert("Incorrecto. La respuesta era " + preguntasYRespuestas[i].respuesta)
        }
    }
}

function agregarPregunta () {
    let preguntaAgregada = prompt("¿Cuál es la pregunta?");
    let respuestaAgregada = prompt("¿Cuál es la respuesta?");

    const cositasAgregadas = {
        pregunta : preguntaAgregada,
        respuesta : respuestaAgregada,
    }
    preguntasYRespuestas.push(cositasAgregadas)

    console.log(preguntasYRespuestas)
}