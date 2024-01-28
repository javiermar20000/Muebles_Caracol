// Función para mostrar la imagen en la ventana emergente
function showImage(imageSrc) {
  var modal = document.getElementById('myModal');
  var modalImg = document.getElementById('img01');
  
  modal.style.display = 'block';
  modalImg.src = imageSrc;
}

// Cerrar la ventana emergente al hacer clic en la 'x'
var closeBtn = document.getElementsByClassName('close')[0];
closeBtn.onclick = function() {
  var modal = document.getElementById('myModal');
  modal.style.display = 'none';
}

function toggleCategoryMenu() {
  var categoryMenu = document.getElementById('category-menu');

  // Deslizar hacia abajo o arriba
  if (categoryMenu.style.display === 'block') {
      categoryMenu.style.display = 'none';
  } else {
      categoryMenu.style.display = 'block';
  }
}

// Función para mostrar el menú de categorías en función del ancho de la pantalla
function ajustarMenuCategorias() {
  const categoryMenu = document.getElementById('category-menu');

  // Verificar si la pantalla es de escritorio (ancho mayor a 768px)
  if (window.innerWidth > 768) {
    categoryMenu.style.display = 'block';
  } else {
    categoryMenu.style.display = 'none';
  }
}

// Asignar la función al evento de carga del documento
document.addEventListener('DOMContentLoaded', function () {
  ajustarMenuCategorias();
});

// También puedes agregar un evento de redimensionamiento para ajustar el menú si la pantalla cambia de tamaño
window.addEventListener('resize', function () {
  ajustarMenuCategorias();
});

let total = 0;
let productosSeleccionados = []; // Array para almacenar nombres de productos seleccionados

document.addEventListener("DOMContentLoaded", function () {
  const storedProductos = localStorage.getItem("productosConURL");
  const storedTotal = localStorage.getItem("totalCompra");

  if (storedProductos && storedTotal) {
    productosSeleccionados = JSON.parse(storedProductos);
    total = parseFloat(storedTotal);
    actualizarTotal();
  }
});

function actualizarLocalStorage() {
  // Actualizar productos y total del carrito en localStorage
  localStorage.setItem("productosConURL", JSON.stringify(productosSeleccionados));
  localStorage.setItem("totalCompra", total);
}

function actualizarTotal() {
  const totalElement = document.getElementById('cart-total');
  totalElement.textContent = `$${total % 1 === 0 ? total : total.toFixed(2)}`;
}

function realizarCompra() {
  if (productosSeleccionados.length === 0) {
    alert("No has seleccionado ningún producto para comprar.");
    return;
  }

  const totalCompra = total; // Tu variable total

  const confirmacion = confirm(`¿Deseas continuar con la compra?`);

  if (confirmacion) {
    localStorage.setItem('productosConURL', JSON.stringify(productosSeleccionados));
    localStorage.setItem('totalCompra', totalCompra);

    window.location.href = "pagina_de_pago.html";
  }
}

function agregarAlCarrito(valor, nombreProducto, imagenURL, precio) {
  total += valor;
  actualizarTotal();
  productosSeleccionados.push({ nombre: nombreProducto, imagenURL: imagenURL, precio: precio });
  actualizarLocalStorage(); // Actualizar localStorage
}

function agregarProducto(valor, nombreProducto, imagenURL, precio) {
  // Verificar si el producto ya está en el carrito
  const productoExistente = productosSeleccionados.find(producto => producto.nombre === nombreProducto);

  if (productoExistente) {
    alert("Este producto ya está en el carrito.");
    return;
  }

  agregarAlCarrito(valor, nombreProducto, imagenURL, precio);
}

function agregarProducto1() {
  agregarProducto(145000, 'Rack Gris', 'https://www.mueblescaracol.cl/productos/rack1.png', 145000);
}

function agregarProducto2() {
  agregarProducto(125000, 'Rack Nogal con 3 puertas', 'https://www.mueblescaracol.cl/productos/rack2.jpeg', 125000);
}

function agregarProducto3() {
  agregarProducto(180000, 'Rack madera blanco con puerta deslizante', 'https://www.mueblescaracol.cl/productos/rack3.jpeg', 180000);
}

function agregarProducto4() {
  agregarProducto(160000, 'Rack nogal de Melamina', 'https://www.mueblescaracol.cl/productos/rack4.jpeg', 160000);
}

function agregarProducto5() {
  agregarProducto(125000, 'Rack nogal con 2 puertas', 'https://www.mueblescaracol.cl/productos/rack5.jpeg', 125000);
}

function agregarProducto6() {
  agregarProducto(195000, 'Rack de madera, blanco con puertas corredizas', 'https://www.mueblescaracol.cl/productos/rack6.jpeg', 195000);
}

function agregarProducto7() {
  agregarProducto(105000, 'Mesa de centro de vidrio', 'https://www.mueblescaracol.cl/productos/mesita1.png', 105000);
}

function agregarProducto8() {
  agregarProducto(109000, 'Mesa de centro madera, cerezo', 'https://www.mueblescaracol.cl/productos/mesita2.png', 109000);
}

function agregarProducto9() {
  agregarProducto(68000, "Mesa de centro madera nogal", "https://www.mueblescaracol.cl/productos/mesita3.png", 68000);
}

