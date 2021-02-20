"use strict";
exports.__esModule = true;
var author_1 = require("./author");
var book_1 = require("./book");
var author1 = new author_1.Author("Becky", "Chambers", 35, "Science Fiction", false, "EEUU", "");
var book1 = new book_1.Book("Largo viaje a un pequenio planeta iracundo", "The Long Way to a Small, Angry Planet", 3, "Insolita Editorial");
book1.setAuthor(author1);
console.log(book1.toStringBook());
