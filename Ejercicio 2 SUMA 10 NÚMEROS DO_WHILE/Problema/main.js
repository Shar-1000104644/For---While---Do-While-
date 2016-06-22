//Escribe aquí tú código

// El bucle se ejecutará siempre al menos una vez, incluso si la condición
//  es falsa, porque el bloque de código se ejecuta antes de que se pone a
//   prueba la condición


var letra=' ';
var i=1;
do{
	letra +='<br>El numero es ' + i;
	i++;
	document.getElementById("dato").innerHTML = letra;
}
while(i<11);


// var z=0;
// do{
// 	alert(z);
// 	z=z+1;
// }while(z<10);