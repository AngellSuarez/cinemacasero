// Obtener todas las tarjetas
const tarjetas = document.querySelectorAll('.tarjeta');

// Función para abrir el modal
function abrirModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = 'block';
}

// Función para cerrar el modal
function cerrarModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = 'none';
}

// Agregar evento click a cada tarjeta
tarjetas.forEach(tarjeta => {
  const modalId = tarjeta.dataset.modalId;
  tarjeta.addEventListener('click', () => abrirModal(modalId));

  // Obtener el botón de cerrar del modal
  const botonCerrar = document.querySelector(`#${modalId} .modal__cerrar`);
  botonCerrar.addEventListener('click', () => cerrarModal(modalId));
});