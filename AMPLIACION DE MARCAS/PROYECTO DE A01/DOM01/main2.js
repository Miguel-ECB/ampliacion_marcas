let fila1 =[1,2];
let fila2 = [5,7];

let matriz1 = [fila1,fila2];
let matriz2 = [[1,2],[5,7]];

console.log(matriz1);
console.log(matriz2);

for (let index = 0; index < matriz2.length; index++) {
    const fila = matriz[index];
    for (let i = 0; i < fila.length; i++) {
        fila[i]++;
        }
    
}
for (let index = 0; index < matriz2.length; index++) {
    const fila = matriz2[index];
    for (let i = 0; i < fila.length; i++) {
        fila[i]++;
        }
}

//inrementar en 2

for (let index = 0; index < matriz2.length; index++) {
    const fila = matriz2[index];
    for (let i = 0; i < fila.length; i++) {
        fila[i] = fila[i] + 2;
        }
}

function imprimriMatriz(miMatriz){
    for (let index = 0; index < miMatriz.length; index++) {
        const fila = matriz2[index];
        for (let i = 0; i < fila.length; i++) {
            fila[i]++;
            }
    }

}