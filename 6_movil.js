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
        <table class="details-table">
            <tr>
                <th><img src="imagenes/01_presentacion.png" alt="Icono de presentación">Presentación</th>
                <td>${antibiotic.presentation || "N/A"}</td>
            </tr>
            <tr>
                <th><img src="imagenes/02_tipo.png" alt="Icono de tipo">Tipo de Antiinfecioso</th>
                <td>${antibiotic.type || "N/A"}</td>
            </tr>
            <tr>
                <th><img src="imagenes/03_dosis.png"  alt="Icono de dosis">Dosis</th>
                <td>${antibiotic.dose || "N/A"}</td>
            </tr>
            <tr>
                <th><img src="imagenes/04_preparacion.png"  alt="Icono de preparación">Preparación</th>
                <td>${antibiotic.preparation || "N/A"}</td>
            </tr>
            <tr>
                <th><img src="imagenes/05_aspecto.png"  alt="Icono de aspecto">Aspecto</th>
                <td>${antibiotic.appearance || "N/A"}</td>
            </tr>
            <tr>
                <th><img src="imagenes/06_tiempo.png" alt="Icono de tiempo">Tiempo de administración</th>
                <td>${antibiotic.administrationTime || "N/A"}</td>
            </tr>
            <tr>
                <th><img src="imagenes/07_conservacion.png"    alt="Icono de conservación">Conservación</th>
                <td>${antibiotic.storage || "N/A"}</td>
            </tr>
            <tr>
                <th><img src="imagenes/08_ficha_tecnica.png" alt="Icono de ficha técnica">Ficha técnica</th>
                <td>
                    <a href="${antibiotic.technicalSheet}" target="_blank">Ver ficha técnica</a>
                </td>
            </tr>
        </table>
    `;

    console.log("Contenido generado en antibiotic-info:", antibioticInfo.innerHTML);

    switchContainers(document.getElementById("contenedor2"), document.getElementById("contenedor3"));
}

// Cambiar entre contenedores
function switchContainers(hideContainer, showContainer) {
    console.log("Ocultando:", hideContainer.id, "Mostrando:", showContainer.id);
    hideContainer.style.display = "none";
    showContainer.style.display = "block";

    // Debug adicional para verificar visibilidad del contenedor destino
    console.log("Estado de antibiotic-info tras cambio de contenedor:", document.getElementById("antibiotic-info").innerHTML);
}
