import {Author} from "./author"
import {Book} from "./book"

let author1 = new Author("Becky","Chambers",35, "Science Fiction", false,"EEUU","",)
let book1 = new Book("Largo viaje a un pequenio planeta iracundo","The Long Way to a Small, Angry Planet", 3,"Insolita Editorial")

book1.setAuthor(author1) 
console.log(book1.toStringBook())