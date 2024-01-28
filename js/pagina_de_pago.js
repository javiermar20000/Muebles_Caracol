document.addEventListener('DOMContentLoaded', function() {
  const productosConURL = JSON.parse(localStorage.getItem('productosConURL'));
  const totalCompra = localStorage.getItem('totalCompra');

  const totalElement = document.getElementById('total');
  totalElement.textContent = `$${totalCompra}`;

  if (productosConURL) {
    const productosContainer = document.getElementById('productos-container');
    
    productosConURL.forEach(producto => {
      const productoDiv = document.createElement('div');
      productoDiv.classList.add('producto');

      const imagenProducto = document.createElement('img');
      imagenProducto.src = producto.imagenURL;
      imagenProducto.alt = producto.nombre; // Agregamos atributo 'alt' para accesibilidad

      const nombreProducto = document.createElement('p');
      nombreProducto.textContent = producto.nombre;

      const precioProducto = document.createElement('p');
      precioProducto.textContent = `$${producto.precio}`;

      productoDiv.appendChild(imagenProducto);
      productoDiv.appendChild(nombreProducto);
      productoDiv.appendChild(precioProducto); // Agregamos el precio al contenedor

      productosContainer.appendChild(productoDiv);

    });

      // Función para cambiar la configuración de impresión
      function configurarImpresion() {
  // Selecciona el elemento de estilo de impresión y cambia la orientación a horizontal
      const style = document.createElement('style');
      style.innerHTML = `@page { size: portrait; }`;
      document.head.appendChild(style);

  // Abre el diálogo de impresión
      window.print();
    }

// Función para detectar el clic en el botón de descarga
document.querySelector('.download-button').addEventListener('click', function() {
  // Configura la impresión y la opción "Guardar como PDF"
  configurarImpresion();
});
}
});

const btnAbrirModal = document.querySelector("#btn-abrir-modal");
const btnCerrarModal = document.querySelector("#btn-cerrar-modal");
const modal =document.querySelector("#modal");

btnAbrirModal.addEventListener("click",()=>{
  modal.showModal();
})

btnCerrarModal.addEventListener("click",()=>{
  modal.close();
}) 




