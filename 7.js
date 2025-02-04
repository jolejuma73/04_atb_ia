document.addEventListener("DOMContentLoaded", function () {
    const alphabetList = document.getElementById("alphabet-list");
    const sidebar = document.querySelector(".sidebar");
    const mainButtonContainer = document.getElementById("main-button-container");
    const searchResults = document.getElementById("search-results");
    const searchBar = document.getElementById("seek-bar");
    const antibioticInfo = document.getElementById("antibiotic-info");

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
            },
            {
                name: "Amoxicilina 1 g / Ac. clavulánico 200 mg",
                presentation: "Vial 1000mg/200mg",
                type: "Betalactámico",
                dose: "1000mg/200mg c/8h",
                preparation: "Se recomienda reconstituir con 20cc de agua para inyección y, posteriormente, administrar en bolo o añadir a alguno de los siguientes disolventes: agua para inyección, SSF o RL.",
                appearance: "Incoloro o color paja pálido.",
                administrationTime: "Directa en 3 min o diluido en 30 minutos",
                storage: "El producto reconstituido con 20cc de agua para inyección, es estable a temperatura ambiente durante 20 minutos. Una vez añadido a la bolsa de perfusión, es estable en agua para inyección y SSF, durante 3 horas a temperatura ambiente y durante 6 horas en nevera. En RL es estable 2 horas a temperatura ambiente.",
                technicalSheet: "https://cima.aemps.es/cima/pdfs/es/ft/65131/FichaTecnica_65131.html.pdf"
            },
            {
                name: "Amoxicilina 2 g / Ac. clavulánico 200 mg",
                presentation: "Vial 1000mg/200mg",
                type: "Betalactámico",
                dose: "2000mg/200mg c/8h",
                preparation: "Se recomienda reconstituir con 20cc de agua para inyección y, posteriormente, administrar en bolo o añadir a alguno de los siguientes disolventes: agua para inyección, SSF o RL.",
                appearance: "Incoloro o color paja pálido.",
                administrationTime: "30 minutos.",
                storage: "El producto reconstituido con 20cc de agua para inyección, es estable a temperatura ambiente durante 20 minutos. Una vez añadido a la bolsa de perfusión, es estable en agua para inyección y SSF, durante 3 horas a temperatura ambiente y durante 6 horas en nevera. En RL es estable 2 horas a temperatura ambiente.",
                technicalSheet: "https://cima.aemps.es/cima/pdfs/es/ft/65679/FichaTecnica_65679.html.pdf"
            },
            {
                name: "Ampicilina 1 gr Polvo y disolvente para solución inyectable y para perfusión",
                presentation: "Vial 1 gr",
                type: "Betalactámico",
                dose: "500 mg/6h",
                preparation: "Reconstituir con 4 cc de agua para inyección (presente en la caja). Después, añadir a 50-100 cc de SSF o SG.",
                appearance: "No hay datos",
                administrationTime: "30-60 minutos",
                storage: "El producto reconstituido, debe ser diluido inmediatamente. Una vez diluido, es estable 24 horas en nevera y 8 horas a temperatura ambiente.",
                technicalSheet: "https://cima.aemps.es/cima/pdfs/es/p/89095/P_89095.html.pdf"
            },              
            {
                name: "Anfotericina B 50 mg (Ambisome) Polvo para dispersión para perfusión",
                presentation: "Vial 50 mg",
                type: "Antimicótico poliénico",
                dose: "1-5 mg/kg/día",
                preparation: "Se recomienda reconstituir cada vial con 12cc de agua para inyección para que la concentración sea de 4mg/ml. Tras la reconstitución, diluir en suero glucosado (5%, 10% o 20%), para que la concentración final sea de entre 0,2 y 2 mg/ml. Utilizar filtro de 5 micras incluido en la caja.",
                appearance: "Solución amarilla translúcida.",
                administrationTime: "30-60 minutos. Lavar vía con SG5% antes y después de la administración, para que el fármaco no entre en contacto con SSF.",
                storage: "El producto reconstituido con agua para inyección, permanece estable 24 horas a temperatura ambiente o 7 días en nevera. La dilución en SG5% es estable 72 horas a temperatura ambienye a concentraciones entre 0,5 y 2 mg/ml. A menor concentración, es estable a temperatura ambiente 24 horas. La dilución en SG5% es estable 7 días en nevera a concentraciones entre 0,5 y 2 mg/ml. A menor concentración, es estable en nevera 4 días. Con SG10% y SG20%, a concentraciones de 2mg/ml, es estable 48 horas en nevera y 72 a temperatura ambiente.",
                technicalSheet: "https://cima.aemps.es/cima/pdfs/es/ft/61117/FichaTecnica_61117.html.pdf"
            },
            {
                name: "Anidulafungina 100 mg Polvo para concentrado para solución para perfusión",
                presentation: "Vial 100 mg",
                type: "Antimicótico equinocandina",
                dose: "200 mg el primer día. Resto, 100 mg/día",
                preparation: "Se recomienda reconstituir con 30 cc de agua para inyección (por vial), para obtener 3,33 mg/ml. Tras la reconstitución, añadir la solución resultante a 100 cc de SSF o SG5% (por vial), para obtener concentración de 0,77 mg/ml.",
                appearance: "Transparente, de incolora a amarillo.",
                administrationTime: "90 min por cada 100 mg (84 ml/h)",
                storage: "El vial con el polvo se conserva en nevera (puede estar 96 horas a temperatura ambiente y, después, se puede volver a conservar en nevera). El producto reconstituido, permanece estable 24 horas a temperatura ambiente. El producto diluido, es estable 48 horas a temperatura ambiente.",
                technicalSheet: "https://cima.aemps.es/cima/pdfs/es/ft/83018/83018_ft.pdf"
            },
            {
                name: "Azitromicina 500 mg Polvo para solución para perfusión",
                presentation: "Vial 500 mg",
                type: "Macrólido",
                dose: "500 mg/día",
                preparation: "Diluir en 4.8 ml de agua para inyección y luego en 500 ml de SG5%.Reconstituir con 4.8cc de agua para inyección, obteniendo 100mg/ml. Tras la reconstitución, diluir en SSF, SG5% o RL. No superar la concentración de 2mg/ml.",
                appearance: "Transparente ",
                administrationTime: "60 minutos",
                storage: "El producto reconstituido con agua para inyección, permanece estable 24 horas en nevera. Una vez diluido, se ha demostrado estable entre 1-3 horas.",
                technicalSheet: "https://cima.aemps.es/cima/pdfs/es/ft/73962/73962_ft.pdf"
            }
        ],
        C: [
            {
                name: "Casirivimab 300 mg/Imdevimab 300 mg Solución inyectable y para perfusión",
                presentation: "Vial 300mg+300mg en 2,5ml+2,5ml",
                type: "Anticuerpo monoclonal antiviral",
                dose: "300mg+300mg a 4000mg+4000mg",
                preparation: "Añadir la solución de ambos viales a 100cc o 250cc de SSF o SG5%. Para la dosis de 4000mg+4000mg, usar 250cc de diluyente y extraer el volumen que ocupa la solución de los viales (66,6cc). Utilizar filtro de 0,2 a 5 micras para la administración.",
                appearance: "Transparente a ligeramente opalescente, de incolora a amarillo pálido.",
                administrationTime: "20-30 minutos. Para la dosis de 4000mg+4000mg, 60 minutos.",
                storage: "Los viales se conservan en nevera. La solución preparada, permanece estable 20 horas a temperatura ambiente y 72 horas en nevera.",
                technicalSheet: "https://cima.aemps.es/cima/pdfs/es/ft/1211601002/FT_1211601002.html.pdf"
            },
            {
                name: "Caspofungina 50 mg Polvo para concentrado para solución para perfusión",
                presentation: "Vial 50 mg",
                type: "Antimicótico lipopéptido",
                dose: "50-70 mg/día",
                preparation: "Reconstituir el vial con 10.5 cc de agua para inyección, obteniendo una concentración de 5,2 mg/ml. Después, añadir a 250 cc de SSF o RL. En casos concretos, se podrá utilizar 100 cc de diluyente. No usar glucosa.",
                appearance: "Transparente, de incolora a ligeramente amarilla.",
                administrationTime: "60 minutos",
                storage: "Los viales sin abrir, se conservan en nevera. La solución reconstituida, se puede conservar durante 24 horas a temperatura igual o inferior a 25ºC. Una vez diluido, es estable durante 24 horas a temperatura ambiente, y 48 en nevera.",
                technicalSheet: "https://cima.aemps.es/cima/pdfs/es/ft/82149/FT_82149.html.pdf"
            },
            {
                name: "Caspofungina 70 mg Polvo para concentrado para solución para perfusión",
                presentation: "Vial 70 mg",
                type: "Antimicótico lipopéptido",
                dose: "50-70 mg/día",
                preparation: "Reconstituir el vial con 10.5 cc de agua para inyección, obteniendo una concentración de 7,2 mg/ml. Después, añadir a 250 cc de SSF o RL. En casos concretos, se podrá utilizar 100 cc de diluyente. No usar glucosa.",
                appearance: "Transparente, de incolora a ligeramente amarilla.",
                administrationTime: "60 minutos",
                storage: "Los viales sin abrir, se conservan en nevera. La solución reconstituida, se puede conservar durante 24 horas a temperatura igual o inferior a 25ºC. Una vez diluido, es estable durante 24 horas a temperatura ambiente, y 48 en nevera.",
                technicalSheet: "https://cima.aemps.es/cima/pdfs/es/ft/82149/FT_82149.html.pdf"
            },
            {
                name: "Cefazolina 1 gr Polvo y diluyente para solución inyectable intravenosa",
                presentation: "Vial 1 gr",
                type: "Cefalosporina 1ª generación",
                dose: "0,5-1,5g/6-8-12h. Máximo 12gr/día",
                preparation: "Reconstituir el vial con 4 cc de agua para inyección, obteniendo una concentración de 250 mg/ml. Después, añadir a 50-100 cc de SSF, SG o RL.",
                appearance: "Transparente",
                administrationTime: "Para inyección IV directa, diluir en 10 cc de agua para inyección, y administrar en 3-5 minutos (no menos de 3 minutos). La ficha técnica no especifica tiempo de administración para infusión IV.",
                storage: "El producto reconstituido, es estable durante 8 horas a temperatura ambiente y 24 horas en nevera.",
                technicalSheet: "https://cima.aemps.es/cima/pdfs/es/ft/64848/FT_64848.html.pdf"
            },
            {
                name: "Cefepima 2 gr Polvo para solución inyectable y perfusión",
                presentation: "Vial 2 gr",
                type: "Cefalosporina 4ª generación",
                dose: "0,5-2gr/8-12 horas",
                preparation: "Reconstituir el vial con 10 cc de agua para inyección, obteniendo una concentración de 160 mg/ml. Después, añadir 50cc de SSF, SG o RL.",
                appearance: "Amarillo a amarillo-marrón",
                administrationTime: "30 minutos",
                storage: "El producto reconstituido con agua para inyección, permanece estable 18 horas a temperatura ambiente o 7 días en nevera. Al añadirle SSF, SG o RL la estabilidad es de 4 horas a temperatura ambiente y no se puede refrigerar.",
                technicalSheet: "https://cima.aemps.es/cima/pdfs/es/ft/83500/FT_83500.html.pdf"
            },
            {
                name: "Cefotaxima 1 gr Polvo y disolvente para solución inyectable",
                presentation: "Vial 1 gr",
                type: "Cefalosporina 3ª generación",
                dose: "1-3gr/4-6-8-12 horas. Máximo 12 gr/día",
                preparation: "Reconstituir el vial con 4 cc de agua para inyección. Después, añadir en 50-100 cc de agua para inyección, SSF o SG.",
                appearance: "Amarillo o ámbar",
                administrationTime: "Para inyección IV directa, diluir en agua para inyección, y administrar en 3-5 minutos. Para infusión IV, 20-60 minutos.",
                storage: "El producto reconstituido con agua para inyección, es estable durante 8 horas a temperatura ambiente y 24 horas en nevera.",
                technicalSheet: "https://cima.aemps.es/cima/pdfs/es/ft/57722/57722_ft.pdf"
            },
            {
                name: "Cefotaxima 2 gr Polvo y disolvente para solución inyectable y para perfusión",
                presentation: "Vial 2 gr",
                type: "Cefalosporina 3ª generación",
                dose: "1-3gr/4-6-8-12 horas. Máximo 12 gr/día",
                preparation: "Reconstituir el vial con 10 cc de agua para inyección. Después, añadir en 50-100 cc de agua para inyección, SSF o SG.",
                appearance: "Amarillo o ámbar",
                administrationTime: "20-60 minutos",
                storage: "El producto reconstituido con agua para inyección, es estable durante 8 horas a temperatura ambiente y 24 horas en nevera.",
                technicalSheet: "https://cima.aemps.es/cima/pdfs/es/ft/57722/57722_ft.pdf"
            }, 
            {
                name: "Cefoxitina 1 gr Polvo y disolvente para solución inyectable y para perfusión",
                presentation: "Vial 1 gr",
                type: "Cefalosporina 2ª generación",
                dose: "1-2gr/6-8-12-24h. Máximo 12gr/día",
                preparation: "Reconstituir el vial con 10 cc de agua para inyección. Después, se puede añadir en SSF y SG.",
                appearance: "No especifica",
                administrationTime: "Para inyección IV directa, diluir en 10 cc de agua para inyección, y administrar en 3-5 minutos. La ficha técnica, no especifica tiempo de administración para infusión IV.",
                storage: "El producto reconstituido con agua para inyección, es estable durante 24 horas a temperatura ambiente y 4 días en nevera.",
                technicalSheet: "https://cima.aemps.es/cima/pdfs/es/ft/63814/FichaTecnica_63814.html.pdf"
            },                      
            {
                name: "Ceftazidima 1 gr Polvo para solución inyectable",
                presentation: "Vial 1 gr",
                type: "Cefalosporina 3ª generación",
                dose: "1-2gr/8-12h. Máximo 9 gr/día",
                preparation: "Reconstituir el vial con 10 cc de SSF, SG o RL para inyección IV directa. Para infusión, añadir tras reconstituir a 50-100 cc de diluyente.",
                appearance: "Amarillo pálido a ámbar",
                administrationTime: "Para inyección IV directa, diluir en 10 cc de diluyente y administrar en 3-5 minutos. Para infusión, 15-30 minutos.",
                storage: "El producto reconstituido, es estable durante 8 horas a temperatura ambiente y 24 horas en nevera.",
                technicalSheet: "https://cima.aemps.es/cima/pdfs/es/ft/67873/FichaTecnica.pdf"
            },
            {
                name: "Ceftazidima 2 gr / Avibactam 0,5 gr. Polvo para concentrado para solución para perfusión",
                presentation: "Vial 2gr/0.5gr",
                type: "Cefalosporina 3ª generación",
                dose: "2gr/8h",
                preparation: "Se recomienda reconstituir el vial con 10 cc de agua para inyección. Después añadir el concentrado a 50-250 cc de SSF, SG o RL.",
                appearance: "Amarillo pálido",
                administrationTime: "120 minutos",
                storage: "El producto reconstituido debe diluirse inmediatamente. Una vez diluido, si la concentración es de 8mg/ml, permanece estable 12 horas en nevera y, 4 horas a menos de 25º. Para concentraciones entre 8mg/ml y 40mg/ml, el producto permanece estable 4 horas a temperatura ambiente.",
                technicalSheet: "https://www.ema.europa.eu/es/documents/overview/zavicefta-epar-medicine-overview_es.pdf"
            },
            {
                name: "Ceftolozano 1gr / Tazobactam 0,5gr Polvo para concentrado para solución para perfusión",
                presentation: "Vial 1gr/0,5gr",
                type: "Cefalosporina",
                dose: "1-2gr/8h",
                preparation: "Reconstituir el vial con 10 cc de agua para inyección o SSF. Después, añadir a 100 cc de SSF o SG.",
                appearance: "Transparente e incolora a ligeramente amarilla",
                administrationTime: "60 minutos",
                storage: "Los viales se conservan en nevera. La solución preparada, permanece estable 24 horas a temperatura ambiente y 4 días en nevera. El medicamento es fotosensible.",
                technicalSheet: "https://www.ema.europa.eu/es/documents/product-information/zerbaxa-epar-product-information_es.pdf"
            },
            {
                name: "Ceftriaxona 1 gr Polvo para solución inyectable intravenosa",
                presentation: "Vial 1 gr",
                type: "Cefalosporina 3ª generación",
                dose: "1-4gr/24h",
                preparation: "Reconstituir el vial con 10 cc de agua para inyecciones, agitando durante 60 segundos. Añadir después, en, al menos, 40 cc de SSF, SG o agua para inyección..",
                appearance: "Límpida y amarilla, o ligeramente amarillenta",
                administrationTime: "Para inyección IV directa, en 5 minutos (en venas grandes). Para infusión, 30 minutos.",
                storage: "El producto reconstituido, es estable durante 8 horas a temperatura ambiente y 24 horas en nevera. ",
                technicalSheet: "https://cima.aemps.es/cima/pdfs/es/ft/64538/FT_64538.html.pdf"
            },
            {
                name: "Ceftriaxona 2 gr Polvo para solución para perfusión",
                presentation: "Vial 2 gr",
                type: "Cefalosporina 3ª generación",
                dose: "1-4gr/24h",
                preparation: "Reconstituir el vial con 10 cc de SSF, SG o agua para inyecciones. Añadir después, en, al menos, 40 cc de SSF, SG o agua para inyección.",
                appearance: "Límpida y amarilla, o ligeramente amarillenta",
                administrationTime: "Para inyección IV directa, en 5 minutos (en venas grandes). Para infusión, 30 minutos.",
                storage: "El producto reconstituido, es estable durante 6 horas a temperatura ambiente y 24 horas en nevera.",
                technicalSheet: "https://cima.aemps.es/cima/pdfs/es/ft/62637/FT_62637.html.pdf"
            },
            {
                name: "Cefuroxima sódica 750 mg Polvo y disolvente para solución inyectable",
                presentation: "Vial 750 mg",
                type: "Cefalosporina 2ª generación",
                dose: "750-1500mg/8h",
                preparation: "Reconstituir el vial con, al menos, 6 cc de agua para inyección. Después, añadir a 50-100 cc de SSF, SG o RL.",
                appearance: "Transparente",
                administrationTime: "Para inyección IV directa, diluir en agua para inyección, y administrar en 3-5 minutos. Para infusión IV, 30-60 minutos.",
                storage: "El producto reconstituido, es estable durante 5 horas a temperatura ambiente y 24 horas en nevera.",
                technicalSheet: "https://cima.aemps.es/cima/pdfs/es/ft/62908/FT_62908.html.pdf"
            },
            {
                name: "Ciprofloxacino 2mg/ml solución para perfusión",
                presentation: "Vial 100 ml",
                type: "Fluoroquinolona",
                dose: "400mg/8-12h",
                preparation: "El fármaco se encuentra listo para ser usado. Aún así, es compatible con SSF, SG o RL.",
                appearance: "Transparente e incolora",
                administrationTime: "30 minutos",
                storage: "Mantener el producto en la caja externa hasta que vaya a ser utilizado, para protegerlo de la luz.",
                technicalSheet: "https://cima.aemps.es/cima/pdfs/es/ft/68095/FichaTecnica_68095.html.pdf"
            },
            {
                name: "Claritromicina 500 mg Liofilizado para solución para perfusión",
                presentation: "Vial 500 mg",
                type: "Macrólido",
                dose: "500mg/12h",
                preparation: "Reconstituir el vial con 10 cc de agua para inyección, girando suavemente hasta su completa disolución (hasta 5 minutos). Después, añadir a 250 cc de SSF, SG o RL.",
                appearance: "Aspecto claro",
                administrationTime: "60 minutos",
                storage: "El producto reconstituido con 10cc de agua para inyección, permanece estable 24 horas a temperatura ambiente y 48 horas en nevera. Una vez añadido a la bolsa de perfusión, es estable en 250cc de diluyente, durante 6 horas a temperatura ambiente y 48 horas en nevera.",
                technicalSheet: "https://cima.aemps.es/cima/pdfs/es/ft/60202/60202_ft.pdf"
            },
            {
                name: "Clindamicina 600 mg Solución inyectable",
                presentation: "Vial 600 mg en 4 cc",
                type: "Lincosamida",
                dose: "1,2-2,7gr/día. En 3-4 dosis",
                preparation: "Diluir el contenido del vial en SSF, SG o RL para obtener concentraciones que no sobrepasen los 12mg/ml. No administrar en bolo.",
                appearance: "Transparente e incolora",
                administrationTime: "10-60 minutos. No sobrepasar 30mg/min. Posibilidad de perfusión de mantenimiento de 0.75 a 1,25 mg/min",
                storage: "Una vez diluido, el producto es estable durante 24 horas a temperatura ambiente. No refrigerar por riesgo de cristalización.",
                technicalSheet: "https://cima.aemps.es/cima/pdfs/es/ft/63669/FT_63669.html.pdf"
            },
            {
                name: "Cloxacilina Sódica 1 gr Polvo pra solución inyectable y para perfusión",
                presentation: "Vial 1 gr",
                type: "Betalactámico",
                dose: "0,5-1gr/6-8h",
                preparation: "Reconstituir el vial con 20 cc de agua para inyección. A continuación, añadir a 100cc de SSF o SG.",
                appearance: "Solución incolora o ligeramente amarilla, límpida",
                administrationTime: "Para inyección IV directa, 3-4 minutos. Para infusión, 60 minutos.",
                storage: "El producto reconstituido con agua para inyección, permanece estable 6 horas a temperatura ambiente o 72 horas en nevera. Al añadirle SSF o SG la estabilidad es de 6 horas a temperatura ambiente y 48 horas en nevera.",
                technicalSheet: "https://cima.aemps.es/cima/pdfs/es/ft/63636/FT_63636.html.pdf"
            },
            {
                name: "Colistimetato de Sodio 1000000 UI Polvo para solución inyectable",
                presentation: "Vial 1000000 UI",
                type: "Polimixina",
                dose: "9000000-12000000 UI/día. En 2-3 dosis",
                preparation: "Reconstituir con no más de 10 cc de SSF o agua para inyección. Después, añadir en 50 cc de SSF.",
                appearance: "Límpida y amarilla, o ligeramente amarillenta",
                administrationTime: "30-60 minutos",
                storage: "Una vez reconstituido, es estable 24 horas en nevera a concentraciones >80000 UI/ml. Para concentraciones menores, utilizar inmediatamente.",
                technicalSheet: "https://cima.aemps.es/cima/pdfs/es/ft/74156/FichaTecnica_74156.html.pdf"
            },
        ],
    D:[
        {
            name: "Daptomicina 500 mg Polvo para solución inyectable y para perfusión",
            presentation: "Vial 500 mg",
            type: "Lipopeptídico",
            dose: "4-6 mg/kg cada 24 horas",
            preparation: "Reconstituir con 10 ml de agua para inyección. Posteriormente, diluir en 50 ml de SSF o SG5%.",
            appearance: "Transparente.",
            administrationTime: "Para inyección IV directa, diluir en 10 cc de SSF, y administrar en 2 minutos. Para infusión, en 30 minutos.",
            storage: "Los viales se conservan en nevera. El producto reconstituido, es estable durante 12 horas a temperatura ambiente y 48 horas en nevera. Una vez añadido a la bolsa de perfusión, es estable durante 12 horas a temperatura ambiente y 24 horas en nevera.",
            technicalSheet: "https://cima.aemps.es/cima/pdfs/es/ft/83057/FT_83057.html.pdf"
        },
        {
            name: "Doxiciclina 100 mg Solución inyectable y para perfusión",
            presentation: "Ampolla de 100 mg en 5 cc",
            type: "Tetraciclina",
            dose: "100-20 mg/día. En una o dos dosis",
            preparation: "El fármaco se puede añadir a SSF o SG.",
            appearance: "Transparente, de color amarillo parduzco.",
            administrationTime: "Para inyección IV directa, no menos de 2 minutos (no recomendado). Para infusión, 60 minutos.",
            storage: "Conservar en nevera antes de abrir. Una vez diluido, utilizar inmediatamente.",
            technicalSheet: "https://cima.aemps.es/cima/pdfs/es/ft/50521/FichaTecnica_50521.html.pdf"
        }, 
        ],
    E: [
        {
            name: "Eritromicina 1 gr Polvo para solución para perfusión",
            presentation: "Vial 1 gr",
            type: "Macrólido",
            dose: "15-20 mg/kg/día. Máximo 4gr/día",
            preparation: "Reconstituir el vial con 20 cc de agua para inyección. A continuación, añadir a SSF o RL, a una concentración de 1-5 mg/ml. No utilizar menos de 10 cc de diluyente.",
            appearance: "Transparente e incoloro.",
            administrationTime: "60 minutos",
            storage: "El producto reconstituido, es estable durante 24 horas a temperatura ambiente y 2 semanas en nevera. Una vez añadido a la bolsa de perfusión, debe infundirse por completo en un plazo de 8 horas, ya que no es apta para conservación.",
            technicalSheet: "https://cima.aemps.es/cima/pdfs/es/ft/55771/FT_55771.html.pdf"
        },
        {
            name: "Ertapenem 1 g Polvo para solución inyectable",
            presentation: "Vial 1 g",
            type: "Derivados del Carbapenem",
            dose: "1 gr/24h",
            preparation: "Reconstituir el vial con 10 cc de SSF o agua para inyección. Después, añadir a 50 cc de SSF.",
            appearance: "De incolora a amarillo pálido.",
            administrationTime: "30 minutos",
            storage: "El producto reconstituido, debe diluirse inmediatamente. Una vez diluido, es estable 6 horas a temperatura ambiente o 24 horas en nevera. Una vez se saca de la nevera, usar antes de 4 horas.",
            technicalSheet: "https://www.ema.europa.eu/es/documents/product-information/invanz-epar-product-information_es.pdf"
        },
        ],
    F:[
        {
            name: "Fluconazol 200 mg Solución para perfusión",
            presentation: "Frasco 200 mg en 100 ml",
            type: "Antimicótico triazólico",
            dose: "Dosis de carga de hasta 800mg/día. 50-400 mg/día",
            preparation: "El fármaco se encuentra listo para ser usado. Aún así, es compatible con SSF, SG o RL.",
            appearance: "Transparente e incolora.",
            administrationTime: "Máximo en 10 minutos.",
            storage: "Conservar a temperatura ambienta hasta su uso.",
            technicalSheet: "https://cima.aemps.es/cima/pdfs/es/ft/71461/71461_ft.pdf"
        },
        {
            name: "Fosfomicina 1 gr Polvo y diluyente para solución para perfusión",
            presentation: "Vial 1 gr",
            type: "Antibiótico fosfónico",
            dose: "No se deben superar los 8gr/día. Según gravedad, hasta 24 gr/día en 2-3 dosis.",
            preparation: "Reconstituir el vial con 10 cc de agua para inyección (incluido en la caja) Después, añadir a agua para inyección o SG a razón de 4 ml por cada ml de solución recopnstituida.",
            appearance: "No hay datos.",
            administrationTime: "Mínimo 15 minutos la dosis de 2 gr. Mínimo 30 minutos la dosis de 3-5 gr. Mínimo 60 minutos la dosis de 8 gr.",
            storage: "Al diluir la fosfomicina, se produce una reacción exotérmica, por lo que es posible notar aumento en la temperatura del vial. No hay datos de conservación tras reconstitución y dilución, por lo que es recomendable su inmediata administración tras prepararlo.",
            technicalSheet: "https://cima.aemps.es/cima/pdfs/es/ft/50878/FT_50878.pdf"
        },
        {
            name: "Fosfomicina 4 gr Polvo para solución para perfusión",
            presentation: "Vial 4 gr",
            type: "Antibiótico fosfónico",
            dose: "No se deben superar los 8gr/día. Según gravedad, hasta 24 gr/día en 2-3 dosis.",
            preparation: "Reconstituir el vial con 10 cc de agua para inyección (incluido en la caja) Después, añadir a agua para inyección o SG a razón de 4 ml por cada ml de solución recopnstituida.",
            appearance: "No hay datos.",
            administrationTime: "Mínimo 15 minutos la dosis de 2 gr. Mínimo 30 minutos la dosis de 3-5 gr. Mínimo 60 minutos la dosis de 8 gr.",
            storage: "Al diluir la fosfomicina, se produce una reacción exotérmica, por lo que es posible notar aumento en la temperatura del vial. No hay datos de conservación tras reconstitución y dilución, por lo que es recomendable su inmediata administración tras prepararlo.",
            technicalSheet: "https://cima.aemps.es/cima/pdfs/es/ft/50878/FT_50878.pdf"
        },
        
        ] ,
    G:[
        {
            name: "Ganciclovir 500 mg Polvo para concentrado para solución para perfusión",
            presentation: "Vial 500 mg",
            type: "Antiviral",
            dose: "5-6 mg/kg c/12-24h",
            preparation: "Reconstituir el vial con 10 cc de agua para inyección. Después añadir en 100 cc de SG, SSF o RL. No es recomendable concentraciones para perfusión de más de 10mg/ml.",
            appearance: "Transparente incolora.",
            administrationTime: "60 minutos.",
            storage: "El producto reconstituido, es estable 12 horas a temperatura ambiente. No refrigerar ni congelar el producto reconstituido. Una vez diluido, es estable 24 horas en nevera.",
            technicalSheet: "https://cima.aemps.es/cima/pdfs/es/ft/84368/FT_84368.html.pdf"
        },
        {
            name: "Gentamicina 40 mg Solución inyectable y para perfusión",
            presentation: "Ampolla 40 mg/ml",
            type: "Aminoglucósido",
            dose: "3-6 mg/kg/día",
            preparation: "Añadir el contenido del vial a 50-200 cc de SSF, SG o RL. No superar 1 mg/ml de concentración.",
            appearance: "Transparente, incolora o ligeramente amarilla, límpida.",
            administrationTime: "330-120 minutos",
            storage: "Una vez diluido, el producto es estable durante 24 horas a temperatura ambiente. ",
            technicalSheet: "https://cima.aemps.es/cima/pdfs/es/ft/51885/FT_51885.html.pdf"
        },
        {
            name: "Gentamicina 80 mg Solución inyectable y para perfusión",
            presentation: "Ampolla 80 mg/2 ml",
            type: "Aminoglucósido",
            dose: "3-6 mg/kg/día",
            preparation: "Añadir el contenido del vial a 50-200 cc de SSF, SG o RL. No superar 1 mg/ml de concentración.",
            appearance: "Transparente, incolora o ligeramente amarilla, límpida.",
            administrationTime: "330-120 minutos",
            storage: "Una vez diluido, el producto es estable durante 24 horas a temperatura ambiente. ",
            technicalSheet: "https://cima.aemps.es/cima/pdfs/es/ft/51885/FT_51885.html.pdf"
        },        
        ], 
    I:[
        {
            name: "Imipenem 500 mg / Cilastina 500 mg Polvo para solución para perfusión",
            presentation: "Vial 500 mg / 500 mg",
            type: "Derivados del Carbapenem",
            dose: "500mg/6h o 1000mg/6-8h",
            preparation: "Añadir 10 cc de SSF o SG al vial y agitar hasta homogeneizar. Después añadir la mezcla a 100 cc de SSF o SG.",
            appearance: "Transparente, desde incolora a amarilla.",
            administrationTime: "20-30 minutos (<500 mg) o 40-60 minutos (>500 mg)",
            storage: "Conservar el vial en la caja antes de abrir, para protegerlo de la luz. Una vez reconstituido/diluido, usar inmediatamente.",
            technicalSheet: "https://cima.aemps.es/cima/pdfs/es/ft/71285/FichaTecnica_71285.html.pdf"
        },        
        ],

    L:[
        {
            name: "Levofloxacino 500 mg Solución para perfusión",
            presentation: "Frasco 500 mg en 100 ml",
            type: "Fluoroquinolona",
            dose: "500 mg/12-24h",
            preparation: "El fármaco se encuentra listo para ser usado. Aún así, es compatible con SSF o SG.",
            appearance: "Amarillenta a verde-amarillenta.",
            administrationTime: "60 minutos",
            storage: "No es necesaria la protección de la luz durante la perfusión.",
            technicalSheet: "https://cima.aemps.es/cima/pdfs/es/ft/72160/FichaTecnica_72160.html.pdf"
        },
        {
            name: "Linezolid 600 mg Solución para perfusión",
            presentation: "Frasco 600 mg en 300 ml",
            type: "Oxazolidinona",
            dose: "600 mg/12h",
            preparation: "El fármaco se encuentra listo para ser usado. Aún asi, es compatible con SSF, SG o RL.",
            appearance: "Transparente, de incolora a amarillenta.",
            administrationTime: "30-120 minutos",
            storage: "El fármaco es estable en uso durante 24 horas a temperatura ambiente o en nevera.",
            technicalSheet: "https://cima.aemps.es/cima/pdfs/es/ft/79295/79295_ft.pdf"
        },
        ],
    M: [
        {
            name: "Meropenem 1000 mg Polvo para solución inyectable y para perfusión",
            presentation: "Vial 1000 mg",
            type: "Derivados del Carbapenem",
            dose: "500-2000mg/8h",
            preparation: "Reconstituir el vial con agua para inyecciones, SSF o SG. Para administración en bolo usar agua para inyección a concentración de no más de 50 mg/ml. Para infusión IV, usar SSF o SG en concentraciones de 1 a 20 mg/ml.",
            appearance: "Transparente incolora o ligeramente amarillenta.",
            administrationTime: "Para inyección IV directa, 5 minutos (dosis de hasta 20 mg/kg). Para infusión, 15-30 minutos.",
            storage: "El producto reconstituido , permanece estable 3 horas a temperatura ambiente u 8 horas en nevera. Una vez diluido en SSF la estabilidad es de 6 horas a temperatura ambiente y 12 horas en nevera. Si lo diluimos en SG, hay que usarlo inmediatamente, es decir, en 30 minutos.",
            technicalSheet: "https://cima.aemps.es/cima/pdfs/es/ft/81049/FT_81049.html.pdf"
        },
        {
            name: "Metronidazol 500mg Solución para perfusión",
            presentation: "Frasco 500 mg en 100 ml",
            type: "Nitroimidazol",
            dose: "500 mg/8h",
            preparation: "El fármaco se encuentra listo para ser usado. Aún asi, es compatible con SSF o SG.",
            appearance: "Límpida, incolora o ligeramente amarillenta",
            administrationTime: "20-60 minutos",
            storage: "Si se diluye, el fármaco es estable durante 24 horas en nevera.",
            technicalSheet: "https://cima.aemps.es/cima/pdfs/es/ft/59662/FichaTecnica_59662.ht.pdf"
        },
        {
            name: "Micafungina 50 mg Polvo para concentrado para solución para perfusión",
            presentation: "Vial 50 mg",
            type: "Antimicótico equinocandina",
            dose: "50-200 mg/día",
            preparation: "Reconstituir el vial con 5 cc de SSF o SG, de forma lenta, hacia la pared del vial y girando suavemente (sin agitar). Después añadir a 100 cc del mismo diluyente usado.",
            appearance: "Transparente",
            administrationTime: "60 minutos",
            storage: "El producto reconstituido, permanece estable 48 horas a temperatura ambiente o 24 horas en nevera. Tras diluirlo, la estabilidad es de 96 horas a temperatura ambiente y 48 horas en nevera.",
            technicalSheet: "https://cima.aemps.es/cima/pdfs/es/ft/86144/86144_ft.pdf"
        },    
    ],
    O:[
        {
            name: "Oritavancina 400 mg Polvo para concentrado para solución para perfusión",
            presentation: "Vial 400 mg",
            type: "Glicopéptido",
            dose: "1200 mg/día",
            preparation: "Reconstituir el vial con 40 cc de agua para inyección. Posteriormente, añadir a bolsa de 1000 cc SG5%.",
            appearance: "No hay datos.",
            administrationTime: "3 horas",
            storage: "El producto reconstituido, debe añadirse inmediatamente a la bolsa de 1000 cc de SG5%. Una vez diluido, es estable 12 horas a temperatura ambiente y 24 horas en nevera.",
            technicalSheet: "https://cima.aemps.es/cima/pdfs/es/ft/115989001/FT_115989001.html.pdf"
        },
    ],
    P:[
        {
            name: "Piperacilina Sódica 4 gr / Tazobactam 0,5 gr Polvo para solución para perfusión",
            presentation: "Vial 4 gr / 0,5 gr",
            type: "Betalactámico",
            dose: "4 gr/6-8h",
            preparation: "Reconstituir el vial con 20 cc de agua para inyección o SSF, agitando con movimientos rotatorios (si lo hacemos constantemente, se reconstituye en 5-10 minutos). Posteriormente, añadir a 50-150cc de SSF o SG.",
            appearance: "Transparente.",
            administrationTime: "30 minutos",
            storage: "El producto reconstituido/diluido es estable durante 24 horas en nevera.",
            technicalSheet: "https://cima.aemps.es/cima/pdfs/es/ft/71601/FichaTecnica_71601.html.pdf"
        },
    ],
    R:[        
        {
            name: "Remdesivir 100 mg Polvo para concentrado para solución para perfusión",
            presentation: "Vial 100 mg",
            type: "Antiviral",
            dose: "200 mg (1º día). Después, 100mg/24h",
            preparation: "Reconstituir el vial con 19 cc de agua para inyecciones, agitando durante 30 segundos. Posteriormente, dejar que el contenido se asiente durante 2-3 minutos. Por último, añadir el contenido a 250 cc de SSF (extrayendo previamente el volumen que vamos a introducir). Debemos invertir la bolsa 20 veces, sin agitar, para que se mezcle bien. Al finalizar, lavar vía con 30 cc de SSF.",
            appearance: "Transparente.",
            administrationTime: "30-120 minutos",
            storage: "El producto reconstituido debe diluirse inmediatamente. Una vez diluido, permanece estable 24 a temperatura ambiente y 48 horas en nevera.",
            technicalSheet: "https://cima.aemps.es/cima/dochtml/ft/1201459002/FT_1201459002.html"
        },
        {
            name: "Rifampicina 600 mg Polvo y disolvente para solución para perfusión",
            presentation: "Vial 600 mg",
            type: "Antibacteriano",
            dose: "600 mg/24h o 900-1200 mg/12h",
            preparation: "Reconstituir el vial con 10 cc de agua para inyección (presente en la caja), rodando entre las manos hasta la completa disolución, obteniendo una concentración de 60 mg/ml. Posteriormente, añadir a 250-500 de SSF o SG. También se podría añadir a 100 cc.",
            appearance: "No hay datos.",
            administrationTime: "30 minutos (diluido en 100 cc) o 60-180 minutos (diluido en 250-500cc)",
            storage: "El producto reconstituido, es estable durante 30 horas a temperatura ambiente y 24 horas en nevera. Una vez diluido, es estable durante 6 horas a temperatura ambiente en SSF, durante 8 horas a temperatura ambiente en SG; y, durante 24 horas en nevera en ambos diluyentes.",
            technicalSheet: "https://cima.aemps.es/cima/pdfs/es/ft/56487/FichaTecnica_56487.html.pdf"
        },    
        ],
    S:[
        {
            name: "Sotrovimab 500 mg Concentrado para solución para perfusión",
            presentation: "Vial 500 mg en 8 ml",
            type: "Antiviral",
            dose: "500 mg (dosis única)",
            preparation: "Atemperar el vial durante 15 minutos. Añadir los 8 cc de fármaco a una bolsa de 50 o 100 cc de SF o SG, extrayendo previamente de la misma el mismo volumen de suero. Evitar formación de burbujas de aire (mover suavemente)",
            appearance: "No hay datos.",
            administrationTime: "15 minutos (diluido en 50 cc) o 30 minutos (diluido en 100 cc)",
            storage: "Conservar en nevera antes de abrir. Conservar en su embalaje original para protegerlo de la luz. Una vez diluido, es estable durante 6 horas a temperatura ambiente y 24 horas en nevera.",
            technicalSheet: "https://cima.aemps.es/cima/pdfs/es/ft/54920/FichaTecnica_54920.html.pdf"
        },
        {
            name: "Sulfametoxazol 800mg/Trimetoprima 160mg Polvo y solución para solución inyectable",
            presentation: "Vial 800 mg y Ampolla 160 mg en 5 ml",
            type: "Sulfonamida",
            dose: "160/800-320/1600 cada 6-12h",
            preparation: "Añadir el contenido de la ampolla (Trimetoprima) al vial (Sulfametoxazol). Una vez mezclado, añadir el contenido a una bolsa de SSF, SGS o SG a razón de 1 ml del concentrado en 50 ml del diluyente, es decir, una dosis de 800/160ml, se añadiría a 250 ml de diluyente.",
            appearance: "Límpida y ligeramente amarillenta",
            administrationTime: "60-90 minutos",
            storage: "El producto reconstituido, es estable durante 24 horas a temperatura ambiente. Una vez diluido,  permanece estable durante 6 horas a temperatura ambiente.",
            technicalSheet: "https://cima.aemps.es/cima/pdfs/es/ft/54920/FichaTecnica_54920.html.pdf"
        }
    ],
    T:[
        {
            name: "Teicoplanina 400 mg Polvo para solución inyectable y para perfusión",
            presentation: "Vial 400 mg",
            type: "Glicopéptido",
            dose: "6-12 mg/kg/día",
            preparation: "Reconstituir el vial con 3 cc de agua para inyección, inyectándola lentamente y girando el vial de forma suave hasta que el polvo este disuelto. Si se genera espuma, debemos dejar el concentrado 15 minutos en reposo. Posteriormente, añadir a SF, SG, SGS o RL.",
            appearance: "Transparente y amarillenta",
            administrationTime: "Para inyección IV directa, en 3 cc, 3-5 minutos. Para infusión, 30 minutos.",
            storage: "El producto reconstituido/diluido, es estable durante 24 horas en nevera. ",
            technicalSheet: "https://cima.aemps.es/cima/pdfs/es/ft/78751/FichaTecnica_78751.html.pdf"
        },
        {
            name: "Tigeciclina 50 mg Polvo para solución para perfusión",
            presentation: "Vial 50 mg",
            type: "Tetraciclina",
            dose: "100 mg (1º día). Después, 50 mg/12h",
            preparation: "Reconstituir el vial con 5,3 cc de SSF, SG o RL. Agitar suavemente hasta que se disuelva por completo. Añadir 5 cc del concentrado (porque el vial tiene un exceso de dosis del 6%) a 100 cc de SSF, SG o RL.",
            appearance: "Color amarillo a naranja.",
            administrationTime: "30-60 minutos",
            storage: "El producto reconstituido/diluido, debe ser usado inmediatamente.",
            technicalSheet: "https://cima.aemps.es/cima/dochtml/p/84846/P_84846.html"
        },
        {
            name: "Tobramicina 100 mg Solución inyectable",
            presentation: "Vial 100 mg en 2 ml",
            type: "Aminoglucósido",
            dose: "3-5 mg/kg/día en 3-4 dosis",
            preparation: "Añadir el contenido del vial en 50-100 cc de SSF o SG.",
            appearance: "Incolora o ligeramente amarilla, transparente y límpida.",
            administrationTime: "20-60 minutos",
            storage: "No hay datos de conservación del producto diluido, por lo que se recomienda usar inmediatamente.",
            technicalSheet: "https://cima.aemps.es/cima/pdfs/es/ft/65261/FichaTecnica_65261.html.pdf"
        }, 
    ],
    V:[
        {
            name: "Vancomicina 500 mg Polvo para concentrado para solución para perfusión",
            presentation: "Vial 500 mg",
            type: "Glicopéptido",
            dose: "15-20 mg/kg cada 8-12h",
            preparation: "Reconstituir el vial con 10 cc de agua para inyección, obteniendo una concentración de 50 mg/ml. Después, añadir en 100cc de SSF, SG o RL.",
            appearance: "Transparente",
            administrationTime: "60 minutos",
            storage: "Conservar protegido de la luz antes de usar. El producto reconstituido, es estable durante 14 días en nevera si el diluyente es SSF o SG; y 96 horas en nevera si el diluyente es RL.",
            technicalSheet: "https://cima.aemps.es/cima/pdfs/es/ft/67282/FichaTecnica_67282.html.pdf"
        },
        {
            name: "Voriconazol 200 mg Polvo para solución para perfusión",
            presentation: "Vial 200 mg",
            type: "Antimicótico triazólico",
            dose: "6 mg/kg cada 12h(1º día). Después, 4 mg/kg cada 12h",
            preparation: "Reconstituir el vial con 19 cc de agua para inyección o SSF, obteniendo una concentración de 10 mg/ml. Posteriormente, añadir a volumen de SSF o SG para obtener concentraciones de 0,5-5 mg/ml (40 - 400 ml en total)",
            appearance: "Transparente",
            administrationTime: "60-180 minutos",
            storage: "El producto diluido, es estable durante 24 horas en nevera.",
            technicalSheet: "https://cima.aemps.es/cima/pdfs/es/ft/80941/80941_ft.pdf"
        },        
    ],
    Z:[
        {
            name: "Zidovudina 200 mg Solución para perfusión",
            presentation: "Vial 200 mg en 100 ml",
            type: "Antiviral",
            dose: "1-3 mg/kg cada 4 horas",
            preparation: "El producto se encuentra listo para usar.",
            appearance: "Límpida y casi incolora",
            administrationTime: "60 minutos",
            storage: "60 minutos",
            technicalSheet: "https://cima.aemps.es/cima/pdfs/es/ft/69184/FichaTecnica_69184.html.pdf"
        },
    ], 
};



    

    // Generar dinámicamente las letras del abecedario
    Object.keys(antibiotics).forEach((letter) => {
        const li = document.createElement("li");
        li.textContent = letter;
        li.className = "alphabet-item";
        alphabetList.appendChild(li);
    });

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
            <h2>Antibióticos que empiezan con ${letter}</h2>
            <ul>${list}</ul>
        `;

        addClickEventsToAntibiotics();
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
                <th><img src="imagenes/03_dosis.png" alt="Icono de dosis">Dosis</th>
                <td>${antibiotic.dose || "N/A"}</td>
            </tr>
            <tr>
                <th><img src="imagenes/04_preparacion.png" alt="Icono de preparación">Preparación</th>
                <td>${antibiotic.preparation || "N/A"}</td>
            </tr>
            <tr>
                <th><img src="imagenes/05_aspecto.png" alt="Icono de aspecto">Aspecto</th>
                <td>${antibiotic.appearance || "N/A"}</td>
            </tr>
            <tr>
                <th><img src="imagenes/06_tiempo.png" alt="Icono de tiempo">Tiempo de administración</th>
                <td>${antibiotic.administrationTime || "N/A"}</td>
            </tr>
            <tr>
                <th><img src="imagenes/07_conservacion.png" alt="Icono de conservación">Conservación</th>
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
}

    // Asignar eventos a los antibióticos
    function addClickEventsToAntibiotics() {
        const antibioticItems = document.querySelectorAll(".antibiotic-item");
        antibioticItems.forEach((item) => {
            item.addEventListener("click", () => {
                const selectedAntibiotic = item.getAttribute("data-name");
                displayDetails(selectedAntibiotic);
            });
        });
    }

    // Evento: Clic en una letra del abecedario
    alphabetList.addEventListener("click", function (event) {
        if (event.target.tagName === "LI") {
            const letter = event.target.textContent;
            displayAntibiotics(letter);
            sidebar.style.display = "none"; // Ocultar sidebar
            mainButtonContainer.style.display = "flex"; // Mostrar botón "Ir al Inicio"
        }
    });


// Detectar búsqueda en la barra de búsqueda
searchBar.addEventListener("keypress", function (event) {
    if (event.key === "Enter" && searchBar.value.trim() !== "") {
        const query = searchBar.value.trim().toLowerCase();
        displaySearchResults(query); // Mostrar los resultados de la búsqueda
        sidebar.style.display = "none"; // Ocultar el sidebar
        mainButtonContainer.style.display = "flex"; // Mostrar el botón "Ir al Inicio"
    }
});
    // Búsqueda dinámica de antibióticos
    searchBar.addEventListener("input", function () {
        const query = this.value.toLowerCase();
        const allAntibiotics = Object.values(antibiotics).flat();
        const filteredAntibiotics = allAntibiotics.filter((atb) =>
            atb.name.toLowerCase().includes(query)
        );

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

            addClickEventsToAntibiotics();
        }
    });

    // Evento: Volver al inicio
   mainButtonContainer.addEventListener("click", function () {
    sidebar.style.display = "block"; // Mostrar el sidebar
    mainButtonContainer.style.display = "none"; // Ocultar el botón "Ir al Inicio"
    searchResults.style.display = "none"; // Ocultar los resultados de búsqueda
    antibioticInfo.innerHTML = `<p>Seleccione un antibiótico para ver los detalles.</p>`; // Reiniciar el contenido del área de detalles
});
function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}

document.getElementById('alphabet-list').addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        hideSidebar();
    }
});

document.getElementById('seek-bar').addEventListener('keypress', (event) => {
    if (event.key === 'Enter' && event.target.value.trim() !== '') {
        hideSidebar();
    }
});

});
