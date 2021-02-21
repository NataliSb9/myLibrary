"use strict";
exports.__esModule = true;
var book_1 = require("./book");
var author_1 = require("./author");
var library_1 = require("./library");
var fs = require('fs');
var author1 = new author_1.Author("Becky", "Chambers", 35, "Science Fiction", false, "EEUU", "");
var book1 = new book_1.Book("Largo viaje a un pequenio planeta iracundo", "The Long Way to a Small, Angry Planet", 3, "Insolita Editorial");
var book2 = new book_1.Book("Misco", "MyBa", 1, "Chichi");
var booksArr = [book1, book2];
var miLibreria = new library_1.Library(booksArr);
//Pedir por consola propiedades de pelicula:
//para usar prompt tienes que instalarte el siguiente modulo npm install prompt-sync:
var prompt = require('prompt-sync')();
var title = prompt('Write a title:');
var originalTitle = prompt('Write the original title:');
var edition = prompt('Write a edition:');
var editorial = prompt('Write the editorial name:');
var bookUser = new book_1.Book(title, originalTitle, edition, editorial);
//Introducir el libro creado en el archivo miLibreria.json
miLibreria = miLibreria.obtenerInstanciaLibreria("miLibreria.json");
miLibreria.books.push(bookUser);
miLibreria.escribirEnFicheroJson("miLibreria.json");
