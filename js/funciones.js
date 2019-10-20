// Introduccion de  los fondos

var fondosIniciales = parseInt(prompt("Introduzca la cantidad inicial"));
console.log(fondosIniciales.typeof);
var fondoTotal = document.querySelector(".contenedor #totalFondos input");
/* fondoTotal.value = fondosIniciales; */

// Funcion que calcule el total del dinero

function calcularFondos(pFondos, pGasto) {
  var fondosRestantes = 0;
  fondosRestantes = pFondos - pGasto;

  console.log(fondosRestantes);
}
