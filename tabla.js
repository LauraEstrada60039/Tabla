const users = [
	{
		name: "Erik",
		age: 28,
		email: "erik@academlo.com",
		social: [
			{ name: "facebook", url: "facebook/erik"},
			{ name: "twitter", url: "twitter/erik"}
		],
		gender: "Male"
	},
	{
		name: "Cesar",
		age: 28,
		email: "erik@yahoo.com",
		social: [
			{ name: "facebook", url: "facebook/erik"},
			{ name: "twitter", url: "twitter/erik"}
		],
		gender: "Male"
	},
	{
		name: "Juan",
		age: 28,
		email: "erik@gmail.com",
		social: [
			{ name: "facebook", url: "facebook/erik"},
			{ name: "twitter", url: "twitter/erik"}
		],
		gender: "Male"
	},
	{
		name: "Erik",
		age: 28,
		email: "erik@academlo.com",
		social: [
			{ name: "facebook", url: "facebook/erik"},
			{ name: "twitter", url: "twitter/erik"}
		],
		gender: "Male"
	},
	{
		name: "Erik",
		age: 28,
		email: "erik@hotmail.com",
		social: [
			{ name: "facebook", url: "facebook/erik"},
			{ name: "twitter", url: "twitter/erik"}
		],
		gender: "Male"
	},
	{
		name: "Erik",
		age: 28,
		email: "erik@gmail.com",
		social: [
			{ name: "facebook", url: "facebook/erik"},
			{ name: "twitter", url: "twitter/erik"}
		],
		gender: "Male"
	}
];


/****************************** INICIAMOS ***********************************/

//Creo un div principal donde estará toda la atabla
let contenedorPrincipal = document.createElement("div");
//atributo del contenedor principal
contenedorPrincipal.setAttribute("id", "contenedor-principal");
/*
//Un texto de prueba
let textoPrueba = "Hola mundo, he nacido C:";
let nuevoContenido = document.createTextNode(textoPrueba);
//añade texto al div creado.
contenedorPrincipal.appendChild(nuevoContenido); 
*/
//Añade el elemento creado y su contenid al DOM 
var referencia = document.getElementById("contenedor-principal");
document.body.insertBefore(contenedorPrincipal, referencia);

/*************** EMPEZAMOS A TRABAJAR LA TABLA ****************/
//Creo la tabla
let tabla = document.createElement("table");
//Agregamos algunos atributos
tabla.setAttribute("id", "tabla");
//Agregamos la tabla dentro del div
contenedorPrincipal.appendChild(tabla);
//Y repetimos el mismo procediminto para la estructura interna de la tabla

//Empezamos con la cabeza de la tabla
let thead = document.createElement("thead");
tabla.appendChild(thead);

//Vamos a insertar el contenido principal de la cabecera
let nuevaFila = document.createElement("tr");
thead.appendChild(nuevaFila); 

//Ahora colocamos cada una de las columnas que compondran a la tabla
let columna1 = document.createElement("th");
let columna2 = document.createElement("th");
let columna3 = document.createElement("th");
let columna4 = document.createElement("th");
let columna5 = document.createElement("th");
//Le coloco el nombre a cada una de las columnas
columna1.innerText = "Nombre";
columna2.innerText = "Edad";
columna3.innerText = "Correo";
columna4.innerText = "Redes sociales";
columna5.innerText = "Sexo";
//Se lo agregamos a la columna 
nuevaFila.appendChild(columna1);
nuevaFila.appendChild(columna2);
nuevaFila.appendChild(columna3);
nuevaFila.appendChild(columna4);
nuevaFila.appendChild(columna5);

//Ahora el cuerpo de la tabla
let tbody = document.createElement("tbody");
tabla.appendChild(tbody);

//Le agregamos su respectiva informacion al cuerpo de la tabla
//creamos su variable de columnas
// let nuevaFilaTBody = document.createElement("tr");

