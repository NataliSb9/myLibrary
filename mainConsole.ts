import { Book } from "./book"
import { Author } from "./author"
import { Library } from "./library"
import { write } from "fs";

/*const fs = require('fs')
let author1 = new Author("Becky", "Chambers", 35, "Science Fiction", false, "EEUU", "",)
let book1 = new Book("Largo viaje a un pequenio planeta iracundo", "The Long Way to a Small, Angry Planet", 3, "Insolita Editorial")
let book2 = new Book("Misco", "MyBa", 1, "Chichi")
let booksArr: Book[] = [book1, book2]
let miLibreria = new Library(booksArr);*/

//Pedir por consola propiedades de pelicula:
//para usar prompt tienes que instalarte el siguiente modulo npm install prompt-sync:

const prompt = require('prompt-sync')();
const title: string = prompt('Write a title:');
const originalTitle: string = prompt('Write the original title:');
const edition: number = prompt('Write a edition:');
const editorial: string = prompt('Write the editorial name:')

let bookUser = new Book(title, originalTitle, edition, editorial);

//Introducir el libro creado en el archivo miLibreria.json
let miLibreria: Library = new Library([]);
console.log("*************************")
console.log(miLibreria)
console.log("*************************")
let l : Library = miLibreria.obtenerInstanciaLibreriaPeroBien("miLibreria.json")
console.log("*************************")
console.log(l)
console.log("*************************")
l.addBook(bookUser)
l.escribirEnFicheroJson("miLibreria.json")



