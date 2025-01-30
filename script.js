document.addEventListener("DOMContentLoaded", function() {
    const antibiotics = {
        A: [
            {
                name: "Aciclovir 250 mg Polvo para solución para perfusión",
                presentation: "Vial 250 mg",
                type: "Antiviral",
                dose: "5-10 mg/kg c/ 8h",
                preparation: "Reconstituir con 10cc de agua para inyección o SSF. Tras reconstitución, SSF, SG5% o RL. No superar los 5mg/ml",
                appearance: "Solución clara e incolora.",
                administrationTime: "No menos de 60 minutos",
                storage: "Una vez diluido, permanece estable 12h a temperatura ambiente. No refrigerar por riesgo de cristalización.",
                technicalSheet: "https://cima.aemps.es/cima/pdfs/es/ft/65256/FT_65256.pdf"
            },
            {
                name: "Amikacina 500mg/2ml Solución inyectable y para perfusión",
                presentation: "Vial 500 mg en 2 ml",
                type: "Aminoglucósido",
                dose: "15 mg/kg/día",
                preparation: "SSF o SG5%. 5 mg/ml",
                appearance: "Transparente o ligeramente amarillenta.",
                administrationTime: "30-60 minutos",
                storage: "Una vez diluido, permanece estable 24h a temperatura ambiente.",
                technicalSheet: "https://cima.aemps.es/cima/pdfs/es/ft/57012/FT_57012.pdf"
            }
        ],
        C: [
            {
                name: "Ceftriaxona 1 gr Polvo para solución inyectable intravenosa",
                presentation: "Vial 1 gr",
                type: "Cefalosporina",
                dose: "1-2 gr cada 24 horas",
                preparation: "Diluir en 10 ml de agua para inyección.",
                appearance: "Solución amarillenta",
                administrationTime: "Administrar en bolo lento o en perfusión durante 30 minutos.",
                storage: "Una vez diluido, usar en un plazo máximo de 6 horas a temperatura ambiente.",
                technicalSheet: "https://cima.aemps.es/cima/pdfs/es/ft/66435/FT_66435.pdf"
            }
        ],
        M: [
            {
                name: "Metronidazol 500mg Solución para perfusión",
                presentation: "Frasco de 100 ml",
                type: "Antiparasitario/Antibacteriano",
                dose: "500 mg cada 8 horas",
                preparation: "Listo para usar. No requiere dilución.",
                appearance: "Solución clara e incolora.",
                administrationTime: "Administrar durante 30-60 minutos.",
                storage: "Conservar a temperatura inferior a 25°C.",
                technicalSheet: "https://cima.aemps.es/cima/pdfs/es/ft/67022/FT_67022.pdf"
            }
        ]
    };

    const alphabetList = document.getElementById("alphabet-list");
    const antibioticInfo = document.getElementById("antibiotic-info");

    // Crear lista del alfabeto
    for (let i = 65; i <= 90; i++) {
        const letter = String.fromCharCode(i);
        const listItem = document.createElement("li");
        listItem.textContent = letter;
        listItem.classList.add("alphabet-item");
        if (antibiotics[letter]) {
            listItem.addEventListener("click", () => displayAntibiotics(letter));
        } else {
            listItem.classList.add("disabled");
        }
        alphabetList.appendChild(listItem);
    }

    // Mostrar antibióticos según la letra seleccionada
    function displayAntibiotics(letter) {
        if (!antibiotics[letter] || antibiotics[letter].length === 0) {
            antibioticInfo.innerHTML = `
                <h2 class='info-title'>No hay antibióticos para esta letra</h2>
                <p>Busque otro antibiótico en el listado general.</p>
            `;
            return;
        }

        const list = antibiotics[letter].map(atb => `<li class='antibiotic-item' data-name='${atb.name}'>${atb.name}</li>`).join("");
        antibioticInfo.innerHTML = `
            <h2 class='info-title'>Antibióticos que empiezan con ${letter}</h2>
            <ul class='antibiotic-list'>${list}</ul>
        `;
        addAntibioticClickEvents(letter);
    }

    // Agregar eventos de clic a los elementos de antibióticos
    function addAntibioticClickEvents(letter) {
        const items = document.querySelectorAll(".antibiotic-item");
        items.forEach(item => {
            item.addEventListener("click", () => {
                const antibioticName = item.getAttribute("data-name");
                const antibiotic = antibiotics[letter].find(atb => atb.name === antibioticName);
                showDetails(antibiotic);
            });
        });
    }

    // Mostrar detalles del antibiótico seleccionado
    function showDetails(antibiotic) {
        const details = `
        <div class='antibiotic-details'>
            <h2>${antibiotic.name}</h2>
            <table class='details-table'>
                <tr><th>Presentación</th><td>${antibiotic.presentation}</td></tr>
                <tr><th>Tipo de Antiinfeccioso</th><td>${antibiotic.type}</td></tr>
                <tr><th>Dosis</th><td>${antibiotic.dose}</td></tr>
                <tr><th>Preparación</th><td>${antibiotic.preparation}</td></tr>
                <tr><th>Aspecto tras Reconstitución</th><td>${antibiotic.appearance}</td></tr>
                <tr><th>Tiempo de Administración</th><td>${antibiotic.administrationTime}</td></tr>
                <tr><th>Conservación</th><td>${antibiotic.storage}</td></tr>
                <tr><th>Ficha Técnica</th><td><a href="${antibiotic.technicalSheet}" target="_blank" class="technical-sheet-link">Ver ficha técnica</a></td></tr>
            </table>
        </div>`;
        antibioticInfo.innerHTML = details;
    }

    // Buscar antibióticos
    const searchBar = document.getElementById("search-bar");
    searchBar.addEventListener("input", function() {
        const query = searchBar.value.toLowerCase();
        let results = [];

        for (const letter in antibiotics) {
            results = results.concat(
                antibiotics[letter].filter(atb => atb.name.toLowerCase().includes(query))
            );
        }

        const resultList = results.map(atb => `<li class='antibiotic-item' data-name='${atb.name}'>${atb.name}</li>`).join("");
        antibioticInfo.innerHTML = `<h2 class='info-title'>Resultados de la búsqueda</h2><ul class='antibiotic-list'>${resultList}</ul>`;
        addAntibioticClickEvents("search");
    });
});
