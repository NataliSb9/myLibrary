"use strict";
exports.__esModule = true;
var author_1 = require("./author");
var book_1 = require("./book");
var library_1 = require("./library");
var fs = require('fs');
var author1 = new author_1.Author("Becky", "Chambers", 35, "Science Fiction", false, "EEUU", "");
var book1 = new book_1.Book("Largo viaje a un pequenio planeta iracundo", "The Long Way to a Small, Angry Planet", 3, "Insolita Editorial");
var book2 = new book_1.Book("Misco", "MyBa", 1, "Chichi");
// Objetos book y author:
book1.setAuthor(author1);
//Comprobacion objeto Libreria:
var booksArr = [book1, book2];
var miLibreria = new library_1.Library(booksArr);
//console.log(miLibreria.toString())
//Convertir miLibreria en un JSON:
JSON.stringify(miLibreria);
//Este metodo incluye mi string en un documento. El primer parametro es como voy a nombrar el archivo, el segundo parametro es lo que voy a escribir en el archivo, ojo! porque el metodo es restrictivo. No todo vale. Mira la documentacion.
var writeJson = fs.writeFileSync('miLibreria.json', JSON.stringify(miLibreria));
//Leer el fichero JSON que he creado y almacenarlo en una instancia de clase IMDB:
//Este metodo lee el archivo que he creado la pega que tiene es que no lo leeremos de forma tangible ya que esta en rawdata, es decir si hacemos console log veremos raw hex data.
var readJson = fs.readFileSync('miLibreria.JSON');
//Para solucionar el como se lee los datos y leerlos en formato JSON usaremos JSON.parse():
var miLibreriaOb = JSON.parse(readJson);
//console.log(miLibreriaOb);
console.log(miLibreria.escribirEnFicheroJson("hola.json"));
//miLibreria.obtenerInstanciaLibreria("miLibreria.json")
