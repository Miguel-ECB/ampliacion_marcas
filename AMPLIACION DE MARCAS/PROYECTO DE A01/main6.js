var nNum = 30;
console.log("El valor de nNum es " + nNum);

nNum = nNum +1;
console.log("El valor de nNum es "+ nNum);

nNum = nNum +5;
console.log("El valor de nNum es "+ nNum);

nNum++;
console.log("El valor de nNum es " + nNum);

nNum = nNum -1;
console.log("El valor de nNum es " + nNum);

nNum--;
console.log("El valor de nNum es " + nNum);

//Objeto o registro (Var es para variable global)

let objetoAlumno = {
    nombre:'Bego',
    cod_alum: 89345
};

console.log(objetoAlumno);
console.log("El nombre del alumno es: " +objetoAlumno.nombre);
console.log("El codigo del alumno es: " +objetoAlumno.cod_alum);

let objetoAula = {
    numero_mesas: 9,
    nombre: 'ASIR1',
    color: 'Red',
    numero_perchas: 15
};
console.log(objetoAula);

let sum = objetoAula.numero_mesas + objetoAula.numero_perchas;
console.log("La suma de las mesas mas las perchas es: " +sum);