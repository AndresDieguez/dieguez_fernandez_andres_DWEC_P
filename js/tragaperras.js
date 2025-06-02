const frutas = [
    { nombre: 'Cereza', simbolo: '🍒' },
    { nombre: 'Limón', simbolo: '🍋' },
    { nombre: 'Sandía', simbolo: '🍉' },
    { nombre: 'Uva', simbolo: '🍇' },
    { nombre: 'Plátano', simbolo: '🍌' }
];

let creditos = 10;
const botonJugar = document.getElementById('play-button');
const slot1 = document.getElementById('slot1');
const slot2 = document.getElementById('slot2');
const slot3 = document.getElementById('slot3');
const nuevosCreditos = document.getElementById('credits-value');

botonJugar.addEventListener('click', jugar);

function jugar() {
    creditos--;  // Restar 1 crédito por jugada
    let indicesFrutas = [] 
    indicesFrutas = generarTresNumerosAleatorios();

    let numerouno = indicesFrutas[0];
    let numerodos = indicesFrutas[1];
    let numerotres = indicesFrutas[2];

    // Actualizar la interfaz con los nuevos símbolos de frutas
    slot1.innerHTML = frutas[numerouno].simbolo;
    slot2.innerHTML = frutas[numerodos].simbolo;
    slot3.innerHTML = frutas[numerotres].simbolo;

    let premio = null;

    // Verificar si las 3 frutas son iguales
    if (numerouno === numerodos && numerodos === numerotres) {
        if (numerouno === 0) {
            premio = '¡Ganaste el premio gordo con 3 cerezas!';
            creditos += 3;  // Premio especial para 3 cerezas
        } else {
            //premio = '¡Ganaste con 3 frutas iguales!';
            creditos += 3;  // Si son otras frutas iguales, ganamos 3 créditos
        }
    }
    // Verificar si 2 frutas son iguales
    else if (numerouno === numerodos || numerodos === numerotres) {
        //premio = '¡Ganaste con 2 frutas continuas iguales!';
        creditos++;  // Si hay 2 frutas iguales, ganar 1 crédito
    }

    // Actualizar el valor de créditos en la pantalla
    nuevosCreditos.innerHTML = creditos;

    // Si no quedan créditos, mostrar mensaje y redirigir
    if (creditos == 0) {
        alert('Se acabó el dinero, ¿quieres volver a jugar?');
        window.location.href = 'juego.html';
    } else if (premio) {
        // Mostrar el mensaje de premio después de actualizar la interfaz
        alert(premio);
    }
}

function generarTresNumerosAleatorios() {
    return [
        Math.floor(Math.random() * 5),  // Índices entre 0 y 4
        Math.floor(Math.random() * 5),
        Math.floor(Math.random() * 5)
    ];
}
