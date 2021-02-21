import {Author} from "./author"
import {Book} from "./book"
import {Library} from "./library"
const fs = require ('fs')


let author1 = new Author("Becky","Chambers",35, "Science Fiction", false,"EEUU","",)
let book1 = new Book ("Largo viaje a un pequenio planeta iracundo","The Long Way to a Small, Angry Planet", 3,"Insolita Editorial")
let book2 = new Book("Misco","MyBa",1, "Chichi")

// Objetos book y author:
book1.setAuthor(author1) 

//Comprobacion objeto Libreria:

let booksArr: Book[] = [book1,book2]
let miLibreria = new Library(booksArr);

console.log(miLibreria.toString())

//Convertir miLibreria en un JSON:

JSON.stringify(miLibreria);

//Este metodo incluye mi string en un documento. El primer parametro es como voy a nombrar el archivo, el segundo parametro es lo que voy a escribir en el archivo, ojo! porque el metodo es restrictivo. No todo vale. Mira la documentacion.

let writeJson: string = fs.writeFileSync('miLibreria.JSON',JSON.stringify(miLibreria));

//Leer el fichero JSON que he creado y almacenarlo en una instancia de clase IMDB:

//Este metodo leer el archivo que he creado la pega es que no lo leeremos de forma tangible ya que esta en rawdata, es decir si hacemos console log veremos raw hex data.
let readJson: string = fs.readFileSync('miLibreria.JSON');

//Para solucionar el como se lee los datos y leerlos en formato JSON usaremos JSON.parse():

let  miLibreriaOb = JSON.parse(readJson);
console.log(miLibreriaOb);

