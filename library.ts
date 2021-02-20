import { Book } from "./book"
import { Author } from "./author"

export class Library {
    public books: Book[];

    constructor(books: Book[]) {
        this.books = books;
    }
    public toString(): string {
        let resultado: string = "";
        for (let i = 0; i < this.books.length; i++) {
            resultado = this.books[i].toString();
        }
        return resultado
    }
}