// Obtener todas las tarjetas
const tarjetas = document.querySelectorAll('.tarjeta');

// Función para abrir el modal
function abrirModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = 'block';
  document.body.classList.add('modal-open');

  // Obtener el botón de cerrar del modal
  const botonCerrar = document.querySelector(`#${modalId} .modal__cerrar`);
  botonCerrar.addEventListener('click', () => cerrarModal(modalId));
}

// Función para cerrar el modal
function cerrarModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = 'none';
  document.body.classList.remove('modal-open');
}

// Agregar evento click a cada tarjeta
tarjetas.forEach(tarjeta => {
  const modalId = tarjeta.dataset.modalId;
  tarjeta.addEventListener('click', () => abrirModal(modalId));
});
