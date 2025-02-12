// 1. Cargar antibióticos desde JSON y almacenarlos en una variable global
let antibioticsData = {};

fetch('antiinfecciosos.json')
    .then(response => response.json())
    .then(data => {
        console.log("Datos cargados correctamente:", data);
        antibioticsData = data;
        cargarAntibioticos(data);
    })
    .catch(error => console.error("Error al cargar el JSON:", error));

// 2. Función para cargar antibióticos en la lista alfabética
function cargarAntibioticos(data) {
    const alphabetList = document.getElementById("alphabet-list");
    alphabetList.innerHTML = "";

    Object.keys(data).forEach(letter => {
        const listItem = document.createElement("li");
        listItem.textContent = letter;
        listItem.classList.add("alphabet-item");
        listItem.addEventListener("click", () => displayAntibiotics(letter));
        alphabetList.appendChild(listItem);
    });
}

// 3. Mostrar antibióticos por letra seleccionada
// 3. Mostrar antibióticos por letra seleccionada
function displayAntibiotics(letter) {
    const searchResults = document.getElementById("search-results");
    searchResults.innerHTML = "";

    // Verificar si hay antibióticos para esa letra
    if (!antibioticsData[letter] || antibioticsData[letter].length === 0) {
        console.warn(`No hay antibióticos para la letra: ${letter}`);
        return;
    }

    antibioticsData[letter].forEach(antibiotic => {
        const button = document.createElement("button");
        button.textContent = antibiotic.name;
        button.classList.add("antibiotic-item");
        button.setAttribute("data-name", antibiotic.name);
        button.addEventListener("click", () => displayDetails(antibiotic.name));
        searchResults.appendChild(button);
    });

    // Mostrar la lista de antibióticos
    searchResults.style.display = "block";

    // Ocultar sidebar y barra de búsqueda cuando se muestra la lista
    document.getElementById("alphabet-list").style.display = "none";
    document.getElementById("seek-container").style.display = "none";

    // Mostrar el botón de volver
    document.getElementById("reset-button").style.display = "block";

    console.log(`Mostrando antibióticos para la letra: ${letter}`);
}


// 4. Función para mostrar detalles de un antibiótico seleccionado
function displayDetails(antibioticName) {
    const infoContainer = document.getElementById("antibiotic-info");
    infoContainer.innerHTML = "";
    
    let selectedAntibiotic;
    Object.values(antibioticsData).forEach(group => {
        const found = group.find(atb => atb.name === antibioticName);
        if (found) selectedAntibiotic = found;
    });

    if (!selectedAntibiotic) {
        console.error(`No se encontró información para: ${antibioticName}`);
        return;
    }

    const titleElement = document.createElement("h2");
    titleElement.classList.add("antibiotic-title");
    titleElement.textContent = selectedAntibiotic.name;
    infoContainer.appendChild(titleElement);
    
    const detailsTable = document.createElement("table");
    detailsTable.classList.add("details-table");

    const properties = [
        { icon: "01_presentacion.png", label: "Presentación", value: selectedAntibiotic.presentation },
        { icon: "02_tipo.png", label: "Tipo", value: selectedAntibiotic.type },
        { icon: "03_dosis.png", label: "Dosis", value: selectedAntibiotic.dose },
        { icon: "04_preparacion.png", label: "Preparación", value: selectedAntibiotic.preparation },
        { icon: "05_aspecto.png", label: "Aspecto", value: selectedAntibiotic.appearance },
        { icon: "06_tiempo.png", label: "Tiempo de administración", value: selectedAntibiotic.administrationTime },
        { icon: "07_conservacion.png", label: "Conservación", value: selectedAntibiotic.storage },
        { icon: "08_ficha_tecnica.png", label: "Ficha técnica", value: selectedAntibiotic.technicalSheet }
    ];

    properties.forEach(prop => {
        if (prop.value) {
            const row = document.createElement("tr");
            const headerCell = document.createElement("td");
            headerCell.classList.add("detail-header");
            headerCell.innerHTML = `<img src='imagenes/${prop.icon}' alt='Icono ${prop.label}'> <span>${prop.label}</span>`;
            
            const contentCell = document.createElement("td");
            contentCell.classList.add("detail-content");
            
            if (prop.label === "Ficha técnica") {
                const link = document.createElement("a");
                link.href = prop.value;
                link.target = "_blank";
                link.classList.add("technical-sheet-link");
                link.textContent = "Ver ficha técnica";
                contentCell.appendChild(link);
            } else {
                contentCell.textContent = prop.value;
            }
            
            row.appendChild(headerCell);
            row.appendChild(contentCell);
            detailsTable.appendChild(row);
        }
    });
    
    infoContainer.appendChild(detailsTable);
    
    // Ocultar la lista de antibióticos y mostrar el botón de volver
    document.getElementById("search-results").style.display = "none";
    document.getElementById("reset-button").style.display = "block";
}

// 5. Configurar el botón de volver al inicio
document.getElementById("reset-button").addEventListener("click", function () {
    console.log("Botón de inicio presionado, restaurando la vista principal...");

    // Mostrar el sidebar y la barra de búsqueda
    document.getElementById("alphabet-list").style.display = "flex";
    document.getElementById("seek-container").style.display = "block";

    // Ocultar los resultados de búsqueda y la información del antibiótico
    document.getElementById("search-results").style.display = "none";
    document.getElementById("antibiotic-info").innerHTML = `
        <h2 class="antibiotic-title">Información del Antibiótico</h2>
        <p>Seleccione un antibiótico para ver los detalles.</p>
    `;

    // Asegurar que el botón de inicio no esté visible en la pantalla principal
    document.getElementById("reset-button").style.display = "none";

    // Limpiar la barra de búsqueda
    document.getElementById("seek-bar").value = "";
});
