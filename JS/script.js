// MRU Formulario
//Velocidad
document.getElementById('formMRUvel').addEventListener('submit', function(e) {
    e.preventDefault();

    const distancia = parseFloat(document.getElementById('mru-distancia').value);
    const tiempo = parseFloat(document.getElementById('mru-tiempo').value);

    if (tiempo === 0) {
        document.getElementById('resultado-mru').innerHTML = '<p style="color:red;">El tiempo no puede ser cero.</p>';
        return;
    }

    const velocidad = distancia / tiempo;

    document.getElementById('resultado-mru').innerHTML = `<p>La velocidad es: <strong>${velocidad.toFixed(2)}</strong> m/s</p>`;
});
//Distancia
document.getElementById('formMRUdist').addEventListener('submit', function(e) {
    e.preventDefault();

    const velocidad = parseFloat(document.getElementById('mru-velocidad1').value);
    const tiempo = parseFloat(document.getElementById('mru-tiempo1').value);


    if (tiempo === 0) {
        document.getElementById('resultado1-mru').innerHTML = '<p style="color:red;">El tiempo no puede ser cero.</p>';
        return;
    }

    const distancia = velocidad * tiempo;

    document.getElementById('resultado1-mru').innerHTML = `<p>La distancia es: <strong>${distancia.toFixed(2)}</strong> m/s</p>`;
});
    //Tiempo
document.getElementById('formMRUtie').addEventListener('submit', function(e) {
    e.preventDefault();

    const velocidad = parseFloat(document.getElementById('mru-velocidad2').value);
    const distancia = parseFloat(document.getElementById('mru-distancia2').value);


    if (distancia === 0) {
        document.getElementById('resultado2-mru').innerHTML = '<p style="color:red;">La velocidad no puede ser cero.</p>';
        return;
    }

    const tiempo = distancia / velocidad;

    document.getElementById('resultado2-mru').innerHTML = `<p>El tiempo es: <strong>${tiempo.toFixed(2)}</strong> s</p>`;
});

// MRUV Formulario
// MRU: Calcular Velocidad
document.getElementById('formMRUvel').addEventListener('submit', function (event) {
    event.preventDefault();
    const distancia = parseFloat(document.getElementById('mru-distancia').value);
    const tiempo = parseFloat(document.getElementById('mru-tiempo').value);
    if (tiempo > 0) {
        const velocidad = distancia / tiempo;
        document.getElementById('resultado-mru').innerHTML = `La velocidad es: ${velocidad.toFixed(2)} m/s`;
    } else {
        document.getElementById('resultado-mru').innerHTML = 'El tiempo debe ser mayor que 0';
    }
});

// MRU: Calcular Distancia
document.getElementById('formMRUdist').addEventListener('submit', function (event) {
    event.preventDefault();
    const velocidad = parseFloat(document.getElementById('mru-velocidad1').value);
    const tiempo = parseFloat(document.getElementById('mru-tiempo1').value);
    const distancia = velocidad * tiempo;
    document.getElementById('resultado1-mru').innerHTML = `La distancia es: ${distancia.toFixed(2)} metros`;
});

// MRU: Calcular Tiempo
document.getElementById('formMRUtie').addEventListener('submit', function (event) {
    event.preventDefault();
    const velocidad = parseFloat(document.getElementById('mru-velocidad2').value);
    const distancia = parseFloat(document.getElementById('mru-distancia2').value);
    if (velocidad > 0) {
        const tiempo = distancia / velocidad;
        document.getElementById('resultado2-mru').innerHTML = `El tiempo es: ${tiempo.toFixed(2)} segundos`;
    } else {
        document.getElementById('resultado2-mru').innerHTML = 'La velocidad debe ser mayor que 0';
    }
});

// MRUV: Calcular Velocidad Final
document.getElementById('formMRUVvel').addEventListener('submit', function (event) {
    event.preventDefault();
    const velInicial = parseFloat(document.getElementById('mruv-vel-inicial').value);
    const aceleracion = parseFloat(document.getElementById('mruv-aceleracion').value);
    const tiempo = parseFloat(document.getElementById('mruv-tiempo').value);
    const velFinal = velInicial + (aceleracion * tiempo);
    document.getElementById('resultado-mruv').innerHTML = `La velocidad final es: ${velFinal.toFixed(2)} m/s`;
});

// MRUV: Calcular Desplazamiento
document.getElementById('formMRUVdist').addEventListener('submit', function (event) {
    event.preventDefault();
    const velInicial = parseFloat(document.getElementById('mruv-vel-inicial2').value);
    const aceleracion = parseFloat(document.getElementById('mruv-aceleracion2').value);
    const tiempo = parseFloat(document.getElementById('mruv-tiempo2').value);
    const desplazamiento = (velInicial * tiempo) + (0.5 * aceleracion * tiempo * tiempo);
    document.getElementById('resultado2-mruv').innerHTML = `El desplazamiento es: ${desplazamiento.toFixed(2)} metros`;
});

// MRUV: Calcular Velocidad Final al Cuadrado
document.getElementById('formMRUVvel2').addEventListener('submit', function (event) {
    event.preventDefault();
    const velInicial = parseFloat(document.getElementById('mruv-vel-inicial3').value);
    const aceleracion = parseFloat(document.getElementById('mruv-aceleracion3').value);
    const desplazamiento = parseFloat(document.getElementById('mruv-desplazamiento3').value);
    
    if (desplazamiento >= 0) {
        const velFinalCuadrado = Math.pow(velInicial, 2) + 2 * aceleracion * desplazamiento;
        document.getElementById('resultado3-mruv').innerHTML = `La velocidad final al cuadrado es: ${velFinalCuadrado.toFixed(2)} m²/s²`;
    } else {
        document.getElementById('resultado3-mruv').innerHTML = 'El desplazamiento debe ser mayor o igual a 0';
    }
});