let antibioticsData = {}; // Para almacenar los datos cargados del JSON

// Cargar datos del archivo JSON
fetch("6_movil.json")
    .then((response) => {
        if (!response.ok) throw new Error("Error al cargar el JSON");
        return response.json();
    })
    .then((data) => {
        console.log("Datos cargados correctamente:", data);
        antibioticsData = data;
        initializeApp(antibioticsData);
    })
    .catch((error) => {
        console.error("Error al cargar los datos:", error);
    });

// Inicializar la aplicación generando las iniciales
function initializeApp(data) {
    const alphabetList = document.getElementById("alphabet-list");
    alphabetList.innerHTML = ""; // Limpia la lista antes de llenarla

    Object.keys(data).forEach((letter) => {
        console.log("Inicial generada:", letter);
        const li = document.createElement("li");
        li.textContent = letter;
        li.classList.add("alphabet-item");
        li.addEventListener("click", () => {
            console.log("Inicial seleccionada:", letter);
            showAntibioticsByLetter(letter);
        });
        alphabetList.appendChild(li);
    });
}

// Mostrar la lista de antibióticos por inicial
function showAntibioticsByLetter(letter) {
    console.log("Inicial seleccionada:", letter);

    const resultsList = document.getElementById("search-results");
    resultsList.innerHTML = ""; // Limpia la lista antes de llenarla

    if (antibioticsData[letter]) {
        antibioticsData[letter].forEach((antibiotic) => {
            console.log("Generando antibiótico:", antibiotic.name);
            const li = document.createElement("li");
            li.textContent = antibiotic.name;
            li.classList.add("antibiotic-item");

            li.addEventListener("click", () => {
                console.log("Antibiótico seleccionado:", antibiotic.name);
                displayDetails(antibiotic.name);
            });

            resultsList.appendChild(li);
        });
    } else {
        console.warn("No hay antibióticos para esta inicial:", letter);
    }

    switchContainers(document.getElementById("contenedor1"), document.getElementById("contenedor2"));
}

// Mostrar detalles del antibiótico seleccionado
function displayDetails(name) {
    const antibioticInfo = document.getElementById("antibiotic-info");

    // Buscar el antibiótico por su nombre
    const antibiotic = Object.values(antibioticsData)
        .flat()
        .find((atb) => atb.name === name);

    console.log("Mostrando detalles para:", antibiotic);

    if (!antibiotic) {
        antibioticInfo.innerHTML = `<p style="color: red;">Detalles no disponibles.</p>`;
        return;
    }

    antibioticInfo.innerHTML = `
        <h2>${antibiotic.name}</h2>
        <table>
            <tr>
                <th><img src="imagenes/01_presentacion.png" alt="Icono Presentación">Presentación</th>
                <td>${antibiotic.presentation || "N/A"}</td>
            </tr>
            <tr>
                <th><img src="imagenes/02_tipo.png" alt="Icono Tipo">Tipo de Antiinfeccioso</th>
                <td>${antibiotic.type || "N/A"}</td>
            </tr>
            <tr>
                <th><img src="imagenes/03_dosis.png" alt="Icono Dosis">Dosis</th>
                <td>${antibiotic.dose || "N/A"}</td>
            </tr>
            <tr>
                <th><img src="imagenes/04_preparacion.png" alt="Icono Preparación">Preparación</th>
                <td>${antibiotic.preparation || "N/A"}</td>
            </tr>
            <tr>
                <th><img src="imagenes/05_aspecto.png" alt="Icono Aspecto">Aspecto</th>
                <td>${antibiotic.appearance || "N/A"}</td>
            </tr>
            <tr>
                <th><img src="imagenes/06_tiempo.png" alt="Icono Tiempo">Tiempo de administración</th>
                <td>${antibiotic.administrationTime || "N/A"}</td>
            </tr>
            <tr>
                <th><img src="imagenes/07_conservacion.png" alt="Icono Conservación">Conservación</th>
                <td>${antibiotic.storage || "N/A"}</td>
            </tr>
            <tr>
                <th><img src="imagenes/08_ficha_tecnica.png" alt="Icono Ficha Técnica">Ficha técnica</th>
                <td><a href="${antibiotic.technicalSheet}" target="_blank">Ver ficha técnica</a></td>
            </tr>
        </table>
    `;

    console.log("Contenido generado en antibiotic-info:", antibioticInfo.innerHTML);

    switchContainers(document.getElementById("contenedor2"), document.getElementById("contenedor3"));

    // Configurar el botón para volver al inicio
    const volverBtn = document.getElementById("volver2");
    volverBtn.addEventListener("click", () => {
        switchContainers(document.getElementById("contenedor3"), document.getElementById("contenedor1"));
    });
    // Configurar el botón "volver" del contenedor 2
const volverBtn2 = document.getElementById("volver");
volverBtn2.addEventListener("click", () => {
    switchContainers(document.getElementById("contenedor2"), document.getElementById("contenedor1"));
});

}

// Cambiar entre contenedores
function switchContainers(hideContainer, showContainer) {
    console.log("Ocultando:", hideContainer.id, "Mostrando:", showContainer.id);
    hideContainer.style.display = "none";
    showContainer.style.display = "block";

    // Debug adicional para verificar visibilidad del contenedor destino
    console.log("Estado de antibiotic-info tras cambio de contenedor:", document.getElementById("antibiotic-info").innerHTML);
}

// Manejo de búsqueda en el seek-bar
function handleSearch(event) {
    const query = event.target.value.toLowerCase();
    const resultsList = document.getElementById("search-results");
    resultsList.innerHTML = ""; // Limpia los resultados anteriores

    const filteredAntibiotics = Object.values(antibioticsData)
        .flat()
        .filter((antibiotic) => antibiotic.name.toLowerCase().includes(query));

    if (filteredAntibiotics.length === 0) {
        resultsList.innerHTML = `<p style="color: red;">No se encontraron resultados para "${query}".</p>`;
        return;
    }

    filteredAntibiotics.forEach((antibiotic) => {
        const li = document.createElement("li");
        li.textContent = antibiotic.name;
        li.classList.add("antibiotic-item");

        li.addEventListener("click", () => {
            console.log("Antibiótico seleccionado:", antibiotic.name);
            displayDetails(antibiotic.name);
        });

        resultsList.appendChild(li);
    });

    switchContainers(document.getElementById("contenedor1"), document.getElementById("contenedor2"));
}

// Agregar el evento al seek-bar
const searchInput = document.getElementById("seek-bar");
searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        handleSearch(event);
    }
});
