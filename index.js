let estado = null;
let cidade = {
    valor: null,
    texto: null
}

// Variáveis para armazenar os campos universavelmente
let campoEstado = null
let campoCidade = null
let campoExibe = null

document.addEventListener("DOMContentLoaded", setup);

function setup() {
    // Buscando campos necessários
    campoEstado = document.getElementById("selectEstado");
    campoCidade = document.getElementById("selectCidade");
    campoExibe = document.getElementById("exibeCidadeEstado");

    campoEstado.addEventListener("change", () => {
        estado = campoEstado.value;
        campoCidade.removeAttribute("disabled");
        campoCidade.add
        habilitaCidades(estado, campoCidade);
    });

    campoCidade.addEventListener("change", () => {
        cidade.valor = campoCidade.value
        cidade.texto = campoCidade.options[campoCidade.selectedIndex].text;

        if (cidade.valor != 0) {
            campoExibe.innerText = `${cidade.texto}/${estado}`;
        }
    });
}

// Habilita as cidades dependendo do estado escolhido
function habilitaCidades(estadoEscolhido, campoCidade) {
let opt1 = document.createElement("option");
let opt2 = document.createElement("option");
let opt3 = document.createElement("option");

// Remove todas as options exceto a primeira
let removeOptions = (campoCidade) => {
    while (campoCidade.options.length > 1) {
        campoCidade.remove(1);
    }
}

// Adiciona as opções ao select, usando valores e textos indicados
let adicionaOpcoes = (vl1, txt1, vl2, txt2, vl3, txt3) => {
    opt1.value = vl1;
    opt1.text = txt1;
    campoCidade.add(opt1);
    
    opt2.value = vl2;
    opt2.text = txt2;
    campoCidade.add(opt2);
    
    opt3.value = vl3;
    opt3.text = txt3;
    campoCidade.add(opt3);
}

    switch (estadoEscolhido) {
        case (estadoEscolhido = "0"):
            campoCidade.setAttribute("disabled", "");
            break;

        case (estadoEscolhido = "SP"):
            removeOptions(campoCidade);            
            adicionaOpcoes("1", "Guarulhos", "2", "Ribeirão Preto", "3", "São Bernardo do Campo");
            break;

        case (estadoEscolhido = "RJ"):
            removeOptions(campoCidade);
            adicionaOpcoes("4", "São Gonçalo", "5", "Niterói", "6", "Duque de Caxias")
            break;
            
        case (estadoEscolhido = "MT"):
            removeOptions(campoCidade);
            adicionaOpcoes("7", "Cuiabá", "8", "Várzea Grande", "9", "Rondonópolis")
            break;
    }
}