const semanas = [
    {
        numero:"1",
        subtitulo: "Clasificación de problemas",
        tema:"algorítmicos Presentación del curso. Clasificación de problemas algorítmicos, problemas P y NP. Problemas de decisión, localización y optimización. Descripción de algunos problemas NP-difícil.",
        clase: {tipo: "power_point",nombre:"clase 1",link:"https://docs.google.com/presentation/d/1EzWnm403W2xPvLDssZvvHS-WTzT7o7zkh9qLKgkpKRs/edit?usp=sharing"}
    },
    {
        numero:"2",
        subtitulo: "Fundamentos de la inteligencia artificial",
        tema:"Definición de la Inteligencia Artificial. Máquina inteligente. Diferencia entre sistemas operacionales y sistemas inteligentes. Aplicaciones en la industria y servicios (robótica, planificación, gestión de desperdicios). Test de Turing.",
        clase: {tipo: "power_point",nombre:"clase 2",link:"https://docs.google.com/presentation/d/1ediU4PRx2BVvWLq7adaVr6uSNTjrsjbO7QcA7Z50aH8/edit?usp=sharing"},
        trabajo:[
            {
                tipo: "lisp",
                nombre: "lisp1",
                link:"https://drive.google.com/file/d/151Ase5jqztbjs3H892zJ3g0GD-L4bvFd/view?usp=sharing"
            },
            {
                tipo: "lisp",
                nombre: "lisp2",
                link:"https://drive.google.com/file/d/1lcriAZJKr9_2zhXJt-pFGdtTMGJP5NT8/view?usp=sharing"
            }
        ]

    },
    {
        numero:"3",
        subtitulo: "Representación de problemas de juego humano – máquina como búsqueda en un espacio de estado",
        tema:"Definición de problemas de la IA como problemas de búsqueda en un espacio de estado. Representación de problemas de juegos humano – máquina.",
        clase: {tipo: "power_point",nombre:"clase 3",link:"https://docs.google.com/presentation/d/1asMq4eNcIaVgQDdGq7DVKvddUApMEblxBOaOirvlKrU/edit?usp=sharing"},
    },
    {
        numero:"4 y 5",
        subtitulo: "Métodos de búsqueda ciegos e informados",
        tema:"La función evaluadora, métodos de búsqueda ciega ó no informados: amplitud, profundidad y no determinístico, métodos que usan información adicional: primero el mejor, ascenso a la colina, A*, ramificación y acotación.",
    },
    {
        numero:"6",
        subtitulo: "Métodos de búsqueda para juegos humano-máquina",
        tema:"Algoritmo de juego humano – máquina. Estrategias de juego de máquina: no determinístico, primero el mejor, min-max y mejor diferencia de utilidades. Algoritmo min-max y alfa-beta.",
    },
    {
        numero:"7",
        subtitulo: "Presentación de trabajos computacionales",
        tema:"Los alumnos mostrarán sus habilidades en cuanto al desarrollo de software de juegos inteligentes basados en técnicas de búsqueda. Se deberá presentar un informe y un software, y deberán exponer sus trabajos..",
    },
    {
        numero:"9",
        subtitulo: "Fundamentos de sistemas expertos Definición de Sistemas Expertos",
        tema:"Arquitectura de un sistema experto. Taxonomía y aplicaciones de los sistemas expertos. Requisitos para el desarrollo de sistemas expertos y ventajas del uso de sistemas expertos. Algunos problemas basados en el conocimiento.",
    },
    {
        numero:"10",
        subtitulo: "Ingeniería de conocimiento",
        tema:"Introducción. Adquisición de conocimiento. Construcción de la base de hechos y base de conocimiento. Estructuras de representación de conocimientos (reglas Si-Entonces, frames, objects, redes semánticas, lógica de predicados). La metodología CommonKADS. Diseño de Sistemas Expertos (SE). Ciclo de vida de un SE.",
    },
    {
        numero:"11",
        subtitulo: "Desarrollo de sistemas expertos basados en reglas",
        tema:"Construcción de la base de hechos y base de conocimiento. El motor de inferencia. Los métodos de encadenamiento regresivo, progresivo y reversibilidad. Técnicas de equiparación, el algoritmo RETE. Técnicas de resolución de conflictos.",
    },
    {
        numero:"12",
        subtitulo: "Razonamiento aproximado",
        tema:"Razonamiento probabilístico y difuso. Sistemas expertos basados en lógica difusa. Conjuntos difusos y operaciones sobre ellos. Borrosificación, mecanismos de inferencia difusa y desborrosificación. Tareas: ejercicios sobre implementación de un sistema de inferencia difusa para algunos casos de estudio.",
    },
    {
        numero:"13",
        subtitulo: "Calidad y validación de sistemas expertos",
        tema:"Principales errores en el desarrollo de un sistema experto. Calidad de un sistema experto. Validación de sistemas inteligentes, métodos cuantitativos de validación. Eficiencia y error de sistemas expertos. Revisión de la funcionalidad del SE del 2do trabajo. Tareas: ejercicios sobre calidad y validación de SE, validar el sistema propuesto del 2do trabajo.",
    },
    {
        numero:"14",
        subtitulo: "Introducción a Machine Learning",
        tema:" Conceptos de aprendizaje y de machine learning. Sistemas experto vs machine learning. Técnicas de aprendizaje y fases de desarrollo de machine learning. Aplicaciones de machine learning en la industria y servicios. Conceptos de heurísticas y meta-heurísticas. Algoritmos exactos vs algoritmos heurísticos. Técnicas heurísticas y meta-heurísticas. Problemas de optimización combinatoria en la industria y servicios.",
    },
    {
        numero:"15",
        subtitulo: "Presentación de trabajos computacionales",
        tema:"Los alumnos mostrarán sus habilidades en cuanto al desarrollo de software de juegos inteligentes basados en técnicas de búsqueda. Se deberá presentar un informe y un software, y deberán exponer sus trabajos.",
    },
];


