"use strict";
exports.__esModule = true;
exports.Author = void 0;
var Author = /** @class */ (function () {
    function Author(name, surname, age, genre, isRetired, nationality, awards) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.genre = genre;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.awards = awards;
    }
    //Metodos:
    Author.prototype.toString = function () {
        console.log("\n" + "Name: " + this.name + "\n" + "Surname: " + this.surname + "\n" + "Age: " + this.age + "\n" + "Genre: " + this.genre + "\n" + "Is Retired?: " + this.isRetired + "\n" + "Nationality: " + this.nationality + "\n" + "Awards: " + this.awards + "\n");
    };
    return Author;
}());
exports.Author = Author;
