// //Escribe aquí tú código

var edades =[];
var sumaEdades =0;
var promedio;

var numeroAlumnos =prompt("¿Cúal es el total de alumnos?");
numeroAlumnos =parseInt(numeroAlumnos);
for (var i =1; i<=numeroAlumnos; i++) {
	edades[i] =parseInt(prompt("Ingrese la edad número "+i));
	suma =suma+edades[i];
}
promedio =suma/numeroAlumnos;
alert("Ingreso " + numeroAlumnos " edades \n el promedio es: " + promedio);


