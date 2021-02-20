import {Author} from "./author"
import {Book} from "./book"
import {Library} from "./library"


let author1 = new Author("Becky","Chambers",35, "Science Fiction", false,"EEUU","",)
let book1 = new Book ("Largo viaje a un pequenio planeta iracundo","The Long Way to a Small, Angry Planet", 3,"Insolita Editorial")
let book2 = new Book("Misco","MyBa",1, "Chichi")

// Objetos book y author:
book1.setAuthor(author1) 
//console.log(book1.toStringBook())

//Objeto Libreria:

let booksArr: Book[] = [book1,book2]
let miLibreria = new Library(booksArr);

console.log(book2.toString())