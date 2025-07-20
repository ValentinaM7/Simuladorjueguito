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



const bienvenida = prompt("Bienvenido a este simulador de juegos. \n ¿Qué le gustaría hacer? \n\n 1- Jugar Pistas \n 2- Jugar Preguntas y respuestas \n 3 - Agregar preguntas")

switch(bienvenida){
    case "1":
        alert("Elegiste la opción 1. \n ¿Estás preparado para jugar? \n\n En este juego te daremos distintas pistas y tú tendrás que adivinar de qué o quién se trata. \n Estás preparado?")
        let opcion = prompt("Elige una categoría: \n A-Lugares \n B-Deportes \n C-Musica"); jugarPorCategoria(opcion);
        break;
    case "2":

        break;
    case "3":

        break;
}

function jugarPorCategoria(opcion) {
    let categoriaElegida = "";

    switch(opcion.toUpperCase()) {
        case "A":
            categoriaElegida = "Lugares";
            pistasLugares1();
            break;
        case "B":
            categoriaElegida = "Deportes";
            break;
        case "C":
            categoriaElegida = "Musica";
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
