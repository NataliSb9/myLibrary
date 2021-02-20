import { Author } from "./author"

export class Book {
    public title: string;
    public originalTitle: string;
    public author: Author;
    public edition: number;
    public editorial: string;
    public pageNumber: number;
    public language: string;
    public genre: string;

    constructor(title: string, originalTitle: string, edition: number, editorial: string) {
        this.title = title;
        this.originalTitle = originalTitle;
        this.edition = edition;
        this.editorial = editorial
    }

    public toString(): string {

        let description: string = 
        "* Title: " + this.title + "\n" + 
        "* Edition: " + this.edition + "\n" + 
        "* Original title: " + this.originalTitle + "\n" + 
        "* Editorial: " + this.editorial + "\n" + 
        "* Pge number: " + this.pageNumber + "\n" + 
        "* Language: " + this.language + "\n" + 
        "* Genre: " + this.genre + "\n"

        if (this.author !== undefined) {
            description += "* Writer: " + this.author.toString()
        }
        return description
    }
    public setAuthor(author: Author) {
        this.author = author;
    }
}