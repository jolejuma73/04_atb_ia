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
            },
            {
                name: "Amoxicilina 1 g / Ac. clavulánico 200 mg",
                presentation: "Vial para solución inyectable",
                type: "Penicilina",
                dose: "1 g cada 8 horas",
                preparation: "Diluir en 10 ml de agua para inyección",
                appearance: "Solución clara",
                administrationTime: "Administrar durante 30 minutos",
                storage: "Conservar a temperatura ambiente",
                technicalSheet: "https://cima.aemps.es/cima/pdfs/es/ft/57013/FT_57013.pdf"
            },
            {
                name: "Amoxicilina 2 g / Ac. clavulánico 200 mg",
                presentation: "Vial para solución inyectable",
                type: "Penicilina",
                dose: "2 g cada 12 horas",
                preparation: "Diluir en 20 ml de agua para inyección",
                appearance: "Solución clara",
                administrationTime: "Administrar durante 30 minutos",
                storage: "Conservar a temperatura ambiente",
                technicalSheet: "https://cima.aemps.es/cima/pdfs/es/ft/65679/FichaTecnica_65679.html.pdf"
            },
            {
                name: "Ampicilina 1 gr Polvo y disolvente para solución inyectable y para perfusión",
                presentation: "Vial 1 gr",
                type: "Penicilina",
                dose: "1 g cada 6 horas",
                preparation: "Reconstituir con 10 ml de agua para inyección. Diluir posteriormente en 50 ml de SSF o SG5%.",
                appearance: "Solución clara.",
                administrationTime: "Administrar en bolo lento o perfusión durante 30 minutos.",
                storage: "Conservar a temperatura ambiente. Usar dentro de las 24 horas tras la reconstitución.",
                technicalSheet: "https://cima.aemps.es/cima/pdfs/es/ft/64567/FT_64567.pdf"
            },              
            {
                name: "Anfotericina B 50 mg (Ambisome) Polvo para dispersión para perfusión",
                presentation: "Vial 50 mg",
                type: "Antifúngico",
                dose: "1-5 mg/kg/día",
                preparation: "Reconstituir con 10 ml de agua para inyección. Diluir en 5% SG.",
                appearance: "Suspensión amarillenta.",
                administrationTime: "Infusión de 2 horas.",
                storage: "Una vez reconstituido, conservar en refrigeración (2-8°C).",
                technicalSheet: "https://cima.aemps.es/cima/pdfs/es/ft/56789/FT_56789.pdf"
            },
            {
                name: "Anidulafungina 100 mg Polvo para concentrado para solución para perfusión",
                presentation: "Vial 100 mg",
                type: "Antifúngico",
                dose: "100-200 mg/día",
                preparation: "Diluir en 30 ml de SSF y luego en 250 ml de SG5%.",
                appearance: "Solución clara e incolora.",
                administrationTime: "Administrar en 90 minutos.",
                storage: "Conservar entre 2-8°C.",
                technicalSheet: "https://cima.aemps.es/cima/pdfs/es/ft/67890/FT_67890.pdf"
            },
            {
                name: "Azitromicina 500 mg Polvo para solución para perfusión",
                presentation: "Vial 500 mg",
                type: "Macrólido",
                dose: "500 mg cada 24 horas",
                preparation: "Diluir en 4.8 ml de agua para inyección y luego en 500 ml de SG5%.",
                appearance: "Solución clara.",
                administrationTime: "Administrar en 1-3 horas.",
                storage: "Conservar a temperatura ambiente.",
                technicalSheet: "https://cima.aemps.es/cima/pdfs/es/ft/54321/FT_54321.pdf"
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
                name: "Ceftazidima 2 gr / Avibactam 0,5 gr Polvo para concentrado para solución para perfusión",
                presentation: "Vial 2gr/0.5gr",
                type: "Cefalosporina 3ª generación",
                dose: "2gr/8h",
                preparation: "Se recomienda reconstituir el vial con 10 cc de agua para inyección. Después añadir el concentrado a 50-250 cc de SSF, SG o RL.",
                appearance: "Amarillo pálido",
                administrationTime: "120 minutos",
                storage: "El producto reconstituido debe diluirse inmediatamente. Una vez diluido, si la concentración es de 8mg/ml, permanece estable 12 horas en nevera y, 4 horas a menos de 25º. Para concentraciones entre 8mg/ml y 40mg/ml, el producto permanece estable 4 horas a temperatura ambiente.",
                technicalSheet: "https://cima.aemps.es/cima/pdfs/es/ft/1161109001/ft_1161109001.html.pdf"
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
                technicalSheet: "https://cima.aemps.es/cima/pdfs/es/ft/1151032001/FT_1151032001.html.pdf"
            },
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
            },
            {
                name: "Ceftriaxona 2 gr Polvo para solución para perfusión",
                presentation: "Vial 2 gr",
                type: "Cefalosporina",
                dose: "1-4gr/24h",
                preparation: "Reconstituir el vial con 10 cc de SSF, SG o agua para inyecciones. Añadir después, en, al menos, 40 cc de SSF, SG o agua para inyección.",
                appearance: "Límpida y amarilla, o ligeramente amarillenta",
                administrationTime: "30 minutos",
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
            appearance: "Solución clara a ligeramente amarilla.",
            administrationTime: "30 minutos",
            storage: "Conservar en refrigeración (2°C - 8°C). Una vez reconstituido, usar dentro de las 48 horas.",
            technicalSheet: "https://cima.aemps.es/cima/pdfs/es/ft/67485/FT_67485.pdf"
        },
        {
            name: "Doxiciclina 100 mg Solución inyectable y para perfusión",
            presentation: "Vial 100 mg",
            type: "Tetraciclina",
            dose: "200 mg el primer día, seguido de 100-200 mg al día",
            preparation: "Diluir en 100 ml de SSF o SG5%.",
            appearance: "Solución amarillenta.",
            administrationTime: "1-2 horas",
            storage: "Conservar a temperatura inferior a 25°C. Una vez reconstituido, usar dentro de las 24 horas.",
            technicalSheet: "https://cima.aemps.es/cima/pdfs/es/ft/67534/FT_67534.pdf"
        }, 
        ],
    E: [
        {
            name: "Eritromicina 1 gr Polvo para solución para perfusión",
            presentation: "Vial 1 gr",
            type: "Macrólido",
            dose: "1 gr cada 6-8 horas",
            preparation: "Reconstituir el vial con 20 ml de agua para inyección. Posteriormente, diluir en 250 ml de SSF o SG5%.",
            appearance: "Solución clara e incolora.",
            administrationTime: "30-60 minutos",
            storage: "Conservar a temperatura ambiente. Una vez reconstituido, usar dentro de las 24 horas.",
            technicalSheet: "https://cima.aemps.es/cima/pdfs/es/ft/64302/FT_64302.pdf"
        },
        {
            name: "Ertapenem 1 g Polvo para solución inyectable",
            presentation: "Vial 1 g",
            type: "Carbapenem",
            dose: "1 g cada 24 horas",
            preparation: "Diluir en 10 ml de agua para inyección o SSF.",
            appearance: "Solución clara.",
            administrationTime: "Administrar durante 30 minutos.",
            storage: "Conservar entre 2°C y 8°C una vez reconstituido.",
            technicalSheet: "https://cima.aemps.es/cima/pdfs/es/ft/66745/FT_66745.pdf"
        },
        ],
    F:[
        {
            name: "Fluconazol 200 mg Solución para perfusión",
            presentation: "Frasco 200 mg en 100 ml",
            type: "Antifúngico",
            dose: "200-400 mg al día",
            preparation: "Listo para usar. No requiere dilución adicional.",
            appearance: "Solución clara e incolora.",
            administrationTime: "1-2 horas",
            storage: "Conservar a temperatura ambiente (15-30°C). Proteger de la luz.",
            technicalSheet: "https://cima.aemps.es/cima/pdfs/es/ft/65890/FT_65890.pdf"
        },
        {
            name: "Fosfomicina 1 gr Polvo y diluyente para solución para perfusión",
            presentation: "Vial 1 gr",
            type: "Antibacteriano de amplio espectro",
            dose: "2-4 g cada 6-8 horas",
            preparation: "Reconstituir con el diluyente proporcionado (10 ml de agua para inyección) y añadir a 50 ml de SSF o SG5%.",
            appearance: "Solución clara e incolora.",
            administrationTime: "30-60 minutos",
            storage: "Conservar a temperatura ambiente. Una vez reconstituido, usar dentro de las 24 horas.",
            technicalSheet: "https://cima.aemps.es/cima/pdfs/es/ft/123456/FT_123456.pdf"
        },
        {
            name: "Fosfomicina 4 gr Polvo para solución para perfusión",
            presentation: "Vial 4 gr",
            type: "Antibacteriano de amplio espectro",
            dose: "4-8 g cada 8-12 horas",
            preparation: "Reconstituir con 20 ml de agua para inyección y diluir en 100 ml de SSF o SG5%.",
            appearance: "Solución clara e incolora.",
            administrationTime: "1-2 horas",
            storage: "Conservar a temperatura ambiente. Una vez reconstituido, usar dentro de las 24 horas.",
            technicalSheet: "https://cima.aemps.es/cima/pdfs/es/ft/654321/FT_654321.pdf"
        },
        
        ] ,
    G:[
        {
            name: "Ganciclovir 500 mg Polvo para concentrado para solución para perfusión",
            presentation: "Vial 500 mg",
            type: "Antiviral",
            dose: "5 mg/kg cada 12 horas",
            preparation: "Reconstituir el vial con 10 ml de agua para inyección. Posteriormente, diluir en 100 ml de SSF o SG5%.",
            appearance: "Solución clara e incolora.",
            administrationTime: "1 hora",
            storage: "Conservar en nevera (2-8°C). Una vez reconstituido, usar dentro de las 24 horas.",
            technicalSheet: "https://cima.aemps.es/cima/pdfs/es/ft/70123/FT_70123.pdf"
        },
        {
            name: "Gentamicina 40 mg Solución inyectable y para perfusión",
            presentation: "Ampolla 40 mg/ml",
            type: "Aminoglucósido",
            dose: "3-5 mg/kg/día, en 2-3 dosis",
            preparation: "Diluir en 100 ml de SSF o SG5% para administración por perfusión.",
            appearance: "Solución clara e incolora.",
            administrationTime: "30-60 minutos",
            storage: "Conservar a temperatura ambiente. Proteger de la luz.",
            technicalSheet: "https://cima.aemps.es/cima/pdfs/es/ft/12345/FT_12345.pdf"
        },
        {
            name: "Gentamicina 80 mg Solución inyectable y para perfusión",
            presentation: "Ampolla 80 mg/2 ml",
            type: "Aminoglucósido",
            dose: "3-5 mg/kg/día, en 2-3 dosis",
            preparation: "Diluir en 100 ml de SSF o SG5% para administración por perfusión.",
            appearance: "Solución clara e incolora.",
            administrationTime: "30-60 minutos",
            storage: "Conservar a temperatura ambiente. Proteger de la luz.",
            technicalSheet: "https://cima.aemps.es/cima/pdfs/es/ft/67890/FT_67890.pdf"
        },        
        ], 
    I:[
        {
            name: "Imipenem 500 mg / Cilastina 500 mg Polvo para solución para perfusión",
            presentation: "Vial 500 mg / 500 mg",
            type: "Carbapenem + Inhibidor de betalactamasa",
            dose: "500 mg/500 mg cada 6-8 horas",
            preparation: "Reconstituir con 100 ml de SSF o SG5%. Agitar suavemente hasta disolución completa.",
            appearance: "Solución clara a ligeramente amarilla.",
            administrationTime: "20-30 minutos",
            storage: "Conservar en nevera (2-8°C). Una vez reconstituido, usar dentro de las 4 horas a temperatura ambiente.",
            technicalSheet: "https://cima.aemps.es/cima/pdfs/es/ft/72045/FT_72045.pdf"
        },        
        ],

    L:[
        {
            name: "Levofloxacino 500 mg Solución para perfusión",
            presentation: "Frasco 500 mg en 100 ml",
            type: "Fluoroquinolona",
            dose: "500-750 mg cada 24 horas",
            preparation: "Listo para usar. No requiere dilución adicional.",
            appearance: "Solución clara e incolora.",
            administrationTime: "30-60 minutos",
            storage: "Conservar a temperatura inferior a 25°C. Proteger de la luz.",
            technicalSheet: "https://cima.aemps.es/cima/pdfs/es/ft/76012/FT_76012.pdf"
        },
        {
            name: "Linezolid 600 mg Solución para perfusión",
            presentation: "Frasco 600 mg en 300 ml",
            type: "Oxazolidinona",
            dose: "600 mg cada 12 horas",
            preparation: "Listo para usar. No requiere dilución adicional.",
            appearance: "Solución clara e incolora.",
            administrationTime: "30-120 minutos",
            storage: "Conservar entre 15-25°C. Proteger de la luz. No refrigerar.",
            technicalSheet: "https://cima.aemps.es/cima/pdfs/es/ft/81034/FT_81034.pdf"
        },
        ],
    M: [
        {
            name: "Meropenem 1000 mg Polvo para solución inyectable y para perfusión",
            presentation: "Vial 1000 mg",
            type: "Carbapenem",
            dose: "1-2 g cada 8 horas",
            preparation: "Reconstituir con 20 ml de agua para inyección. Posteriormente, diluir en 100 ml de SSF o SG5%.",
            appearance: "Solución clara a ligeramente amarilla.",
            administrationTime: "15-30 minutos",
            storage: "Conservar en nevera (2-8°C). Una vez reconstituido, usar dentro de 6 horas a temperatura ambiente o 24 horas en refrigeración.",
            technicalSheet: "https://cima.aemps.es/cima/pdfs/es/ft/70156/FT_70156.pdf"
        },
        {
            name: "Metronidazol 500mg Solución para perfusión",
            presentation: "Frasco 500 mg en 100 ml",
            type: "Antiparasitario/Antibacteriano",
            dose: "500 mg cada 8 horas",
            preparation: "Listo para usar. No requiere dilución adicional.",
            appearance: "Solución clara e incolora.",
            administrationTime: "30-60 minutos",
            storage: "Conservar a temperatura inferior a 25°C.",
            technicalSheet: "https://cima.aemps.es/cima/pdfs/es/ft/67022/FT_67022.pdf"
        },
        {
            name: "Micafungina 50 mg Polvo para concentrado para solución para perfusión",
            presentation: "Vial 50 mg",
            type: "Equinocandina",
            dose: "50-150 mg al día",
            preparation: "Reconstituir con 5 ml de agua para inyección. Diluir posteriormente en 100 ml de SSF o SG5%.",
            appearance: "Solución clara e incolora.",
            administrationTime: "1 hora",
            storage: "Conservar en nevera (2-8°C). Una vez reconstituido, usar dentro de 24 horas.",
            technicalSheet: "https://cima.aemps.es/cima/pdfs/es/ft/83056/FT_83056.pdf"
        },    
    ],
    O:[
        {
            name: "Oritavancina 400 mg Polvo para concentrado para solución para perfusión",
            presentation: "Vial 400 mg",
            type: "Lipoglicopéptido",
            dose: "1200 mg como dosis única",
            preparation: "Reconstituir con 40 ml de agua para inyección. Posteriormente, diluir en 1000 ml de SSF o SG5%.",
            appearance: "Solución clara a ligeramente opalescente.",
            administrationTime: "3 horas",
            storage: "Conservar en nevera (2-8°C). Una vez reconstituido, usar dentro de 6 horas a temperatura ambiente o 12 horas en refrigeración.",
            technicalSheet: "https://cima.aemps.es/cima/pdfs/es/ft/85045/FT_85045.pdf"
        },
    ],
    P:[
        {
            name: "Piperacilina Sódica 4 gr / Tazobactam 0,5 gr Polvo para solución para perfusión",
            presentation: "Vial 4 gr / 0,5 gr",
            type: "Penicilina + Inhibidor de betalactamasa",
            dose: "4,5 gr cada 6-8 horas",
            preparation: "Reconstituir el vial con 20 ml de agua para inyección. Posteriormente, diluir en 100 ml de SSF o SG5%.",
            appearance: "Solución clara a ligeramente amarilla.",
            administrationTime: "30 minutos",
            storage: "Conservar a temperatura ambiente. Una vez reconstituido, usar dentro de las 24 horas.",
            technicalSheet: "https://cima.aemps.es/cima/pdfs/es/ft/76023/FT_76023.pdf"
        },
    ],
    R:[        
        {
            name: "Remdesivir 100 mg Polvo para concentrado para solución para perfusión",
            presentation: "Vial 100 mg",
            type: "Antiviral",
            dose: "200 mg el primer día, seguido de 100 mg al día durante 5-10 días",
            preparation: "Reconstituir con 20 ml de agua para inyección. Posteriormente, diluir en 250 ml de SSF o SG5%.",
            appearance: "Solución clara e incolora.",
            administrationTime: "30-120 minutos",
            storage: "Conservar en nevera (2-8°C). Una vez reconstituido, usar dentro de las 24 horas.",
            technicalSheet: "https://cima.aemps.es/cima/pdfs/es/ft/81089/FT_81089.pdf"
        },
        {
            name: "Rifampicina 600 mg Polvo y disolvente para solución para perfusión",
            presentation: "Vial 600 mg",
            type: "Antibacteriano",
            dose: "600 mg una vez al día",
            preparation: "Reconstituir con el disolvente proporcionado (10 ml de agua para inyección). Diluir posteriormente en 500 ml de SSF o SG5%.",
            appearance: "Solución clara a ligeramente amarilla.",
            administrationTime: "2-3 horas",
            storage: "Conservar en nevera (2-8°C). Una vez reconstituido, usar dentro de 6 horas a temperatura ambiente.",
            technicalSheet: "https://cima.aemps.es/cima/pdfs/es/ft/77034/FT_77034.pdf"
        },    
        ],
    S:[
        {
            name: "Sotrovimab 500 mg Concentrado para solución para perfusión",
            presentation: "Vial 500 mg",
            type: "Anticuerpo monoclonal antiviral",
            dose: "500 mg como dosis única",
            preparation: "Diluir en 100 ml de SSF o SG5%. Administrar inmediatamente tras la preparación.",
            appearance: "Solución clara a ligeramente opalescente.",
            administrationTime: "30 minutos",
            storage: "Conservar en nevera (2-8°C). Proteger de la luz.",
            technicalSheet: "https://cima.aemps.es/cima/pdfs/es/ft/85023/FT_85023.pdf"
        },
        {
            name: "Sulfametoxazol 800mg/Trimetoprima 160mg Polvo y solución para solución inyectable",
            presentation: "Vial 800 mg / 160 mg",
            type: "Antibacteriano",
            dose: "960 mg cada 12 horas",
            preparation: "Reconstituir el vial con 20 ml de agua para inyección. Posteriormente, diluir en 125 ml de SSF o SG5%.",
            appearance: "Solución clara a ligeramente amarilla.",
            administrationTime: "60-90 minutos",
            storage: "Conservar a temperatura ambiente. Usar inmediatamente tras la reconstitución.",
            technicalSheet: "https://cima.aemps.es/cima/pdfs/es/ft/88012/FT_88012.pdf"
        }
    ],
    T:[
        {
            name: "Teicoplanina 400 mg Polvo para solución inyectable y para perfusión",
            presentation: "Vial 400 mg",
            type: "Glucopéptido",
            dose: "6-12 mg/kg cada 12 horas (carga) y luego cada 24 horas",
            preparation: "Reconstituir el vial con 3 ml de agua para inyección. Diluir posteriormente en 50 ml de SSF o SG5%.",
            appearance: "Solución clara e incolora.",
            administrationTime: "30 minutos",
            storage: "Conservar en nevera (2-8°C). Una vez reconstituido, usar dentro de las 24 horas.",
            technicalSheet: "https://cima.aemps.es/cima/pdfs/es/ft/88045/FT_88045.pdf"
        },
        {
            name: "Tigeciclina 50 mg Polvo para solución para perfusión",
            presentation: "Vial 50 mg",
            type: "Glicilciclina",
            dose: "100 mg dosis inicial, seguido de 50 mg cada 12 horas",
            preparation: "Reconstituir con 5 ml de agua para inyección. Diluir posteriormente en 100 ml de SSF o SG5%.",
            appearance: "Solución amarilla a naranja.",
            administrationTime: "30-60 minutos",
            storage: "Conservar en nevera (2-8°C). Una vez reconstituido, usar dentro de las 24 horas.",
            technicalSheet: "https://cima.aemps.es/cima/pdfs/es/ft/91034/FT_91034.pdf"
        },
        {
            name: "Tobramicina 100 mg Solución inyectable",
            presentation: "Ampolla 100 mg/2 ml",
            type: "Aminoglucósido",
            dose: "3-5 mg/kg/día en 2-3 dosis",
            preparation: "Listo para usar. Para perfusión, diluir en 100 ml de SSF o SG5%.",
            appearance: "Solución clara e incolora.",
            administrationTime: "30 minutos",
            storage: "Conservar a temperatura ambiente. Proteger de la luz.",
            technicalSheet: "https://cima.aemps.es/cima/pdfs/es/ft/82045/FT_82045.pdf"
        }, 
    ],
    V:[
        {
            name: "Vancomicina 500 mg Polvo para concentrado para solución para perfusión",
            presentation: "Vial 500 mg",
            type: "Glucopéptido",
            dose: "15-20 mg/kg cada 8-12 horas",
            preparation: "Reconstituir con 10 ml de agua para inyección. Diluir posteriormente en 200 ml de SSF o SG5%.",
            appearance: "Solución clara a ligeramente amarilla.",
            administrationTime: "1-2 horas",
            storage: "Conservar a temperatura ambiente. Usar dentro de 6 horas tras la reconstitución.",
            technicalSheet: "https://cima.aemps.es/cima/pdfs/es/ft/91023/FT_91023.pdf"
        },
        {
            name: "Voriconazol 200 mg Polvo para solución para perfusión",
            presentation: "Vial 200 mg",
            type: "Antifúngico",
            dose: "6 mg/kg cada 12 horas (carga) y luego 4 mg/kg cada 12 horas",
            preparation: "Reconstituir con 19 ml de agua para inyección. Diluir posteriormente en 100 ml de SSF o SG5%.",
            appearance: "Solución clara e incolora.",
            administrationTime: "1-2 horas",
            storage: "Conservar en nevera (2-8°C). Una vez reconstituido, usar dentro de 24 horas.",
            technicalSheet: "https://cima.aemps.es/cima/pdfs/es/ft/94012/FT_94012.pdf"
        },        
    ],
    Z:[
        {
            name: "Zidovudina 200 mg Solución para perfusión",
            presentation: "Frasco 200 mg en 20 ml",
            type: "Antirretroviral",
            dose: "1-2 mg/kg cada 4 horas",
            preparation: "Listo para usar. Puede diluirse en 5% de SG para perfusión.",
            appearance: "Solución clara e incolora.",
            administrationTime: "1 hora",
            storage: "Conservar a temperatura inferior a 25°C. Proteger de la luz."
        },
    ], 
};

