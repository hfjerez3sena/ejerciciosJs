//Funciones
function sayHello(name){
	alert("Hola, " + name);
}

function sayHello(name,age){
	document.write("Mi nombre es " + name + " y tengo " + age + " años.");
}

sayHello("Felipe Jerez","28");

function operacion(num1,num2){
	return num1 * num2;
}

var x = operacion(4, 7);

console.log("El resultado de la multiplicación es " + x);

//Alerts,prompt y confirm
var user = prompt("Por favor ingresa tu nombre");
alert(user);

var resultado =  confirm("Está seguro que quiere abandonar esta pagina?");
if (resultado == true) {
	alert("Gracias Por visistarnos")
}else{
	alert("Gracias por estar con nosostros")
}

//Var y Let
function pruebaVar(){
	var x = 1;
	if (true) {
		let x = 2;
		console.log(x);
	}
	console.log(x);
}

function pruebaLet(){
	let x = 1;
	if (true) {
		let x = 2;
		console.log(x);
	}
	console.log(x);
}
pruebaLet();
pruebaVar();

for (let a = 0; a < 6; a++){
	document.write(a + "-")
}

let name = 'Felipe';
let msg = `Bienvenido ${name}!`;
console.log(msg);

let list = ["Arroz","Leche","Azucar"];
for (let val of list){
	console.log(val);
}

function agregar(x,y){
	var sum = x+y;
	console.log(sum);
}

const agregarecma = (x,y) => {
	let sum = x + y;
	console.log(sum);
}
agregar(3,6);
agregarecma(2,5);

const prueba = (a,b=5,c=34)=>{
	return a + b + c;
}
console.log(prueba(7));

let tree = {
	height: 10,
	color: 'green',
	grow(){
		this.height += 2;
	}
};
tree.grow();

console.log(tree.height);

let height = 5;
let healt = 100;

let athlete = {
	height,
	healt
};
console.log(athlete.height);

let prop = 'name';
let id = '1234';
let mobile = '08923';

let usuario = {
	[prop]: 'Felipe',
	[`user_${id}`]: `${mobile}`
};

console.log(usuario);

var i = 0;
var a = {
	['foo' + ++i]: i,
	['foo' + ++i]: i,
	['foo' + ++i]: i
};

var param = 'size';
var config = {
	[param]: 12,
	['mobile' + 
	param.charAt(0).toUpperCase() + 
	param.slice(1)]: 4
};
console.log(config);

//Object Design
let persona = {
	nombre: 'Felipe',
	edad: 27,
	sexo: 'Masculino'
};
let estudiante = {
	nombre: 'Diana',
	edad: 30,
	xp: '2'
};
let nuevoEstudiante = Object.assign({}, persona, estudiante);
nuevoEstudiante.nombre = 'Andrés';
nuevoEstudiante.edad = '35';
nuevoEstudiante.xp = '5';

console.log(persona);
console.log(estudiante);
console.log(persona.nombre);
console.log(nuevoEstudiante);
console.log(nuevoEstudiante.nombre);

//Desestructuración
let personas = {
	nombre: 'Felipe',
	edad: 27,
	ocupacion: 'developer'
};

let{nombre,edad,ocupacion} = personas;

console.log(nombre);
console.log(ocupacion);

//Parámetros Rest y SpreadRest

function contieneTodo(arr, ...numeros){
	for(let numero of numeros){
		if (arr.indexOf(numero) === -1) {
			return false;
		}
	}
	return true;
}

console.log(contieneTodo());

//Spread

function operacionSpread(a,b,c,d){
	console.log(a+b+c+d);
}
var args = [1,2,3];
operacionSpread.apply(null,args.concat(4));

//Spread en literales de arreglos
var arreglo = ["Uno", "Dos", "Cinco"];
arreglo.splice(2,0,"Tres");
arreglo.splice(3,0,"Cuatro");

let nuevoArreglo = ["Tres","Cuatro"];
let arr = ['Uno','Dos',...nuevoArreglo,'Cinco'];
console.log(arr);

//Clases
class rectangulo{
	constructor(height,width){
		this.height = height;
		this.width = width;
	}
}
const square = new rectangulo(8,7);
const poster = new rectangulo(9,4);

console.log(square);
console.log(poster);

var squareS = class rectangulo{
	constructor(height, width){
		this.height = height;
		this.width = width;
	}
};
console.log(squareS);

//Métodos de Clase

class punto{
	constructor(x,y){
		this.x = x;
		this.y = y;
	}
	static distancia(a,b){
		const dx = a.x - b.x;
		const dy = a.y - b.y;
		return Math.hypot(dx,dy);
	}
}
const p1 = new punto(6,5);
const p2 = new punto(4,8);

console.log(punto.distancia(p1,p2));

//Herencia
class animal{
	constructor(nombre){
		this.nombre = nombre;
	}
	habla(){
		console.log(this.nombre + ' Hace un ruido.');
	}
}

class perro extends animal{
	habla(){
		super.habla();
		console.log(this.nombre + ' Ladra');
	}
}

let Perro = new perro('Kiara');
Perro.habla();

//Map y Set

let map = new Map([['k1','v1'],['k2','v2']]);
console.log(map.size);

let mapa = new Map();
mapa.set('k1','v1').set('k2','v2');
console.log(mapa.get('k1'));
console.log(mapa.has('k2'));

for(let kv of mapa.entries())
	console.log(kv[0] + " : " + kv[1]);

//Objeto SET
let set = new Set([1,2,4,2,59,9,4,9,1]);
console.log(set.size);

//Metodos definicion
let sete = new Set();

sete.add(5).add(9).add(59).add(9);
console.log(sete.has(9));
for(let v of sete.values())
	console.log(v);

//Promises
function asyncfunc(trabajo){
	return new 
Promise(function(resolve,reject){
		if (trabajo === "")
			reject(Error("Nada"));
			setTimeout(function(){
				resolve(trabajo);
			}, 1000);		
	});
}

asyncfunc("Trabajo 1").then(function(result){
	console.log(result);
	return asyncfunc("Trabajo 2")
}, function(error){
	console.log(error);
})
.then(function(result){
	console.log(result);
}, function(error){
	console.log(error);
});
console.log("Fin");

//Iteradores y Generadores
const array = ['0','1','4','a','9','c','16'];
const my_obj = {
	[Symbol.iterator]: function*()
	{
		for(let index of array){
			yield `${index}`;
		}
	}
};
const all = [...my_obj]
.map(i =>parseInt(i,10))
.map(Math.sqrt)
.filter((i) => i < 5)
.reduce((i, d) => i + d);
console.log(all);







