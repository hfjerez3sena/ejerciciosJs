	//Ejercicio ejemplo 1
	console.log("--Ejemplo 1");
	var x = 10;
	var y = 11;
	console.log("Variable 1 es " + x);
	console.log("Variable 2 es " + y);
	var suma = x+y;
	var resta = x-y;
	var multiplo = x*y;
	var division = x/y;	
	console.log("La suma de los dos datos es: " + suma);
	console.log("La resta de los dos datos es: " + resta);
	console.log("La multiplcación de los dos datos es: " + multiplo);
	console.log("La división de los dos datos es: " + division.toFixed(4));
	console.log("");

	//Declaraciones variables	
	console.log("--Ejemplo 2:");
	var a = new Date();
	var anioActual = a.getFullYear();
	var nombre = "Felipe";
	var apellido = "Jerez";
	var anionacimiento = 1992;
	var edad = anioActual - anionacimiento;
	var estudios = "Tecnólogo en Desarrollo de Software";
	var profesion = "Desarrollador .Net";
	var curso = "Desarrollo de aplicaciones móviles";
	var promedio = 4.2;
	
	//Mostramos Ficha Técnica de las variables declaradas
	console.log("Ficha Técnica del Estudiante:");
	console.log("Nombre Completo: " + nombre + " " + apellido);
	console.log("Año de Nacimiento: " + anionacimiento);
	console.log("Edad: " + edad);
	console.log("Estudios: " + estudios);
	console.log("Profesión: " + profesion);
	console.log("Curso Actual: " + curso);
	console.log("Promedio: " + promedio);

	//Con todas la variables Construimos una bibliografía pequeña
	var nombreCompleto = nombre + " " + apellido;
	var bibliografia = "Mi nombre es " + nombreCompleto + " nací en el año " + anionacimiento +
							" tengo " + edad + " años," + " Soy " + estudios + ", Actualmente trabajo cómo " 
							+ profesion + " y estudio actualmente " + curso + " y mi promedio es de "
							+ promedio;
	console.log(bibliografia);
	console.log("");
	//Ejercicio de incremento o decremento
	console.log("--Ejemplo 3 Incremento y Decremento: ");
	var a = 0;
	var b = 67;
	var a = b--;
	var b = a++;
	console.log(a);
	console.log(b);
	console.log("");
	//Ejercicios Operadores de Asignación
	console.log("--Ejemplo 4 Operadores de Asignación: ");
	var primerNumero = 65;
	var segundoNumero = 32;
	console.log("Primer Número " + primerNumero + " es = a Segundo Número " + segundoNumero + "? ");
	console.log(primerNumero=segundoNumero);
	console.log("La suma del Primer Número " + primerNumero + " y el Segundo Número " + segundoNumero + " es ");
	console.log(primerNumero+=segundoNumero);
	console.log("La resta del Primer Número " + primerNumero + " y el Segundo Número " + segundoNumero + " es ");
	console.log(primerNumero-=segundoNumero);
	console.log("El módulo del Primer Número " + primerNumero + " y el Segundo Número " + segundoNumero + " es ");
	console.log(primerNumero%=segundoNumero);
	console.log("");
	//Operadores de Comparación
	console.log("--Ejemplo 5 Operadores de Comparación: ");
	var numero1 = 45;
	var numero2 = 65;
	console.log("Primer Número " + numero1 + " es = a Segundo Número " + numero2 + "? ");
	console.log(numero1 === numero2);
	console.log("Primer Número " + numero1 + " es mayor que Segundo Número " + numero2 + "? ");
	console.log(numero1 > numero2);
	console.log("Primer Número " + numero1 + " es menor que Segundo Número " + numero2 + "? ");
	console.log(numero1 < numero2);
	console.log("");
	//Operadores Booleanos
	console.log("--Ejemplo 6 Operadores Lógicos Booleanos: ");
	var numerobool1 = 30;
	var numerobool2 = 50;
	var numerobool3 = 25;
	var numerobool4 = 67;
	console.log(numerobool1 + " es mayor = que " + numerobool3 + " y " + numerobool2 + " es menor que " + numerobool4 + "?");
	console.log((numerobool1 >= numerobool3) && (numerobool2 < numerobool4));
	console.log(numerobool1 + " es menor que " + numerobool3 + " o " + numerobool2 + " es menor que " + numerobool4 + "?");
	console.log((numerobool1 < numerobool3) || (numerobool2 < numerobool4));
	console.log("--------------------------------------------------------------------------------------");
	//Ejercicios de aplicación
	console.log("--Resolución de curso C: ");
	//Operadores
	console.log("--Operadores: ");
	var x = 10;
	var y = 11;
	console.log("Variable 1 es " + x);
	console.log("Variable 2 es " + y);
	var suma = x+y;
	var resta = x-y;
	var multiplo = x*y;
	var division = x/y;	
	console.log("La suma de los dos datos es: " + suma);
	console.log("La resta de los dos datos es: " + resta);
	console.log("La multiplcación de los dos datos es: " + multiplo);
	console.log("La división de los dos datos es: " + division.toFixed(4));
	console.log("");
	//Declaraciones variables
	var a = new Date();
	var anioActual = a.getFullYear();
	var nombre = "Felipe";
	var apellido = "Jerez";
	var anionacimiento = 1992;
	var edad = anioActual - anionacimiento;
	var estudios = "Tecnólogo en Desarrollo de Software";
	var profesion = "Desarrollador .Net";
	var curso = "Desarrollo de aplicaciones móviles";
	var promedio = 4.2;
	
	//Mostramos Ficha Técnica de las variables declaradas
	console.log("Ficha Técnica del Estudiante:");
	console.log("Nombre Completo: " + nombre + " " + apellido);
	console.log("Año de Nacimiento: " + anionacimiento);
	console.log("Edad: " + edad);
	console.log("Estudios: " + estudios);
	console.log("Profesión: " + profesion);
	console.log("Curso Actual: " + curso);
	console.log("Promedio: " + promedio);

	//Con todas la variables Construimos una bibliografía pequeña
	var nombreCompleto = nombre + " " + apellido;
	var bibliografia = "Mi nombre es " + nombreCompleto + " nací en el año " + anionacimiento +
							" tengo " + edad + " años," + " Soy " + estudios + ", Actualmente trabajo cómo " 
							+ profesion + " y estudio actualmente " + curso + " y mi promedio es de "
							+ promedio;
	console.log(bibliografia);
	console.log("");
	//Condicionales
	console.log("--Condicionales: ");
	var numeroccondicionales1 = 26;
	var numeroccondicionales2 = 76;
	console.log("Numero 1: " + numeroccondicionales1);
	console.log("Número 2: " + numeroccondicionales2);
	if (numeroccondicionales1 > numeroccondicionales2) {
			console.log("Si, el número 1 es mayor que el numero 2");
	}else if (numeroccondicionales1 < numeroccondicionales2) {
		console.log("Si, el número 1 es menor que el numero 2")
	}
	console.log("");
	//Switch case
	console.log("--Switch: ");
	var a = new Date();
	var mesActual = a.getMonth()+1;
	switch(mesActual) {
		case 1:
		console.log("Enero");
		break;
		case 2:
		console.log("Febrero");
		break;
		case 3:
		console.log("Marzo");
		break;
		case 4:
		console.log("Abril");
		break;
		case 5:
		console.log("Mayo");
		break;
		case 6:
		console.log("Junio");
		break;
		case 7:
		console.log("Julio");
		break;
		case 8:
		console.log("Agosto");
		break;
		case 9:
		console.log("Septiembre");
		break;
		case 10:
		console.log("Octubre");
		break;
		case 11:
		console.log("Noviembre");
		break;
		case 12:
		console.log("Diciembre");
		break;
		default:
		console.log("No existe mes");
	}
	console.log("");
	//Ciclos
	console.log("--For: ");
	console.log("Los números pares de 1 a 10 son: ");
	for (var i = 1; i <=10; i++){		
		console.log(i+=1);	
	}
	console.log("");
	//Ciclos
	console.log("--While: ");
	var numerowhile =0;
	while(numerowhile <= 20){
		console.log(numerowhile);
		numerowhile = numerowhile+1;
	}
	console.log("");
	//Ciclos
	console.log("--Do While: ");
	var numerodo = 1;
	console.log(numerodo);
	do{	
		console.log("El número es menor a e igual a 5");
		numerodo++;
	}
	while(numerodo <= 5);

	console.log("");
	//Ciclos
	console.log("--Ciclos combinados con sondicionales: ");
	console.log("Los números de 1 al 8 son: ");
	for (var l = 1; l <=10; l++){			
		if (l > 8) {
			break;
		}
		console.log(l);	
	}



	



