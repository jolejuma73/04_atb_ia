document.addEventListener("DOMContentLoaded", () => {
    const alphabetList = document.getElementById("alphabet-list");
    const searchInput = document.getElementById("seek-bar");
    const searchResults = document.getElementById("search-results");
    const contenedor1 = document.getElementById("contenedor1");
    const contenedor2 = document.getElementById("contenedor2");
    const contenedor3 = document.getElementById("contenedor3");
    const antibioticInfo = document.getElementById("antibiotic-info");
    
    let antibioticsData = [];

    // Cargar datos desde antiinfecciosos.json
    fetch("antiinfecciosos.json")
        .then(response => response.json())
        .then(data => {
            console.log("Datos cargados:", data); // Depuración
            if (!Array.isArray(data)) {
                antibioticsData = Object.values(data).flat();
            } else {
                antibioticsData = data;
            }
            generateAlphabetList();
        })
        .catch(error => console.error("Error cargando los datos. Asegúrate de que antiinfecciosos.json es un JSON válido: ", error));

    // Generar lista de iniciales
    function generateAlphabetList() {
        if (!antibioticsData.length) {
            console.warn("No hay datos para generar la lista de iniciales");
            return;
        }
        alphabetList.innerHTML = "";
        const letters = new Set();
        antibioticsData.forEach(antibiotic => letters.add(antibiotic.name.charAt(0).toUpperCase()));
        
        console.log("Letras generadas:", [...letters]); // Depuración

        [...letters].sort().forEach(letter => {
            const item = document.createElement("li");
            item.textContent = letter;
            item.classList.add("alphabet-item");
            item.addEventListener("click", () => filterByInitial(letter));
            alphabetList.appendChild(item);
        });
    }

    // Filtrar antibióticos por inicial
    function filterByInitial(letter) {
        displayResults(antibioticsData.filter(a => a.name.startsWith(letter)));
    }

    // Manejar la búsqueda
    searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase();
        if (query.length === 0) return;

        const filteredAntibiotics = antibioticsData.filter(antibiotic => antibiotic.name.toLowerCase().includes(query));
        displayResults(filteredAntibiotics);
    });

    // Mostrar resultados en contenedor2
    function displayResults(results) {
        searchResults.innerHTML = "";
        if (results.length === 0) {
            searchResults.innerHTML = "<p style='color: red;'>No se encontraron resultados</p>";
            return;
        }
        
        results.forEach(antibiotic => {
            const li = document.createElement("li");
            li.textContent = antibiotic.name;
            li.classList.add("search-result-item");
            li.addEventListener("click", () => displayDetails(antibiotic));
            searchResults.appendChild(li);
        });

        contenedor1.style.display = "none";
        contenedor2.style.display = "flex";
    }

    // Mostrar detalles en contenedor3
    // Función para eliminar solo enlaces <a> sin afectar imágenes u otros elementos HTML
// Función para eliminar cualquier etiqueta HTML y dejar solo texto plano
function stripHTML(text) {
    if (!text) return "N/A";
    let tempElement = document.createElement("div");
    tempElement.innerHTML = text;
    return tempElement.textContent || tempElement.innerText || "N/A"; // Extrae solo texto puro
}

function displayDetails(antibiotic) {
    let fichaTecnica = "N/A";
    if (antibiotic.technicalSheet && antibiotic.technicalSheet.trim() !== "" && antibiotic.technicalSheet.endsWith(".pdf")) {
        let url = antibiotic.technicalSheet;
        if (!url.startsWith("http://") && !url.startsWith("https://")) {
            url = "https://" + url;
        }
        fichaTecnica = `<a href="${url}" target="_blank" rel="noopener noreferrer">Ver ficha técnica</a>`;
    }

    antibioticInfo.innerHTML = `
        <h2 class="h2-details">${stripHTML(antibiotic.name)}</h2>
        <table class="details-table">
            <tr><th><img src="imagenes/01_presentacion.png" alt="Icono de presentación"> Presentación</th><td>${stripHTML(antibiotic.presentation)}</td></tr>
            <tr><th><img src="imagenes/02_tipo.png" alt="Icono de tipo"> Tipo</th><td>${stripHTML(antibiotic.type)}</td></tr>
            <tr><th><img src="imagenes/03_dosis.png" alt="Icono de dosis"> Dosis</th><td>${stripHTML(antibiotic.dose)}</td></tr>
            <tr><th><img src="imagenes/04_preparacion.png" alt="Icono de preparación"> Preparación</th><td>${stripHTML(antibiotic.preparation)}</td></tr>
            <tr><th><img src="imagenes/05_aspecto.png" alt="Icono de aspecto"> Apariencia</th><td>${stripHTML(antibiotic.appearance)}</td></tr>
            <tr><th><img src="imagenes/06_tiempo.png" alt="Icono de tiempo"> Tiempo de administración</th><td>${stripHTML(antibiotic.administrationTime)}</td></tr>
            <tr><th><img src="imagenes/07_conservacion.png" alt="Icono de conservación"> Conservación</th><td>${stripHTML(antibiotic.storage)}</td></tr>
            <tr><th><img src="imagenes/08_ficha_tecnica.png" alt="Icono de ficha técnica"> Ficha técnica</th><td>${fichaTecnica}</td></tr>
        </table>
    `;

    contenedor2.style.display = "none";
    contenedor3.style.display = "flex";
}


});