//Vaciamos la informacion en la tabla
// users.forEach((element,index, array) => {
// 	let nuevaFilaTBody = document.createElement("tr");
// 	// console.log(element.name);
// 	//Creamos una fila para los datos
// 	tbody.appendChild(nuevaFilaTBody);
// 	//Ahora manejamos las columnas
// 	users.forEach((element,index, array) => {
// 		columna = document.createElement("td");
// 		columna.innerText = element.name;
// 		nuevaFilaTBody.appendChild(columna);
// 	});	
// 	let i =0;
// 	// let variable = document.createElement("tr");
// 	//Creamos la estructura del tbody con la informacion
// 	// columna.innerText = element.name;
// 	// nuevaFilaTBody.appendChild(columna);
// });

// for (let i = 0; i < users.length; i++) {
// 	let nuevaFilaTBody = document.createElement("tr");
// 	// console.log(element.name);
// 	//Creamos una fila para los datos
// 	tbody.appendChild(nuevaFilaTBody);
// 	//Ahora manejamos las columnas
// 	for (let j = 0; j < users.length; j++) {
// 		//Genera la columna
// 		users[i] = document.createElement("td");
// 		// columna2 = document.createElement("td");
// 		// columna3 = document.createElement("td");
// 		// columna4 = document.createElement("td");
// 		// columna5 = document.createElement("td");
// 		//Escribimos la informacion de la columna
// 		users[i].innerText = users[i].name;
// 		users[i].innerText = users[i].age;
// 		users[i].innerText = users[i].email;
// 		columna4.innerText = users[i].social;
// 		columna5.innerText = users[i].gender;
// 		//Agregamos la columna
// 	}
// 	nuevaFilaTBody.appendChild(columna1);
// 		nuevaFilaTBody.appendChild(columna2);
// 		nuevaFilaTBody.appendChild(columna3);
// 		nuevaFilaTBody.appendChild(columna4);
// 		nuevaFilaTBody.appendChild(columna5);
// }

function createTable(usersList) {
	// console.log(table);
	// iteramos
	for (var i = 0; i < usersList.length; i++) {
		let userEmail = usersList[i].email;
		if (userEmail.endsWith("@academlo.com")) {
			// const element = usersList[i];
			// console.log(element);
			//Vamos a pintar en algun lugar la tabla
			//le decimos que cree un elemnto
			// let newRow = document.createElement("tr");
			let nuevaFilaTBody = document.createElement("tr");
			tbody.appendChild(nuevaFilaTBody); //HAsta aqui pinta solo los tr y lo podemos ver en la onsola

			let userName = document.createElement("td");
			userName.innerText = usersList[i].name; //creamos el elemento y le pusismos teto
			//Se lo agregamos al newrow
			nuevaFilaTBody.appendChild(userName);

			let userEdad = document.createElement("td");
			userEdad.innerText = usersList[i].age;
			nuevaFilaTBody.appendChild(userEdad);

			let userEmail = document.createElement("td");
			userEmail.innerText = usersList[i].email;
			nuevaFilaTBody.appendChild(userEmail);

			let userSocial = document.createElement("td");
			let ul = document.createElement("ul");
			for (let j = 0; j < usersList[i].social.length; j++) {
				let li = document.createElement("li");
				console.log(usersList[i].social[j].url);
				li.innerText = usersList[i].social[j].url;
				ul.appendChild(li);	
			}
			userSocial.appendChild(ul);
			nuevaFilaTBody.appendChild(userSocial);

			// // let userSocial = document.createElement("td");
			// let userSocial = document.createElement("td");
			// let ul = document.createElement("lu");
			
			// for (var j = 0; j < (usersList[i].social).length; j++) {
			// 	let li = document.createElement("li");
				
			// 	// console.log(usersList[i].social[j]);
			// 	li.innerText = usersList[i].social[j];
			// 	// nuevaFilaTBody.appendChild(userSocial);
			// 	// li.appendChild(li)
			// 	ul.appendChild(li);
			// }
			// // nuevaFilaTBody.appendChild(userSocial);
			// userSocial.appendChild(ul);
			// nuevaFilaTBody.appendChild(userSocial);
			// // userSocial.innerText = usersList[i].social;
			// // nuevaFilaTBody.appendChild(userSocial);

			let userGender = document.createElement("td");
			userGender.innerText = usersList[i].gender;
			nuevaFilaTBody.appendChild(userGender);

		}
	}
}

createTable(users);

























