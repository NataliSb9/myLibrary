export class Author {
    public name: string;
    public surname: string;
    public age: number;
    public genre: string;
    public isRetired: boolean;
    public nationality: string;
    public awards: string;

    constructor(name: string,surname: string, age: number, genre: string, isRetired: boolean, nationality: string, awards: string,) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.genre = genre;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.awards = awards;
    }

    //Metodos:
    toString(){
        let resultado:string =  "\n"+" - Name: "+ this.name+"\n"+ " - Surname: "+ this.surname+"\n"+" - Age: "+this.age+ "\n" + " - Genre: "+this.genre+ "\n"+ " - Is Retired?: "+this.isRetired+ "\n"+ " - Nationality: "+this.nationality+ "\n"+" - Awards: "+ this.awards+"\n"
        return resultado
        
    }
}