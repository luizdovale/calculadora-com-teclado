function appendToField(value) {
    document.getElementById('fator').value += value;
}

function handleFatorInput(event) {
    event.value = event.value.replace(/,/g, '.');
}

function handlePolegadasInput(event) {
    event.value = event.value.replace(/,/g, '.');
}

function handleInput(event) {
    event.value = event.value.replace(/,/g, '.');
}

function calculateNitrogenio() {
    const fator = parseFloat(document.getElementById('fator').value);
    const polegadas = parseFloat(document.getElementById('polegadas').value);

    if (isNaN(fator) || isNaN(polegadas)) {
        alert("Por favor, insira valores válidos para fator e polegadas.");
        return;
    }

    let pesoLiquido = (fator * polegadas) / 0.862;
    pesoLiquido = Math.ceil(pesoLiquido);
    let m3 = pesoLiquido * 0.862;

    document.getElementById('pesoLiquido').value = pesoLiquido.toFixed(0) + " kg";
    document.getElementById('m3').value = m3.toFixed(3) + " m³";
}

function calculateOxigenio() {
    const fator = parseFloat(document.getElementById('fator').value);
    const polegadas = parseFloat(document.getElementById('polegadas').value);

    if (isNaN(fator) || isNaN(polegadas)) {
        alert("Por favor, insira valores válidos para fator e polegadas.");
        return;
    }

    let pesoLiquido = (fator * polegadas) / 0.754;
    pesoLiquido = Math.ceil(pesoLiquido);
    let m3 = pesoLiquido * 0.754;

    document.getElementById('pesoLiquido').value = pesoLiquido.toFixed(0) + " kg";
    document.getElementById('m3').value = m3.toFixed(3) + " m³";
}

function calculateArgonio() {
    const fator = parseFloat(document.getElementById('fator').value);
    const polegadas = parseFloat(document.getElementById('polegadas').value);

    if (isNaN(fator) || isNaN(polegadas)) {
        alert("Por favor, insira valores válidos para fator e polegadas.");
        return;
    }

    let pesoLiquido = (fator * polegadas) / 0.604;
    pesoLiquido = Math.ceil(pesoLiquido);
    let m3 = pesoLiquido * 0.604;

    document.getElementById('pesoLiquido').value = pesoLiquido.toFixed(0) + " kg";
    document.getElementById('m3').value = m3.toFixed(3) + " m³";
}

function resetFields() {
    document.getElementById('fator').value = "";
    document.getElementById('polegadas').value = "";
    document.getElementById('pesoLiquido').value = "";
    document.getElementById('m3').value = "";
}
