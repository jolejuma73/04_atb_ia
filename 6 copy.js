document.addEventListener("DOMContentLoaded", function() {
    fetch("antiinfecciosos.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("No se pudo cargar el archivo JSON");
            }
            return response.json();
        })
        .then(data => {
            console.log("Datos cargados correctamente:", data);
            cargarAntibioticos(data); // Llamar la función correctamente
        })
        .catch(error => {
            console.error("Error al cargar el JSON:", error);
        });

    // Definir la función antes de ser llamada
    function cargarAntibioticos(data) {
        console.log("Antibióticos disponibles:", data);
        window.antibiotics = data; // Guardar datos en una variable global
    }
});




    let originalContent = ""; // Guardar el contenido inicial

    document.addEventListener("DOMContentLoaded", function () {
        const mainContent = document.getElementById("main-content");
        originalContent = mainContent.innerHTML; // Guarda el contenido inicial
    });

    const searchBar = document.getElementById("seek-bar");
    const resultsContainer = document.getElementById("search-results");
    const alphabetList = document.getElementById("alphabet-list");
    const antibioticInfo = document.getElementById("antibiotic-info");

    // Generar la lista del alfabeto
    for (let i = 65; i <= 90; i++) {
        const letter = String.fromCharCode(i);
        const listItem = document.createElement("li");
        listItem.textContent = letter;
        listItem.classList.add("alphabet-item");

        // Evento para mostrar antibióticos
        listItem.addEventListener("click", () => displayAntibiotics(letter));
        alphabetList.appendChild(listItem);
    }

    // Mostrar antibióticos por letra
    function displayAntibiotics(letter) {
        const antibioticsForLetter = antibiotics[letter] || [];
        if (antibioticsForLetter.length === 0) {
            antibioticInfo.innerHTML = `<p style="color: red;">No existen antibióticos con la letra ${letter}.</p>`;
            return;
        }

        const list = antibioticsForLetter
            .map(
                (atb) =>
                    `<li class="antibiotic-item" data-name="${atb.name}">
                        ${atb.name}
                    </li>`
            )
            .join("");

        antibioticInfo.innerHTML = `
            <h2 class="h2-empieza-con">Antibióticos que empiezan con ${letter}</h2>
            <ul>${list}</ul>
        `;

        addClickEventsToAntibiotics();
    }

    // Asignar eventos a los antibióticos
    function addClickEventsToAntibiotics() {
        const antibioticItems = document.querySelectorAll(".antibiotic-item");
    
        antibioticItems.forEach((item) => {
            item.addEventListener("click", () => {
                const selectedAntibiotic = item.getAttribute("data-name");
    
                // Mostrar la información del antibiótico seleccionado
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
    
    function displayDetails(antibioticName) {
        const antibiotic = antibioticsData.find(atb => atb.name === antibioticName);
    
        if (antibiotic) {
            // Actualiza el contenedor de información con los detalles del antibiótico
            const infoContainer = document.getElementById("antibiotic-info");
            infoContainer.innerHTML = `
                <h2>${antibiotic.name}</h2>
                <p><strong>Presentación:</strong> ${antibiotic.presentation}</p>
                <p><strong>Tipo:</strong> ${antibiotic.type}</p>
                <p><strong>Dosis:</strong> ${antibiotic.dose}</p>
                <p><strong>Preparación:</strong> ${antibiotic.preparation}</p>
                <p><strong>Aspecto:</strong> ${antibiotic.aspect}</p>
                <p><strong>Tiempo de administración:</strong> ${antibiotic.adminTime}</p>
                <p><strong>Conservación:</strong> ${antibiotic.conservation}</p>
                <a href="${antibiotic.technicalSheet}" target="_blank">Ficha técnica</a>
            `;
        } else {
            console.error(`No se encontró información para el antibiótico: ${antibioticName}`);
        }
    }
    
    

    // Mostrar detalles del antibiótico seleccionado
    function displayDetails(name) {
        const antibiotic = Object.values(antibiotics)
            .flat()
            .find((atb) => atb.name === name);

        if (!antibiotic) {
            antibioticInfo.innerHTML = `<p style="color: red;">Detalles no disponibles.</p>`;
            return;
        }

        antibioticInfo.innerHTML = `
            <h2 class="h2-details">${antibiotic.name}</h2>
            <table class="details-table">
                <tr>
                    <th><img src="imagenes/01_presentacion.png" alt="Icono de presentación" class="icono-presentacion">Presentación</th>
                    <td>${antibiotic.presentation || "N/A"}</td>
                </tr>
                <tr>
                    <th><img src="imagenes/02_tipo.png" alt="Icono de presentación" class="icono-presentacion">Tipo de Antiinfecioso</th>
                    <td>${antibiotic.type || "N/A"}</td></tr>
                <tr>
                    <th><img src="imagenes/03_dosis.png" alt="Icono de dosis" class="icono-dosis">Dosis</th>
                    <td>${antibiotic.dose || "N/A"}</td>
                </tr>
                <tr>
                    <th><img src="imagenes/04_preparacion.png" alt="Icono de preparación" class="icono-preparacion">Preparación</th>
                    <td>${antibiotic.preparation || "N/A"}</td>
                </tr>
                <tr>
                    <th><img src="imagenes/05_aspecto.png" alt="Icono de Aspecto" class="icono-aspecto">Aspecto</th>
                    <td>${antibiotic.appearance || "N/A"}</td>
                </tr>
                <tr>
                    <th><img src="imagenes/06_tiempo.png" alt="Icono de Tiempo de administración" class="icono-tiempo">Tiempo de administración</th>
                    <td>${antibiotic.administrationTime || "N/A"}</td>
                </tr>
                <tr>
                    <th><img src="imagenes/07_conservacion.png" alt="Icono de Conservación" class="icono-conservacion">Conservación</th>
                    <td>${antibiotic.storage || "N/A"}</td>
                </tr>
                <tr>
                    <th><img src="imagenes/08_ficha_tecnica.png" alt="Icono de Ficha técnica" class="icono-ficha_tecnica">Ficha técnica</th>
                    <td>
                        <a href="#" id="view-technical-sheet" data-url="${antibiotic.technicalSheet}">Ver ficha técnica</a>
                    </td>
                </tr>
            </table>
        `;

        const technicalSheetLink = document.getElementById("view-technical-sheet");
        technicalSheetLink.addEventListener("click", (event) => {
            event.preventDefault();
            const url = technicalSheetLink.getAttribute("data-url");
            loadTechnicalSheet(url);
        });
    }

    // Cargar la ficha técnica

    function loadTechnicalSheet(url) {
        if (!url || url === "#") {
            alert("La ficha técnica no está disponible.");
            return;
        }
        window.open(url, "_blank"); // Abrir la ficha técnica en una nueva pestaña
    }
    
    // Búsqueda dinámica de antibióticos
document.getElementById("seek-bar").addEventListener("input", function () {
    const query = this.value.toLowerCase(); // Convierte el valor ingresado a minúsculas
    const allAntibiotics = Object.values(antibiotics).flat(); // Obtiene todos los antibióticos de todas las letras
    const filteredAntibiotics = allAntibiotics.filter((atb) =>
        atb.name.toLowerCase().includes(query)
    ); // Filtra los antibióticos que coincidan con la búsqueda

    if (filteredAntibiotics.length === 0) {
        antibioticInfo.innerHTML = `
            <p style="color: red;">No se encontraron antibióticos que coincidan con "${query}".</p>
        `;
    } else {
        const list = filteredAntibiotics
            .map(
                (atb) => `
                <li class="antibiotic-item" data-name="${atb.name}">
                    ${atb.name}
                </li>`
            )
            .join("");

        antibioticInfo.innerHTML = `
            <h2>Resultados de la búsqueda</h2>
            <ul>${list}</ul>
        `;

        addClickEventsToAntibiotics(); // Asegura que los eventos "click" estén configurados para los elementos encontrados
    }
});
document.getElementById("seek-bar").value = "";

; 
