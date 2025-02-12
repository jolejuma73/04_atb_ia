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
function displayAntibiotics(letter) {
    const searchResults = document.getElementById("search-results");
    searchResults.innerHTML = "";

    if (!antibioticsData[letter]) return;

    antibioticsData[letter].forEach(antibiotic => {
        const button = document.createElement("button");
        button.textContent = antibiotic.name;
        button.classList.add("antibiotic-item");
        button.setAttribute("data-name", antibiotic.name);
        button.addEventListener("click", () => displayDetails(antibiotic.name));
        searchResults.appendChild(button);
    });
}

// 4. Función para mostrar detalles de un antibiótico seleccionado
function displayDetails(antibioticName) {
    const infoContainer = document.getElementById("antibiotic-info");
    const searchResults = document.getElementById("search-results");
    infoContainer.innerHTML = "";
    searchResults.innerHTML = ""; // Borra la lista de antibióticos buscados
    
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
}

// 5. Agregar funcionalidad de búsqueda
document.getElementById("seek-bar").addEventListener("input", function () {
    const searchValue = this.value.trim().toLowerCase();
    const searchResults = document.getElementById("search-results");
    searchResults.innerHTML = "";
    
    if (searchValue === "") return;
    
    Object.values(antibioticsData).flat().forEach(antibiotic => {
        if (antibiotic.name.toLowerCase().includes(searchValue)) {
            const button = document.createElement("button");
            button.textContent = antibiotic.name;
            button.classList.add("antibiotic-item");
            button.setAttribute("data-name", antibiotic.name);
            button.addEventListener("click", () => displayDetails(antibiotic.name));
            searchResults.appendChild(button);
        }
    });
});

// 6. Función para volver al inicio y restaurar la vista inicial
document.addEventListener("DOMContentLoaded", function () {
    const homeButton = document.getElementById("home-button");
    
    if (homeButton) {
        homeButton.addEventListener("click", function () {
            console.log("Botón de inicio presionado, regresando a la página principal...");
            document.getElementById("main-content").style.display = "block";
            document.getElementById("alphabet-list").style.display = "flex";
            document.getElementById("search-results").style.display = "block";
            document.getElementById("seek-bar").value = "";
            document.getElementById("antibiotic-info").innerHTML = `<h2 class="antibiotic-title">Información del Antibiótico</h2><p>Seleccione un antibiótico para ver los detalles.</p>`;
        });
    } else {
        console.error("No se encontró el botón de inicio.");
    }
});
