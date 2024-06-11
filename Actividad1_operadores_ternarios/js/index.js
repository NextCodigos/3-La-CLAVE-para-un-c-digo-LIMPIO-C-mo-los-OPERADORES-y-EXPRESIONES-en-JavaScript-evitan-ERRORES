let nota = 10;

function dibujar(valor) {
  // Display the value in the <div class="resultado">
  document.querySelector(".resultado").innerHTML = valor;

  // Determine the note and display it in the <div class="nota">
  let notaResultado = nota >= 5 && nota <= 10 ? "<span style='color: green;'>¡¡Has APROBADO!!</span>" : "<span style='color: red;'>Has suspendido</span>";
  document.querySelector(".nota").innerHTML = nota >= 9 ? "Excelente" : nota >= 7 ? "Notable" : nota >= 5 ? "Aprobado" : nota >= 0 ? "Suspendido" : "No te flipes";
  document.querySelector(".nota").innerHTML += notaResultado;
}

dibujar(nota);
/*
A mostrar en el <div class="resultado">
Si es de 5 a 10: "¡¡Has APROBADO!!"(color "green")
o sinó: "Has suspendido" (color "red")

A mostrar en el <div class="nota">
De 9 en adelante:       "Excelente"
De 7 a menos de 9:      "Notable"
De 5 hasta menos de 7:  "Aprobado"
Menos de 5:             "Suspendido"
Menos de 0 o más de 10: "No te flipes"
*/

/* Usar sólo TERNARIOS
(...) ? :
*/