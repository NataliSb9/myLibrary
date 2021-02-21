"use strict";
exports.__esModule = true;
var book_1 = require("./book");
var library_1 = require("./library");
/*const fs = require('fs')
let author1 = new Author("Becky", "Chambers", 35, "Science Fiction", false, "EEUU", "",)
let book1 = new Book("Largo viaje a un pequenio planeta iracundo", "The Long Way to a Small, Angry Planet", 3, "Insolita Editorial")
let book2 = new Book("Misco", "MyBa", 1, "Chichi")
let booksArr: Book[] = [book1, book2]
let miLibreria = new Library(booksArr);*/
//Pedir por consola propiedades de pelicula:
//para usar prompt tienes que instalarte el siguiente modulo npm install prompt-sync:
var prompt = require('prompt-sync')();
var title = prompt('Write a title:');
var originalTitle = prompt('Write the original title:');
var edition = prompt('Write a edition:');
var editorial = prompt('Write the editorial name:');
var bookUser = new book_1.Book(title, originalTitle, edition, editorial);
//Introducir el libro creado en el archivo miLibreria.json
var miLibreria = new library_1.Library([]);
console.log("*************************");
console.log(miLibreria);
console.log("*************************");
var l = miLibreria.obtenerInstanciaLibreria("miLibreria.json");
console.log("*************************");
console.log(l);
console.log("*************************");
l.addBook(bookUser);
l.escribirEnFicheroJson("miLibreria.json");