const $tabla = document.querySelector(".tabla");

for(let i = 0; i < semanas.length; i = i + 1){
    let datos_fila = semanas[i];
    const $nuevaFila = document.createElement("tr");

    let elemento_tema = `
        <td class="tabla__tema">
        <h2>${datos_fila.subtitulo}</h2>
        <p>${datos_fila.tema}</p>
        </td>
    `

    let elemento_clase = datos_fila.hasOwnProperty("clase")?
    `
        <td class="tabla__clase">
        <a class="clase__elemento" href="${datos_fila.clase.link}" target="__blank">
            <img class="tabla__logo" src="./img/icon/${datos_fila.clase.tipo}.png" alt="${datos_fila.clase.nombre}" title="${datos_fila.clase.nombre}">
            <span>${datos_fila.clase.nombre}</span>
        </a>
        </td>
    `:'<td class="tabla__clase"></td>'

    
    let elemento_trabajo = `<td class="tabla__trabajo"></td>`;
    if(datos_fila.hasOwnProperty("trabajo")){
        elemento_trabajo = `<td class="tabla__trabajo trabajo__elementos">`;
        for(let i = 0; i < datos_fila["trabajo"].length; i = i + 1){
            let elemento = datos_fila["trabajo"][i];
            elemento_trabajo = elemento_trabajo + 
            `<a class="clase__elemento" href="${elemento.link}" target="__blank">
            <img class="tabla__logo" src="./img/icon/${elemento.tipo}.png" alt="${elemento.nombre}" title="${elemento.nombre}">
            <span>${elemento.nombre}</span>
            </a>`
        }
        elemento_trabajo = elemento_trabajo + `</td>`;
    }

    
    $nuevaFila.innerHTML = `
    <td class="tabla__semana">${datos_fila.numero}</td>
    ${elemento_tema}
    ${elemento_clase}
    ${elemento_trabajo}`
    $tabla.appendChild($nuevaFila);
}