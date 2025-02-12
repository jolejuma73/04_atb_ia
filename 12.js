document.addEventListener("DOMContentLoaded", () => {
    fetch("antiinfecciosos.json")
        .then(response => response.json())
        .then(data => {
            console.log("JSON cargado correctamente:", data);
            
            if (typeof data === "object" && !Array.isArray(data)) {
                window.antiinfecciososData = data;
            } else {
                console.error("Error: el JSON cargado no es válido", data);
                return;
            }
            
            populateSidebar(window.antiinfecciososData);
        })
        .catch(error => console.error("Error al cargar el JSON:", error));
});

// Asegurar que el input de búsqueda existe antes de asignar eventos
const seekBar = document.getElementById("seek-bar");
if (seekBar) {
    seekBar.addEventListener("input", function() {
        const query = this.value.trim().toLowerCase();
        if (query.length > 0) {
            filterAntiinfecciosos(query);
        }
    });
}

// Agregar eventos a los botones de volver
document.querySelectorAll(".back-button").forEach(button => {
    button.addEventListener("click", goBackToHome);
});

// Poblar el sidebar con iniciales
function populateSidebar(data) {
    const sidebar = document.getElementById("alphabet-list");
    if (!sidebar) return;
    sidebar.innerHTML = "";
    
    const initials = Object.keys(data).sort();
    initials.forEach(letter => {
        if (!Array.isArray(data[letter]) || data[letter].length === 0) return;

        const li = document.createElement("li");
        li.textContent = letter;
        li.classList.add("sidebar-letter");
        li.addEventListener("click", () => {
            console.log("Seleccionada letra:", letter);
            displayAntiinfecciosos(data[letter]);
        });
        sidebar.appendChild(li);
    });
}

// Filtrar antiinfecciosos según la búsqueda
function filterAntiinfecciosos(query) {
    if (!window.antiinfecciososData) return;
    
    let filtered = [];
    Object.values(window.antiinfecciososData).forEach(group => {
        if (!Array.isArray(group)) return;
        filtered = filtered.concat(group.filter(ati => ati.nombre && ati.nombre.toLowerCase().includes(query)));
    });
    
    if (filtered.length === 0) {
        console.warn("No se encontraron resultados para:", query);
    }
    displayAntiinfecciosos(filtered);
}

// Mostrar lista de antiinfecciosos
function displayAntiinfecciosos(list) {
    const resultsContainer = document.getElementById("search-results");
    const container1 = document.getElementById("container-1");
    const container2 = document.getElementById("container-2");
    const container3 = document.getElementById("container-3");
    
    if (!resultsContainer || !container1 || !container2 || !container3) return;
    
    console.log("Mostrando antiinfecciosos:", list);
    
    container1.classList.add("hidden");
    container3.classList.add("hidden");
    container2.classList.remove("hidden");
    resultsContainer.innerHTML = "";
    
    if (!list || list.length === 0) {
        resultsContainer.innerHTML = "<p>No se encontraron resultados</p>";
        return;
    }
    
    list.forEach(ati => {
        if (!ati.nombre) return;
        const div = document.createElement("div");
        div.textContent = ati.nombre;
        div.classList.add("antiinfeccioso-item");
        div.addEventListener("click", () => {
            console.log("Mostrando detalles de:", ati);
            displayDetails(ati);
        });
        resultsContainer.appendChild(div);
    });
    
    console.log("Resultados añadidos al contenedor", resultsContainer);
}

// Mostrar detalles del antiinfeccioso seleccionado
function displayDetails(ati) {
    const container1 = document.getElementById("container-1");
    const container2 = document.getElementById("container-2");
    const container3 = document.getElementById("container-3");
    const detailsContainer = document.getElementById("antibiotic-info");
    
    if (!container1 || !container2 || !container3 || !detailsContainer) return;
    
    container1.classList.add("hidden");
    container2.classList.add("hidden");
    container3.classList.remove("hidden");
    
    detailsContainer.innerHTML = `<h2>${ati.nombre}</h2><p>${ati.descripcion || "Sin descripción"}</p>`;
}

// Volver a la pantalla principal
function goBackToHome() {
    const container1 = document.getElementById("container-1");
    const container2 = document.getElementById("container-2");
    const container3 = document.getElementById("container-3");
    
    if (!container1 || !container2 || !container3) return;
    
    container1.classList.remove("hidden");
    container2.classList.add("hidden");
    container3.classList.add("hidden");
}
