let antiinfectives = {}; // Variable global para almacenar los datos

// Cargar datos desde el archivo JSON
async function loadAntiinfectivesData() {
    try {
        const response = await fetch('antiinfecciosos.json'); // Ajusta la ruta si es necesario
        if (!response.ok) {
            throw new Error('No se pudo cargar el archivo JSON');
        }
        antiinfectives = await response.json(); // Almacena los datos en la variable global
    } catch (error) {
        console.error('Error al cargar los datos:', error);
    }
}

document.addEventListener("DOMContentLoaded", async function () {
    await loadAntiinfectivesData(); // Espera a que se carguen los datos antes de continuar

    const searchBar = document.getElementById("seek-bar");
    const resultsContainer = document.getElementById("search-results");
    const alphabetList = document.getElementById("alphabet-list");
    const antiinfectiveInfo = document.getElementById("antiinfective-info");

    // Generar la lista del alfabeto
    for (let i = 65; i <= 90; i++) {
        const letter = String.fromCharCode(i);
        const listItem = document.createElement("li");
        listItem.textContent = letter;
        listItem.addEventListener("click", () => displayAntibiotics(letter));
        alphabetList.appendChild(listItem);
    }

    // Mostrar antibióticos por letra
    function displayAntibiotics(letter) {
        const antiinfectivesForLetter = antiinfectives[letter] || [];
        if (antiinfectivesForLetter.length === 0) {
            antiinfectiveInfo.innerHTML = `No existen antibióticos con la letra ${letter}.`;
            return;
        }

        const list = antiinfectivesForLetter
            .map((atb) => `
                <div class="antiinfective-item" data-name="${atb.name}">
                    ${atb.name}
                </div>
            `)
            .join("");

        antiinfectiveInfo.innerHTML = `
            <h2>Antibióticos que empiezan con ${letter}</h2>
            ${list}
        `;

        addClickEventsToAntibiotics();
    }

    // Asignar eventos a los antibióticos
    function addClickEventsToAntibiotics() {
        const antiinfectiveItems = document.querySelectorAll(".antiinfective-item");

        antiinfectiveItems.forEach((item) => {
            item.addEventListener("click", () => {
                const selectedAntibiotic = item.getAttribute("data-name");

                // Mostrar detalles del antibiótico seleccionado
                displayDetails(selectedAntibiotic);

                // Limpiar el input de búsqueda
                const searchBar = document.getElementById("seek-bar");
                searchBar.value = "";

                // Limpiar la lista de resultados
                const resultsContainer = document.getElementById("search-results");
                resultsContainer.innerHTML = "";
            });
        });
    }

    // Mostrar detalles del antibiótico seleccionado
    function displayDetails(name) {
        const antiinfective = Object.values(antiinfectives)
            .flat()
            .find((atb) => atb.name === name);

        if (!antiinfective) {
            antiinfectiveInfo.innerHTML = `Detalles no disponibles.`;
            return;
        }

        antiinfectiveInfo.innerHTML = `
            <h2>${antiinfective.name}</h2>
            <p><strong>Presentación:</strong> ${antiinfective.presentation || "N/A"}</p>
            <p><strong>Tipo:</strong> ${antiinfective.type || "N/A"}</p>
            <p><strong>Dosis:</strong> ${antiinfective.dose || "N/A"}</p>
            <p><strong>Preparación:</strong> ${antiinfective.preparation || "N/A"}</p>
            <p><strong>Aspecto:</strong> ${antiinfective.appearance || "N/A"}</p>
            <p><strong>Tiempo de Administración:</strong> ${antiinfective.administrationTime || "N/A"}</p>
            <p><strong>Conservación:</strong> ${antiinfective.storage || "N/A"}</p>
            <p><strong>Ficha Técnica:</strong> <a id="view-technical-sheet" href="${antiinfective.technicalSheet}" target="_blank">Ver ficha técnica</a></p>
        `;

        const technicalSheetLink = document.getElementById("view-technical-sheet");
        if (technicalSheetLink) {
            technicalSheetLink.addEventListener("click", (event) => {
                event.preventDefault();
                const url = technicalSheetLink.getAttribute("href");
                loadTechnicalSheet(url);
            });
        }
    }

    // Cargar la ficha técnica
    function loadTechnicalSheet(url) {
        if (!url || url === "#") {
            alert("La ficha técnica no está disponible.");
            return;
        }
        window.open(url, "_blank"); // Abrir enlace en una nueva pestaña
    }

    // Búsqueda dinámica de antibióticos
    document.getElementById("seek-bar").addEventListener("input", function () {
        const query = this.value.toLowerCase(); // Texto ingresado por el usuario
        const allAntibiotics = Object.values(antiinfectives).flat(); // Todos los antibióticos
        const filteredAntibiotics = allAntibiotics.filter((atb) =>
            atb.name.toLowerCase().includes(query)
        ); // Filtrar por coincidencia

        if (filteredAntibiotics.length === 0) {
            antiinfectiveInfo.innerHTML = `No se encontraron antibióticos que coincidan con "${query}".`;
            return;
        }

        const list = filteredAntibiotics
            .map((atb) => `
                <div class="antiinfective-item" data-name="${atb.name}">
                    ${atb.name}
                </div>
            `)
            .join("");

        antiinfectiveInfo.innerHTML = `
            <h2>Resultados de la búsqueda</h2>
            ${list}
        `;

        addClickEventsToAntibiotics();
    });
});