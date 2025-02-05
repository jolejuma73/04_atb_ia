document.addEventListener("DOMContentLoaded", function () {
    // 1. Selección de elementos del DOM
    const inicialesContainer = document.getElementById("iniciales");
    const listaAntiinfecciosos = document.getElementById("lista-antiinfecciosos");
    const detalleAntiinfeccioso = document.getElementById("detalle-antiinfeccioso");
    const zonaBusqueda = document.querySelector(".zona-busqueda");
    const botonVolver = document.getElementById("volver-inicio");
    const tituloSeleccion = document.querySelector(".zona-iniciales"); // Selección del título
    const tituloLista = document.querySelector(".titulo-lista"); // Título de la lista
    const inputBusqueda = document.querySelector("#buscar-input");

    // 2. Datos de los antiinfecciosos
    const antibiotics = {
        A: [
            { name: "Aciclovir 250 mg", presentation: "Vial 250 mg", type: "Antiviral", dose: "5-10 mg/kg c/ 8h", preparation: "Reconstituir con 10cc de agua para inyección", appearance: "Incolora", administrationTime: "60 min", storage: "12h temperatura ambiente", technicalSheet: "https://cima.aemps.es/cima/pdfs/es/ft/65256/FT_65256.pdf" },
            { name: "Amikacina 500mg", presentation: "Vial 500 mg", type: "Aminoglucósido", dose: "15 mg/kg/día", preparation: "SSF o SG5%", appearance: "Transparente", administrationTime: "30-60 min", storage: "24h temperatura ambiente", technicalSheet: "https://cima.aemps.es/cima/pdfs/es/ft/57012/FT_57012.pdf" }
        ],
        B: [],
        C: [],
        D: [],
        E: [],
        F: [],
        G: [] // Agrega más letras y datos según sea necesario
    };

    // 3. Mostrar iniciales
    function mostrarIniciales() {

        inicialesContainer.innerHTML = ""; // Limpia botones previos
        console.log("Iniciales generadas:", Object.keys(antibiotics)); // Depuración
        Object.keys(antibiotics).forEach(inicial => {
            const button = document.createElement("button");
            button.textContent = inicial;
            button.addEventListener("click", () => mostrarAntiinfecciosos(inicial));
            inicialesContainer.appendChild(button);
        });
    }
    
    
    
    

    // 4. Mostrar antiinfecciosos de una inicial seleccionada
    function mostrarAntiinfecciosos(inicial) {
        console.log("Seleccionaste la inicial:", inicial); // Depuración
        alert(`Llamando a mostrarAntiinfecciosos con la inicial: ${inicial}`);

        listaAntiinfecciosos.innerHTML = "";
        detalleAntiinfeccioso.innerHTML = "";
    
        zonaBusqueda.style.display = "none";
        inicialesContainer.style.display = "none";
        tituloSeleccion.style.display = "none";
        tituloLista.style.display = "none";
        botonVolver.style.display = "block";
        listaAntiinfecciosos.style.display = "block";
    
        const regex = new RegExp(`^${inicial}$`, 'i'); // Case-insensitive search
        const results = Object.keys(antibiotics).find(key => regex.test(key));
    
        if (results && antibiotics[results].length > 0) {
            antibiotics[results].forEach(antibiotico => {
                const item = document.createElement("div");
                item.classList.add("aii-item");
                item.textContent = antibiotico.name;
                item.addEventListener("click", () => mostrarDetalles(antibiotico));
                listaAntiinfecciosos.appendChild(item);
            });
        } else {
            listaAntiinfecciosos.innerHTML = `<p>No se encontraron antiinfecciosos para la inicial seleccionada.</p>`;
        }
    }
    


    // 5. Mostrar detalles de un antiinfeccioso seleccionado
    function mostrarDetalles(antibiotico) {
        listaAntiinfecciosos.style.display = "none";
        detalleAntiinfeccioso.style.display = "block";

        detalleAntiinfeccioso.innerHTML = `
        <table class="detalle-tabla">
            <thead>
                <tr>
                    <th><img src="imagenes/01_presentacion.png" alt="Icono de Presentación" aria-label="Presentación"></th>
                    <th>Presentación</th>
                    <td>${antibiotico.presentation}</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><img src="imagenes/02_tipo.png" alt="Icono de Tipo" aria-label="Tipo"></td>
                    <td>Tipo</td>
                    <td>${antibiotico.type}</td>
                </tr>
                <tr>
                    <td><img src="imagenes/03_dosis.png" alt="Icono de Dosis" aria-label="Dosis"></td>
                    <td>Dosis</td>
                    <td>${antibiotico.dose}</td>
                </tr>
                <tr>
                    <td><img src="imagenes/04_preparacion.png" alt="Icono de Preparación" aria-label="Preparación"></td>
                    <td>Preparación</td>
                    <td>${antibiotico.preparation}</td>
                </tr>
                <tr>
                    <td><img src="imagenes/05_aspecto.png" alt="Icono de Aspecto" aria-label="Aspecto"></td>
                    <td>Aspecto</td>
                    <td>${antibiotico.appearance}</td>
                </tr>
                <tr>
                    <td><img src="imagenes/06_tiempo.png" alt="Icono de Tiempo de Administración" aria-label="Tiempo de Administración"></td>
                    <td>Tiempo de Administración</td>
                    <td>${antibiotico.administrationTime}</td>
                </tr>
                <tr>
                    <td><img src="imagenes/07_conservacion.png" alt="Icono de Conservación" aria-label="Conservación"></td>
                    <td>Conservación</td>
                    <td>${antibiotico.storage}</td>
                </tr>
                <tr>
                    <td><img src="imagenes/08_ficha_tecnica.png" alt="Icono de Ficha Técnica" aria-label="Ficha Técnica"></td>
                    <td>Ficha Técnica</td>
                    <td><a href="${antibiotico.technicalSheet}" target="_blank" aria-label="Ver ficha técnica">Ver ficha técnica</a></td>
                </tr>
            </tbody>
        </table>`;
    }

    // 6. Funcionalidad de búsqueda por texto

    inputBusqueda.addEventListener("input", () => {
        const searchText = inputBusqueda.value.toLowerCase();
        console.log("Texto de búsqueda ingresado:", searchText); // Depuración
        listaAntiinfecciosos.innerHTML = "";
        detalleAntiinfeccioso.innerHTML = "";
    
        if (searchText.trim() === "") {
            listaAntiinfecciosos.innerHTML = `<p>Ingrese un término para buscar.</p>`;
            return;
        }
    
        const results = Object.values(antibiotics).flat().filter(antibiotico =>
            antibiotico.name.toLowerCase().includes(searchText)
        );
    
        console.log("Resultados de búsqueda:", results); // Depuración
    
        if (results.length > 0) {
            results.forEach(antibiotico => {
                const item = document.createElement("div");
                item.classList.add("aii-item");
                item.textContent = antibiotico.name;
                item.addEventListener("click", () => mostrarDetalles(antibiotico));
                listaAntiinfecciosos.appendChild(item);
            });
        } else {
            listaAntiinfecciosos.innerHTML = `<p>No se encontraron resultados para "${searchText}".</p>`;
        }
    });
    
    
    // 7. Funcionalidad del botón de volver al inicio
    botonVolver.addEventListener("click", () => {
        listaAntiinfecciosos.style.display = "none";
        detalleAntiinfeccioso.style.display = "none";
        inicialesContainer.style.display = "block";
        zonaBusqueda.style.display = "block";
        tituloSeleccion.style.display = "block";
        tituloLista.style.display = "block";
        botonVolver.style.display = "none";

        // Reset view for all possible states
        listaAntiinfecciosos.innerHTML = "";
        detalleAntiinfeccioso.innerHTML = "";
    });

    // 8. Iniciar la visualización de las iniciales
    mostrarIniciales();
});
