function jugarAsmerix() {
    console.log("Bienvenido a las 4 pruebas de Asmerix");
  
    // Nivel 1
    console.log("Nivel 1: Dados");
    let dado1 = Math.floor(Math.random() * 12) + 1;
    let dado2 = Math.floor(Math.random() * 12) + 1;
    let suma = dado1 + dado2;
    console.log("Lanzaste los dados: " + dado1 + " y " + dado2 + ". Suma: " + suma);
    if (suma <= 15) {
        console.log("Dedicate a otra cosa. Refresca la pantalla para volver a lanzar los dados");
        return;
    }
  
    // Nivel 2:
    console.log("Nivel 2: Numero oculto");
    let numeroOculto = Math.floor(Math.random() * 5) + 1;
    let intento1 = parseInt(prompt("Adivina el numero oculto (1-5). Intento 1:"), 10);
    if (intento1 === numeroOculto) {
        console.log("Adivinaste el numero");
    } else {
        let intento2 = parseInt(prompt("Adivina el numero oculto (1-5). Intento 2:"), 10);
        if (intento2 === numeroOculto) {
            console.log("Adivinaste el numero");
        } else {
            console.log("Numero incorrecto, eres malillo@. El numero oculto era: " + numeroOculto);
            return;
        }
    }
  
    // Nivel 3
    console.log("Nivel 3: Clave binaria");
    let claveBinaria = Math.floor(Math.random() * 8).toString(2).padStart(3, '0'); 
    let intentoBinario1 = prompt("Adivina la clave binaria de 3 bits. Intento 1:");
    if (intentoBinario1 === claveBinaria) {
        console.log("Clave correcta");
    } else {
        let intentoBinario2 = prompt("Adivina la clave binaria de 3 bits. Intento 2:");
        if (intentoBinario2 === claveBinaria) {
            console.log("Clave correcta");
        } else {
            let intentoBinario3 = prompt("Adivina la clave binaria de 3 bits. Intento 3:");
            if (intentoBinario3 === claveBinaria) {
                console.log("Clave correcta");
            } else {
                console.log("Clave incorrecta, eres buenicill@. La clave era: " + claveBinaria + ". Refresca la pantalla para volver a lanzar los dados");
                return;
            }
        }
    }
  
    // Nivel 4: 
    console.log("Nivel 4: Jefe");
    let respuestaCorrecta = 5; 
    let pregunta = "Que numero tiene el mismo numero de letras que el valor que expresa?";
    let respuesta = parseInt(prompt(pregunta + " (Solo tienes una oportunidad): "), 10);
    if (respuesta === respuestaCorrecta) {
        console.log("You are the best");
    } else {
        console.log("Eres grande. La respuesta correcta era: " + respuestaCorrecta + ". Refresca la pantalla para volver a lanzar los dados");
    }
  }
  
  jugarAsmerix();
  
  