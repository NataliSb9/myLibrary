"use strict";
exports.__esModule = true;
var author_1 = require("./author");
var book_1 = require("./book");
var library_1 = require("./library");
var author1 = new author_1.Author("Becky", "Chambers", 35, "Science Fiction", false, "EEUU", "");
var book1 = new book_1.Book("Largo viaje a un pequenio planeta iracundo", "The Long Way to a Small, Angry Planet", 3, "Insolita Editorial");
var book2 = new book_1.Book("Misco", "MyBa", 1, "Chichi");
// Objetos book y author:
book1.setAuthor(author1);
//console.log(book1.toStringBook())
//Objeto Libreria:
var booksArr = [book1, book2];
var miLibreria = new library_1.Library(booksArr);
console.log(miLibreria.toString());
