let aNumerosDePie = [12, 35, 47, 48];

// Ordenar los números en orden ascendente
aNumerosDePie.sort((a, b) => a - b);

console.log("Números ordered:");
for (let index = 0; index < aNumerosDePie.length; index++) {
  const element = aNumerosDePie[index];
}

aNumerosDePie.push(38);
console.log("DESPUES");

aNumerosDePie.forEach((valor, indice) => {
  console.log(indice + ":" + valor);
});

let ultimoElemento = aNumerosDePie.pop();

console.log("DESPUES DE DESPUES");

aNumerosDePie.forEach((valor, indice) => {
  console.log(indice + ":" + valor);
});

console.log("el ultimo elemento fue " + ultimoElemento);

const aPersonas = ["Jose", "Chema", "Pepe", "Bartolito", "Begoña"];
aPersonas[0] = "Josito";

console.log("Antes de intercambiar");
aPersonas.forEach((valor, indice) => {
  console.log(indice + ":" + valor);
});

// Intercambiar el valor de la posicion 2 y 3
let temp = aPersonas[2];
aPersonas[2] = aPersonas[3];
aPersonas[3] = temp;

console.log("Despues de intercambiar");
aPersonas.forEach((valor, indice) => {
  console.log(indice + ":" + valor);
});

// Ordenar alfabeticamente
console.log("Ordenado alfabeticamente");
aPersonas.sort((a, b) => {
  return a.localeCompare(b);
});
aPersonas.forEach((valor ,indice ) =>{
    console.log (indice +" : "+   valor );
});

let aNumerospotencias2= [32 ,64 ,128 ,16 ,8 ,4 ,2 ,1 ];
   
aNumerospotencias2.sort((a,b) => a - b);
console.log(aNumerospotencias2);