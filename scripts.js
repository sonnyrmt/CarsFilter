const year = document.querySelector("#year");
const marca = document.querySelector("#marca");
const minimo = document.querySelector("#minimo");
const maximo = document.querySelector("#maximo");
const puertas = document.querySelector("#puertas");
const transmision = document.querySelector("#transmision");
const color = document.querySelector("#color");

const max = 2020;
const min = max - 10;
const resultadoContainer = document.querySelector("#resultadoContainer");

const datosBusqueda = {
  marca: "",
  year: "",
  minimo: "",
  maximo: "",
  puertas: "",
  transmision: "",
  color: "",
};

document.addEventListener("DOMContentLoaded", () => {
  mostrarAutos(autos);
  llenarSelect();
  selectListeners();
});

const selectListeners = () => {
  marca.addEventListener("change", (e) => {
    datosBusqueda.marca = e.target.value;
    filtrarAuto();
  });
  year.addEventListener("change", (e) => {
    datosBusqueda.year = e.target.value;
    filtrarAuto();
  });
  minimo.addEventListener("change", (e) => {
    datosBusqueda.minimo = e.target.value;
    filtrarAuto();
  });
  maximo.addEventListener("change", (e) => {
    datosBusqueda.maximo = e.target.value;
    filtrarAuto();
  });
  puertas.addEventListener("change", (e) => {
    datosBusqueda.puertas = e.target.value;
    filtrarAuto();
  });
  transmision.addEventListener("change", (e) => {
    datosBusqueda.transmision = e.target.value;
    filtrarAuto();
  });
  color.addEventListener("change", (e) => {
    datosBusqueda.color = e.target.value;
    filtrarAuto();
  });
};

const llenarSelect = () => {
  for (let i = max; i >= min; i--) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    year.appendChild(option);
  }
};

const mostrarAutos = (autos) => {
  cleaner();

  autos.forEach((auto) => {
    const autoHTML = document.createElement("p");
    autoHTML.textContent = `
      ${auto.marca} ${auto.modelo} - ${auto.year} - Puertas ${auto.puertas} - ${auto.color} - $${auto.precio} - ${auto.transmision}`;

    resultadoContainer.appendChild(autoHTML);
  });
};

const filtrarAuto = () => {
  const resultado = autos.filter(filtrarMarca).filter(filtarYear).filter(filtarPuerta).filter(filtarTransmision).filter(filtrarColor).filter(filtrarMinimo).filter(filtrarMaximo);

  console.log(resultado);

  if (resultado.length) {
    mostrarAutos(resultado);
  } else {
    noResultado();
  }

  /*   resultado.forEach((filtrado) => {
    const autoHTML = document.createElement("p");
    autoHTML.textContent = `
      ${filtrado.marca}
      ${filtrado.modelo} -
      ${filtrado.year} -
      Puertas ${filtrado.puertas} -
      ${filtrado.color}`;

    resultadoContainer.appendChild(autoHTML);
  }); */
};

const noResultado = () => {
  cleaner();

  const noResultado = document.createElement("div");
  noResultado.classList.add("alerta", "error");
  noResultado.textContent = "no hay resultados";

  resultadoContainer.appendChild(noResultado);
};

const filtrarMarca = (auto) => {
  if (datosBusqueda.marca) {
    return auto.marca === datosBusqueda.marca;
  }
  return auto;
};

const filtarYear = (auto) => {
  if (datosBusqueda.year) {
    return auto.year === parseInt(datosBusqueda.year);
  }
  return auto;
};

const filtarPuerta = (auto) => {
  if (datosBusqueda.puertas) {
    return auto.puertas === parseInt(datosBusqueda.puertas);
  }
  return auto;
};

const filtarTransmision = (auto) => {
  if (datosBusqueda.transmision) {
    return auto.transmision === datosBusqueda.transmision;
  }
  return auto;
};

const filtrarColor = (auto) => {
  if (datosBusqueda.color) {
    return auto.color === datosBusqueda.color;
  }
  return auto;
};

const filtrarMinimo = (auto) => {
  if (datosBusqueda.minimo) {
    return auto.precio >= datosBusqueda.minimo;
  }
  return auto;
};

const filtrarMaximo = (auto) => {
  if (datosBusqueda.maximo) {
    return auto.precio <= datosBusqueda.maximo;
  }
  return auto;
};

const cleaner = () => {
  resultadoContainer.innerHTML = "";
};
