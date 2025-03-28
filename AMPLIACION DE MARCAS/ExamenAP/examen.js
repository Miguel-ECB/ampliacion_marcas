//let numClase = 26
//let n= (numClase % 5) + 6;
//console.log(n);

const familiaTelerin = {
    "Bego": "Madre",
    "Pedro": "Padre",
    "Periquin": "Hijo",
    "Celia": "Prima",
    "bego": "Madre",
    "pedro": "Padre",
    "periquin": "Hijo",
    "celia": "Prima"
    };
const nombre = prompt("Di un nombre:");
let parentesco;
if (nombre === "Bego") {parentesco = "Madre";}
else if (nombre === "bego") {parentesco = "Madre";} 
else if (nombre === "Pedro") {parentesco = "Padre";}
else if (nombre === "pedro") {parentesco = "Padre";} 
else if (nombre === "Periquin") {parentesco = "Hijo";}
else if (nombre === "periquin") {parentesco = "Hijo";} 
else if (nombre === "Celia") {parentesco = "Prima";}
else if (nombre === "celia") {parentesco = "Prima";}
else {parentesco = "No pertenece a la familia Telerin";}
console.log(nombre + " en la familia Telerin es: " + parentesco);
