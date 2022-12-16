
obtenerNombre= prompt ("Hola soy Amaia escribe tu nombre para seguir")
let nombre = obtenerNombre;

let htmlCode = ` <h2>${nombre}</h2>
<p>Te quiero invitar a festejar mi cumple años Nro 5 el dia <b>28/12/22</b> a partir de las  <b>19hs</b> en el club <b>Laureles</b> ubicado por calle 25 de agosto.
      espero tu confirmacion por WhatsApp Gracias   </p>`
document.querySelector(".capa").innerHTML+=htmlCode 