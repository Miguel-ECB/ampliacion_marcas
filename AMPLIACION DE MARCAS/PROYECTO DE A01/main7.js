let numeroAleatorio = Math.floor(Math.random() * 13) + 1;
let numeroAleatorioo = Math.floor(Math.random() * 13) + 1;

if(numeroAleatorioo > 10 && numeroAleatorioo > 10){numeroAleatorioo = 10; numeroAleatorio= 10}
console.log("Tus cartas son: " + numeroAleatorio + " y " + numeroAleatorioo);
let palabro = prompt("Carta mas(c) o Plantarse(p)");
console.log(palabro);


if(palabro == 'p'){console.log("Jugador se planta")}
else if(palabro == 'c'){console.log("El jugador continua")}
else{console.log('Por favor, introduce "p" o "c"')}


