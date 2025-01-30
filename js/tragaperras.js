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
let slot1 = document.getElementById('slot1');
let slot2 = document.getElementById('slot2');
let slot3 = document.getElementById('slot3');



let numerouno
let numerodos
let numerotres
let indicesFrutas = []

function jugar(){
    //console.log('has hecho clic');
    let nuevosCreditos = creditos--;
    if (creditos > 0){
        //console.log(nuevosCreditos);
        let antiguosCreditos = document.getElementById('credits-value')
        antiguosCreditos.innerHTML = nuevosCreditos
    }
    
    //indicesFrutas = generarTresNumerosAleatorios();
    generarTresNumerosAleatorios();
    numerouno = indicesFrutas[0]
    numerodos = indicesFrutas[1]
    numerotres = indicesFrutas[2]

    for (const fruta of frutas) {

        if (numerouno === fruta.index){
            slot1.innerHTML = fruta.simbolo
        }
        if (numerodos === fruta.index){
            slot2.innerHTML = fruta.simbolo
        }
        if (numerotres === fruta.index){
            slot3.innerHTML = fruta.simbolo
        }
        
    }
    indicesFrutas.splice(0,3) // borramos el array

    //console.log(indicesFrutas);
}

function generarTresNumerosAleatorios() {
    //numerouno = Math.floor(Math.random() * 5 +1)
    indicesFrutas.push(Math.floor(Math.random() * 5 +1))
    //numerodos = Math.floor(Math.random() * 5 +1)
    indicesFrutas.push(Math.floor(Math.random() * 5 +1))
    //numerotres = Math.floor(Math.random() * 5 +1)
    indicesFrutas.push(Math.floor(Math.random() * 5 +1))
}


