//Input Example

_INPUT = "2\n3 9\n17 24";

//Expected Output
/*
2
0
*/

//Second Input Example (Remember to comment the first example in order
//and uncomment the next line in order test this case)

//_INPUT = "4\n1 8\n2 4\n10 13\n11 20";

//Expected Output
/*
2
1
0
1
*/

//----- Start your code here -------

console.log(""); // imprime
console.log("Rangos:"); //impre el nombre de los rangos
console.log(_INPUT); //imprime el numero de rangos y los rangos anteriormente establecidos
_INPUT = _INPUT.split("\n"); //divide el arreglo y excluye las \n
T = _INPUT.length - 1; //le resta 1 a la longitud del input
console.log(""); //imprime
console.log("Cuadrados perfectos por rango:"); //imprime el label de los cuadrados que hay por caso

for (contador = 0; contador < T; contador++) //ciclo del contador T
{

	rango = _INPUT[contador+1];

	rango2 = rango.split(" ");

	contador2=0;
	
	if(1 <= rango2[0] && rango2[0] <= rango2[1] && rango2[1] <= 1000000000) //condiciones de rango
	{

		for(contador3 = rango2[0]; contador3 <= rango2[1]; contador3++) //ciclo de los rangos
		{

			cuadrado = Math.sqrt(contador3); //sacar el cuadrado

			cuadrado = cuadrado%1;
			
			if(cuadrado==0) //condicion del cuadrado
			{

				contador2 = contador2+1;

			}

		} 

	console.log(contador2);

	}

}
console.log("");
