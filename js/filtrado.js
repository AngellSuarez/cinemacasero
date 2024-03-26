
//aplicar los filtros
function aplicarFiltros() {
  const buscarTitulo = document
    .getElementById("buscadorTitulo")
    .value.toLowerCase();
  const filtraryears = Array.from(
    document.querySelectorAll(
      '.seccionFiltros input[type="checkbox"][id^="year"]:checked'
    )
  ).map(function (checkbox) {
    return checkbox.value;
  });
  const filtrarGenero = Array.from(
    document.querySelectorAll(
      '.seccionFiltros input[type="checkbox"][id^="genero"]:checked'
    )
  ).map(function (checkbox) {
    return checkbox.value;
  });
  const tarjetas = document.querySelectorAll(".tarjeta");
  tarjetas.forEach(function (tarjeta) {
    const titulo = tarjeta
      .querySelector(".contenidoTarjetas p")
      .innerText.toLowerCase();
    const year = tarjeta.dataset.year;
    const generos = tarjeta.dataset.genres.split(",");

    const coincideConTitulo = titulo.includes(buscarTitulo);
    const coincideConAno =
      filtraryears.length === 0 || filtraryears.includes(year);
    const coincideConGeneros =
      filtrarGenero.length === 0 ||
      generos.some(function (genero) {
        return filtrarGenero.includes(genero);
      });

    if (coincideConTitulo && coincideConAno && coincideConGeneros) {
      tarjeta.style.display = "block";
    } else {
      tarjeta.style.display = "none";
    }
  });
}

document
  .querySelectorAll('.seccionFiltros input[type="checkbox"], #buscadorTitulo')
  .forEach(function (input) {
    input.addEventListener("change", aplicarFiltros);
  });

document.getElementById("botonBuscar").addEventListener("click", aplicarFiltros);

