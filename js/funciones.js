// Introduccion de  los fondos

var fondosIniciales = parseInt(prompt("Introduzca la cantidad inicial"));

// Funcion que pinte el dinero inicial

function fondosTotales(pFondos, pGasto) {
  var fondosTotales = pFondos - pGasto;
  return fondosTotales;
}

fondosTotales(1000, 250);
