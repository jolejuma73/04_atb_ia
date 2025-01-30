const antibioticos = [
    "Aciclovir 250 mg Polvo para solución para perfusión",
    "Amikacina 500mg/2ml Solución inyectable y para perfusión",
    "Amoxicilina 1000 mg / Ac clavulánico 200 mg Polvo para solución inyectable y perfusión",
    "Amoxicilina 2000 mg / Ac clavulánico 200 mg Polvo para solución para perfusión",
    "Ampicilina 1 gr Polvo y disolvente para solución inyectable y para perfusión",
    "Anfotericina B 50 mg (Ambisome) Polvo para dispersión para perfusión",
    "Anidulafungina 100 mg Polvo para concentrado para solución para perfusión",
    "Azitromicina 500mg Polvo para solución para perfusión"
];

document.addEventListener("DOMContentLoaded", () => {
    cargarLista();
});

function cargarLista() {
    const lista = document.getElementById('antibioticos-list');
    lista.innerHTML = '';
    antibioticos.forEach(antibiotico => {
        const li = document.createElement('li');
        li.textContent = antibiotico;
        li.onclick = () => buscarAntibiotico(antibiotico);
        lista.appendChild(li);
    });
}

function buscarAntibiotico() {
    const searchText = document.getElementById("search").value.toLowerCase();
    const resultado = antibioticos.find(a => a.toLowerCase().includes(searchText));
    if (resultado) {
        document.getElementById('info').textContent = `Información sobre: ${resultado}`;
        generarQR(resultado);
    } else {
        document.getElementById('info').textContent = "No se encontró el antibiótico";
    }
}

function generarQR(texto) {
    document.getElementById('qr-code').innerHTML = `<img src='https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(texto)}'>`;
}
