/*
      * Corrige el siguiente código de tal forma que obtengas el resultado esperado,
      * usa las técnicas de depuración que conoces para encontrar y solucionar el error.
      */

const revertirTexto = texto => {
    const elem = document.getElementById('texto-inicial');
    elem.innerHTML = 'Palabra inicial: ' + texto;
    const elem2 = document.getElementById('texto-resultante');
    let textoInvertido = "";
    let longitud = texto.length;
    for (let i = longitud; i > 0; i--) {
        textoInvertido += texto.charAt(i);
    }
    elem2.innerText = 'Texto resultante: '+ textoInvertido;
    return textoInvertido;
};

var resultado = revertirTexto("Laboratoria");
// Resultado actual: airotaroba
// Resultado esperado: airotarobaL
console.log(resultado);

/*** HINT: Son 2 cambios para que quede correctamente ***/