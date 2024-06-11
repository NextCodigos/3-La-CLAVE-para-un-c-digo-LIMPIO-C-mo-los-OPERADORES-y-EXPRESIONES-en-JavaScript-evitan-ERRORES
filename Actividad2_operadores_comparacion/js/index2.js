const NOMBRE_CORRECTO = "jab";
const ALIAS_CORRECTO = "soyjab";
const PIN_CORRECTO = 12;
const PASSWORD_CORRECTO = "1234";

function evaluar() {
  const NOMBRE = document.getElementById("nombre").value;
  const PIN = parseInt(document.getElementById("pin").value);
  const PASSWORD = document.getElementById("password").value;

  (NOMBRE === PIN && PIN === PASSWORD && NOMBRE !== "") ||
  ((NOMBRE === NOMBRE_CORRECTO || NOMBRE === ALIAS_CORRECTO) &&
    (PASSWORD === PASSWORD_CORRECTO || PIN === PIN_CORRECTO))
    ? dibujar(`<div class="bien">Bien</div>`)
    : dibujar(`<div class="mal">Mal</div>`);
}

function dibujar(valor) {
  document.querySelector(".resultado").innerHTML = valor;
}

// Explicación:

//     HTML:
//         He añadido tres campos de entrada (input) para el nombre, contraseña y PIN, así como un botón que llama a la función evaluar() cuando se hace clic.

//     JavaScript:
//         La función evaluar() obtiene los valores de los campos de entrada.
//         El PIN se convierte a un número usando parseInt().
//         Se evalúan las condiciones lógicas descritas, y se llama a dibujar() para mostrar el resultado correspondiente.

// Ahora, cuando el usuario introduce el nombre, el PIN y la contraseña, y hace clic en el botón "Evaluar", el código comprueba si los datos coinciden con los valores correctos y muestra "Bien" en verde o "Mal" en rojo, según corresponda.