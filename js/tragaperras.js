const frutas = [
    { index: 1, nombre: 'Cereza', simbolo: '🍒' },
    { index: 2, nombre: 'Limón', simbolo: '🍋' },
    { index: 3, nombre: 'Sandía', simbolo: '🍉' },
    { index: 4, nombre: 'Uva', simbolo: '🍇' },
    { index: 5, nombre: 'Plátano', simbolo: '🍌' }
];

let botonJugar = document.getElementById('play-button');
botonJugar.addEventListener('click', jugar)

let creditos = parseInt(document.getElementById('credits-value').textContent);
//console.log(creditos);

let numerouno
let numerodos
let numerotres
const indicesFrutas[]

function jugar(){
    //console.log('has hecho clic');
    creditos--;
    indicesFrutas = generarTresNumerosAleatorios();


}

function generarTresNumerosAleatorios() {
    numerouno = Math.floor(Math.random() * 5 +1)
    numerouno = Math.floor(Math.random() * 5 +1)
    numerouno = Math.floor(Math.random() * 5 +1)
    return null;
}


