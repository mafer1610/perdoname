const mensajes = [
  "¿Estás segura?",
  "¿Segura que estás segura?",
  "¿Estás completamente segura?",
  "Te juro que nadie te ama como yo",
  "¿Por favor?",
  "Te amo",
  "Perdoname",
  "Por favor, no me dejes",
  "¿Estás segura?",
  "¿Segura que estás segura?",
  "¿Estás completamente segura?",
  "Te amo",
  "¿Por favor?",
  "Te amo",
  "Perdoname",
  "¿Por favor?",
  "¿por favor?",
  "¿Poooooor favor?",
  "te amo",
];

const boton_no = document.getElementById("btn-no");
const boton_yes = document.getElementById("btn-yes");
const boton_whatsapp = document.getElementById("btn-whatsapp");

const mensaje = document.getElementById("mensaje");
const resultado = document.getElementById("resultado");

let count = 1;

boton_no.addEventListener("mouseover", function () {
  let sonido = document.getElementById("miSonido");
  sonido.play();
  const randomX = Math.random() * (window.innerWidth - boton_no.offsetWidth);
  const randomY = Math.random() * (window.innerHeight - boton_no.offsetHeight);
  mensaje.innerText = mensajes[count - 1];

  boton_yes.style.height = 8 * count + "%";
  boton_yes.style.width = 10 * count + "%";
  boton_no.style.height = 50 - 7 * count + "px";
  boton_no.style.width = 200 - 10 * count + "px";
  boton_no.style.maxWidth = "100vw";

  boton_no.style.position = "absolute";
  boton_no.style.left = randomX + "px";
  boton_no.style.top = randomY + "px";
  boton_yes.style.position = "absolute";
  boton_yes.style.left = 40 - count * 3.5 + "%";
  boton_yes.style.top = 50 - count * 3 + "%";
  count += 1;
});

boton_yes.addEventListener("click", function () {
  let sonido = document.getElementById("miSonido2");
  sonido.play();
  resultado.style.display = "flex";
  resultado.style.flexDirection = "column";
  resultado.style.alignItems = "center";
  resultado.style.position = "absolute";
  resultado.style.zIndex = "50";
});

boton_whatsapp.addEventListener("click", function () {
  var telefono = "04128298867";
  var mensaje = "Hola, te perdoné";
  let url =
    "https://wa.me/" + telefono + "?text=" + encodeURIComponent(mensaje);
  window.open(url);
});
