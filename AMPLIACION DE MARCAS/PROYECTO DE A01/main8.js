let maxOpor = 3;
var numJugador;
var numObjetivo = 12;
var numObjetivodos = 10;
var numObjetivotres = 30;


for (let i = 0; i < 3; i++){
numJugador = prompt("Intento numero " + (i+1));
if(numJugador == numObjetivo){
    console.log("EDLB")
    break;
}
}
let i = 0;
while(i<3){
numJugador = prompt("Intento numero " + (i+1));
    if(numJugador == numObjetivodos){
        console.log("EDLB dos")
        break;
}
i++;
}

let seguir = true;
for (let i = 0; (i < 3 && seguir); i++){
    numJugador = prompt("Intento numero " + (i+1));
    if(numJugador == numObjetivotres){
        console.log("EDLB tres")
    seguir = false;
    }
    }