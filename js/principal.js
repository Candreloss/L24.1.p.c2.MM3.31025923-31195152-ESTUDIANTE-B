import CL_estudiante from "./CL_estudiante.js";
import CL_deportista from "./CL_deportista.js";

let dep1 = new CL_deportista("Juan", 132, 8, 21, 1);
let dep2 = new CL_deportista("Felix", 110, 10, 20, 2);

let salida = document.getElementById("salida");

salida.innerHTML = `Nombre del estudiante: ${dep1.nombre} <br>`
salida.innerHTML += `Acumulado de notas: ${dep1.notas} <br>`
salida.innerHTML += `Cantidad de materias: ${dep1.materias} <br>`
salida.innerHTML += `Deporte (1=beisbol - 2=futbol): ${dep1.deporte} <br>`
salida.innerHTML += `El promedio de notas es:${dep1.promNotas().toFixed(2)} <br>`
salida.innerHTML += `${dep1.nombre} ${dep1.admitido()} <br> <br>`

salida.innerHTML += `Nombre del estudiante: ${dep2.nombre} <br>`
salida.innerHTML += `Acumulado de notas: ${dep2.notas} <br>`
salida.innerHTML += `Cantidad de materias: ${dep2.materias} <br>`
salida.innerHTML += `Deporte (1=beisbol - 2=futbol): ${dep2.deporte} <br>`
salida.innerHTML += `El promedio de notas es:${dep2.promNotas().toFixed(2)} <br>`
salida.innerHTML += `${dep2.nombre} ${dep2.admitido()} <br> <br>`