const alphabetList = document.getElementById("alphabet-list");
    const searchBar = document.getElementById("seek-bar");
    const resultsContainer = document.getElementById("search-results");
    const antibioticInfo = document.getElementById("antibiotic-info");

    // Generar la lista del alfabeto
    for (let i = 65; i <= 90; i++) {
        const letter = String.fromCharCode(i);
        const listItem = document.createElement("li");
        listItem.textContent = letter;
        listItem.classList.add("alphabet-item");

        // Agregar evento para mostrar antibióticos
        listItem.addEventListener("click", () => {
            displayAntibiotics(letter);
        });

        alphabetList.appendChild(listItem);
    }

    // Mostrar antibióticos según la letra seleccionada
    function displayAntibiotics(letter) {
        const antibioticsForLetter = antibiotics[letter] || [];
    
        // Si no hay antibióticos para la letra, muestra un mensaje
        if (antibioticsForLetter.length === 0) {
            antibioticInfo.innerHTML = `<p style="color: red;">No existen antibióticos con la letra ${letter}.</p>`;
            return;
        }
    
        // Generar lista de antibióticos
        const list = antibioticsForLetter
            .map(
                (atb) => `
                <li class="antibiotic-item" data-name="${atb.name}">
                    ${atb.name}
                </li>`
            )
            .join("");
    
        antibioticInfo.innerHTML = `
            <h2 class='info-title'>Antibióticos que empiezan con ${letter}</h2>
            <ul class='antibiotic-list'>
                ${list}
            </ul>
        `;
    
        // Agregar eventos de clic a los elementos generados
        addAntibioticClickEvents(letter);
    }

    
    function addAntibioticClickEvents(letter) {
        const items = document.querySelectorAll(".antibiotic-item");
    
        items.forEach((item) => {
            item.addEventListener("click", () => {
                const antibioticName = item.getAttribute("data-name");
                const antibiotic = antibiotics[letter].find(
                    (atb) => atb.name === antibioticName
                );
                showDetails(antibiotic); // Muestra los detalles del antibiótico seleccionado
            });
    
            // Asegurarte de que los elementos sean interactivos
            item.style.cursor = "pointer";
        });
    }
    
    
    // Manejar búsqueda
    searchBar.addEventListener("input", function () {
        const query = searchBar.value.toLowerCase();
        resultsContainer.innerHTML = "";

        if (!query) return;

        const results = [];
        for (const letter in antibiotics) {
            results.push(
                ...antibiotics[letter].filter((atb) =>
                    atb.name.toLowerCase().includes(query)
                )
            );
        }

        if (results.length > 0) {
            results.forEach((atb) => {
                const listItem = document.createElement("li");
                listItem.textContent = atb.name;
                resultsContainer.appendChild(listItem);
            });
        } else {
            resultsContainer.innerHTML = `<p>No se encontraron resultados.</p>`;
        }
    });
});