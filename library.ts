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

    public obtenerInstanciaLibreria(nombreFichero: string): Library {

        let file = fs.readFileSync(nombreFichero);
        let libreria: Library = JSON.parse(file);

        return libreria
    }
}