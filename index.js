// ¡Bienvenidas y bienvenidos a nuestro primer desafío!

// Durante estas cuatro semanas, vamos a trabajar en una aplicación que encripta textos, así podrás intercambiar mensajes secretos con otras personas que sepan el secreto de la encriptación utilizada.

// Las "llaves" de encriptación que utilizaremos son las siguientes:

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

// Requisitos:

// Debe funcionar solo con letras minúsculas
// No deben ser utilizados letras con acentos ni caracteres especiales
// Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original.


var texto = document.querySelector("#encriptar-text")
var textareaDes = document.querySelector("#desencriptar-text")
var vacio = document.querySelector("#vacio")

var copiar = document.querySelector("#copiar")
var botonc = document.querySelector("#boton-copiar")

var botone = document.querySelector("#boton-encriptar")
var botond = document.querySelector("#boton-desencriptar")

texto.focus()
botone.addEventListener('click', () => {
  var mayuscula = probarMayusculas(texto.value)

  if (mayuscula == 1) {
    alert("Favor ingresar texto en minuscula")
  } else {
    if (texto.value == "") {
      alert("Texto vacio")
    } else {
      vacio.style.display = "none"
      textareaDes.value = cambiarVocales(texto.value)
      textareaDes.style.display = "block"
      texto.value = ""
      copiar.style.display = "block"
    }
  }

});

botond.addEventListener('click', () => {

  var mayuscula = probarMayusculas(texto.value)

  if (mayuscula == 1) {
    alert("Favor ingresar texto en minuscula")
  } else {
    if (texto.value == "") {
      alert("Texto vacio")
    } else {
    vacio.style.display = "none"
    textareaDes.value = revertirCambioDeVocales(texto.value)
    textareaDes.style.display = "block"
    texto.value = ""
    copiar.style.display = "block"
    }
  }

});


botonc.addEventListener('click', () => {
  navigator.permissions.query({ name: "clipboard-write" }).then((result) => {
    if (result.state === "granted" || result.state === "prompt") {
      /* write to the clipboard now */
    }
  });
  textareaDes.select()
  document.execCommand("copy")
});



function probarMayusculas(texto) {
  for (var i = 0; i < texto.length; i++) {
    if (texto[i].toUpperCase() === texto[i]) {
      return 1
    }
    else {
      return 0
    }
  }
}

function cambiarVocales(texto) {
  let fraseModificada = "";
  for (var i = 0; i < texto.length; i++) {
    if (texto[i] == "a") {
      fraseModificada += "ai";
    } else if (texto[i] == "e") {
      fraseModificada += "enter";
    } else if (texto[i] == "i") {
      fraseModificada += "imes";
    } else if (texto[i] == "o") {
      fraseModificada += "ober";
    } else if (texto[i] == "u") {
      fraseModificada += "ufat";
    } else {
      fraseModificada += texto[i];
    }
  }
  return fraseModificada;
}



function revertirCambioDeVocales(fraseModificada) {
  let textoOriginal = "";
  for (var i = 0; i < fraseModificada.length; i++) {
    if (fraseModificada.slice(i, i + 2) == "ai") {
      textoOriginal += "a";
      i++; // Saltamos el siguiente índice, ya que ya fue reemplazado
    } else if (fraseModificada.slice(i, i + 5) == "enter") {
      textoOriginal += "e";
      i += 4; // Saltamos los siguientes cuatro índices, ya que ya fueron reemplazados
    } else if (fraseModificada.slice(i, i + 4) == "imes") {
      textoOriginal += "i";
      i += 3; // Saltamos los siguientes tres índices, ya que ya fueron reemplazados
    } else if (fraseModificada.slice(i, i + 4) == "ober") {
      textoOriginal += "o";
      i += 3; // Saltamos los siguientes tres índices, ya que ya fueron reemplazados
    } else if (fraseModificada.slice(i, i + 4) == "ufat") {
      textoOriginal += "u";
      i += 3; // Saltamos los siguientes tres índices, ya que ya fueron reemplazados
    } else {
      textoOriginal += fraseModificada[i];
    }
  }
  return textoOriginal;
}







