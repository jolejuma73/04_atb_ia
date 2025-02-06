// Datos de los antiinfecciosos
const antibiotics = {
    A: [
        {
            name: "Amoxicilina",
            presentation: "Vial 500 mg",
            type: "Betalactámico",
            dose: "500 mg/8h",
            preparation: "Reconstituir con agua para inyección.",
            appearance: "Transparente.",
            administrationTime: "30 minutos.",
            storage: "Conservar en refrigeración.",
            technicalSheet: "https://example.com/amoxicilina"
        }
    ],
    M: [
        {
            name: "Metronidazol",
            presentation: "Frasco 500 mg en 100 ml",
            type: "Nitroimidazol",
            dose: "500 mg/8h",
            preparation: "El fármaco se encuentra listo para ser usado. Aún así, es compatible con SSF o SG.",
            appearance: "Límpida, incolora o ligeramente amarillenta.",
            administrationTime: "60 minutos.",
            storage: "Si se diluye, el fármaco es estable durante 24 horas en nevera.",
            technicalSheet: "https://example.com/metronidazol"
        }
    ]
};

// Elementos del DOM
const inicialesContainer = document.querySelector("#iniciales");
const buscarInput = document.querySelector("#buscar-input");
const listadoContainer = document.querySelector("#lista-antiinfecciosos");
const detallesContainer = document.querySelector("#detalle-antiinfeccioso");
const mainButton = document.querySelector("#main-button");
const contenedorBusqueda = document.querySelector(".contenedor-busqueda");

// Mostrar iniciales
function mostrarIniciales() {
    inicialesContainer.innerHTML = "";
    Object.keys(antibiotics).forEach(letra => {
        const button = document.createElement("button");
        button.textContent = letra;
        button.classList.add("boton-inicial");
        button.addEventListener("click", () => mostrarListadoPorInicial(letra));
        inicialesContainer.appendChild(button);
    });
}

// Mostrar listado por inicial
function mostrarListadoPorInicial(letra) {
    const lista = antibiotics[letra] || [];
    listadoContainer.innerHTML = lista.length
        ? lista.map(item => `<div class='aii-item' onclick='mostrarDetalles(${JSON.stringify(item)})'>${item.name}</div>`).join("")
        : `<p>No se encontraron resultados para la letra "${letra}".</p>`;
    toggleVista(false);
    listadoContainer.style.display = "block";
}

// Mostrar detalles del antiinfeccioso seleccionado
function mostrarDetalles(antibiotico) {
    console.log("Detalles recibidos:", antibiotico);
    document.querySelector("#presentation").textContent = antibiotico.presentation || "No disponible.";
    document.querySelector("#type").textContent = antibiotico.type || "No disponible.";
    document.querySelector("#dose").textContent = antibiotico.dose || "No disponible.";
    document.querySelector("#preparation").textContent = antibiotico.preparation || "No disponible.";
    document.querySelector("#appearance").textContent = antibiotico.appearance || "No disponible.";
    document.querySelector("#administration-time").textContent = antibiotico.administrationTime || "No disponible.";
    document.querySelector("#storage").textContent = antibiotico.storage || "No disponible.";
    document.querySelector("#technicalSheet a").setAttribute("href", antibiotico.technicalSheet || "#");
    detallesContainer.style.display = "block";
    listadoContainer.style.display = "none";
}

// Buscar antiinfeccioso
buscarInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        const searchText = buscarInput.value.toLowerCase();
        const resultados = Object.values(antibiotics).flat().filter(antibiotico =>
            antibiotico.name.toLowerCase().includes(searchText)
        );

        listadoContainer.innerHTML = resultados.length
            ? resultados.map(item => `<div class='aii-item' onclick='mostrarDetalles(${JSON.stringify(item)})'>${item.name}</div>`).join("")
            : `<p>No se encontraron resultados para "${searchText}".</p>`;
        toggleVista(false);
        listadoContainer.style.display = "block";
    }
});

// Volver a la vista inicial
mainButton.addEventListener("click", () => {
    toggleVista(true);
    buscarInput.value = "";
    listadoContainer.innerHTML = "";
    detallesContainer.style.display = "none";
});

// Alternar vistas
function toggleVista(mostrarBusqueda) {
    contenedorBusqueda.style.display = mostrarBusqueda ? "flex" : "none";
    listadoContainer.style.display = mostrarBusqueda ? "none" : "block";
    detallesContainer.style.display = "none";
}

// Inicializar
mostrarIniciales();