function agregarProducto10() {
  agregarProducto(80000, "Mesa de arrimo cerezo", "https://www.mueblescaracol.cl/productos/mesita4.png", 80000);
}

function agregarProducto11() {
  agregarProducto(85000, "Mesa de arrimo blanca", "https://www.mueblescaracol.cl/productos/mesita5.png", 85000);
}

function agregarProducto12() {
  agregarProducto(145000, "Mesa de arrimo nogal", "https://www.mueblescaracol.cl/productos/mesita6.jpeg", 145000);
}

function mostrarMenuQuitar() {
  const removeMenu = document.getElementById("remove-menu");
  const removeList = document.getElementById("remove-list");

  // Limpiar la lista antes de mostrarla
  removeList.innerHTML = "";

  // Mostrar productos en el menú
  productosSeleccionados.forEach((producto, index) => {
    const listItem = document.createElement("li");

    // Crear un contenedor para el checkbox, la imagen y el texto
    const container = document.createElement("div");
    container.style.display = "flex";
    container.style.alignItems = "center";

    // Crear un checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = `remove-checkbox-${index}`;
    checkbox.value = index;

    // Crear una imagen
    const img = document.createElement("img");
    img.src = producto.imagenURL;
    img.style.width = "100px"; // Ajusta el tamaño de la imagen según tus necesidades
    img.style.height = "auto";

    // Crear un texto con el nombre del producto
    const label = document.createElement("label");
    label.textContent = producto.nombre;
    label.style.marginLeft = "10px"; // Agrega un margen entre la imagen y el texto

    // Agregar elementos al contenedor
    container.appendChild(checkbox);
    container.appendChild(img);
    container.appendChild(label);

    // Agregar el contenedor al listItem
    listItem.appendChild(container);

    // Agregar el listItem al removeList
    removeList.appendChild(listItem);
  });

  removeMenu.style.display = "block";
  removeMenu.style.zIndex = "1000"; // Ajusta el valor según sea necesario
  // Aplicar estilos al menú de quitar seleccionados
}

function quitarProductos() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');

  for (let i = checkboxes.length - 1; i >= 0; i--) {
    const index = parseInt(checkboxes[i].value);
    const producto = productosSeleccionados[index];

    // Restar el valor y actualizar el total
    total -= producto.precio;

    // Eliminar el producto del array
    productosSeleccionados.splice(index, 1);
  }

  // Actualizar la visualización del total y el menú
  actualizarTotal();
  actualizarLocalStorage();

  // Ocultar el menú después de quitar los productos
  document.getElementById("remove-menu").style.display = "none";
}

function resetearCarrito() {
  total = 0;
  productosSeleccionados = [];
  actualizarTotal();
  actualizarLocalStorage();
  // Aquí puedes agregar cualquier otra lógica necesaria después de restablecer el carrito
}

var tiempoDeInactividad = 10 * 60 * 1000; // 10 minutos en milisegundos
var timeoutID;

// Función para obtener el tiempo en que se inició el temporizador desde las cookies
function obtenerTiempoInicio() {
  return parseInt(getCookie("tiempoInicio")) || 0;
}

// Función para establecer el tiempo en que se inició el temporizador en las cookies
function establecerTiempoInicio() {
  setCookie("tiempoInicio", Date.now(), tiempoDeInactividad);
}

// Iniciar el timeout al cargar la página
iniciarTimeout();

function iniciarTimeout() {
  var tiempoInicio = obtenerTiempoInicio();
  var tiempoPasado = Date.now() - tiempoInicio;

  if (tiempoPasado >= tiempoDeInactividad) {
    // El tiempo de inactividad ha pasado, restablecer el carrito
    resetearCarrito();
  } else {
    // Configurar el temporizador restante
    timeoutID = setTimeout(resetearCarrito, tiempoDeInactividad - tiempoPasado);
  }

  // Establecer el tiempo en que se inició el temporizador
  establecerTiempoInicio();
}

function reiniciarTimeout() {
  clearTimeout(timeoutID);
  iniciarTimeout();
}

// Funciones para manejar cookies
function setCookie(nombre, valor, duracion) {
  var fechaExpiracion = new Date();
  fechaExpiracion.setTime(fechaExpiracion.getTime() + duracion);
  var cadenaCookie = nombre + "=" + valor + "; expires=" + fechaExpiracion.toUTCString() + "; path=/";
  document.cookie = cadenaCookie;
}

function getCookie(nombre) {
  var nombreEQ = nombre + "=";
  var cookies = document.cookie.split(';');
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    while (cookie.charAt(0) == ' ') {
      cookie = cookie.substring(1, cookie.length);
    }
    if (cookie.indexOf(nombreEQ) == 0) {
      return cookie.substring(nombreEQ.length, cookie.length);
    }
  }
  return null;
}

















//function realizarCompra() {
//  if (productosSeleccionados.length === 0) {
//    alert("No has seleccionado ningún producto para comprar.");
//    return;
//  }
//  const cantidadProductos = productosSeleccionados.length;
//  const nombresProductos = productosSeleccionados.join(", "); // Une los nombres de los productos
//
//  alert(`Has seleccionado ${cantidadProductos} producto(s): ${nombresProductos}. Total de compra: $${total % 1 === 0 ? total : total.toFixed(2)}`);
//}
