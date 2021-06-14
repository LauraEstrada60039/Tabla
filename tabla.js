const users = [
	{
		name: "Daniel",
		age: 25,
		email: "daniel@academlo.com",
		social: [
			{ name: "facebook", url: "facebook/daniel"},
			{ name: "twitter", url: "twitter/daniel"}
		],
		gender: "Male"
	},
	{
		name: "Cesar",
		age: 28,
		email: "cesar@yahoo.com",
		social: [
			{ name: "facebook", url: "facebook/cesar"},
			{ name: "twitter", url: "twitter/cesar"}
		],
		gender: "Male"
	},
	{
		name: "Juan",
		age: 54,
		email: "juan@gmail.com",
		social: [
			{ name: "facebook", url: "facebook/juan"},
			{ name: "twitter", url: "twitter/juan"}
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
		name: "David",
		age: 15,
		email: "david@hotmail.com",
		social: [
			{ name: "facebook", url: "facebook/david"},
			{ name: "twitter", url: "twitter/david"}
		],
		gender: "Male"
	},
	{
		name: "Manfredo",
		age: 23,
		email: "manfredo@gmail.com",
		social: [
			{ name: "facebook", url: "facebook/mafredo"},
			{ name: "twitter", url: "twitter/manfredo"}
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

function createTable(usersList) {
	// iteramos
	for (var i = 0; i < usersList.length; i++) {
		let userEmail = usersList[i].email;
		if (userEmail.endsWith("@academlo.com")) {
			let nuevaFilaTBody = document.createElement("tr");
			tbody.appendChild(nuevaFilaTBody); 

			let userName = document.createElement("td");
			userName.innerText = usersList[i].name;
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

			let userGender = document.createElement("td");
			userGender.innerText = usersList[i].gender;
			nuevaFilaTBody.appendChild(userGender);

		}
	}
}

createTable(users);

























