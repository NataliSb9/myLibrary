import { Book } from "./book"
import { Author } from "./author"
const fs = require('fs')
export class Library {
    public books: Book[];

    constructor(books: Book[]) {
        this.books = books;
    }

    //Metodos
    public toString(): string {
        let resultado: string = ""
        for (let i = 0; i < this.books.length; i++) {
            resultado += this.books[i].toString() + "\n";
        }
        return resultado
    }
    public escribirEnFicheroJson(nombreFichero: string) {
        let miLibreria = JSON.stringify(this)
        fs.writeFileSync(nombreFichero, miLibreria)
    }

    public addBook(book: Book){
        this.books.push(book)
    }

  
    public obtenerInstanciaLibreriaPeroBien(nombreFichero: string): Library {
        let file = fs.readFileSync(nombreFichero);
        let jsonData=  JSON.parse(file);
//Parse hace que el objeto que creo no tengas las caracter'isticas de la clase que creo, crea un objeto sin mas. Por eso tengo que agregar la clase dnetro del metodo
        let result = new Library([])
        result.books = jsonData.books

        return result
    }
}