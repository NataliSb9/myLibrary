"use strict";
exports.__esModule = true;
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(title, originalTitle, edition, editorial) {
        this.title = title;
        this.originalTitle = originalTitle;
        this.edition = edition;
        this.editorial = editorial;
    }
    Book.prototype.toString = function () {
        var resultado = "\n" + "* Title: " + this.title + "\n" + "* Writer: " + this.author.toString() + "\n" + "* Edition: " + this.edition + "\n" + "* Original title: " + this.originalTitle + "\n" + "* Editorial: " + this.editorial + "\n" + "* Pge number: " + this.pageNumber + "\n" + "* Language: " + this.language + "\n" + "* Genre: " + this.genre + "\n";
        return resultado;
    };
    Book.prototype.setAuthor = function (author) {
        this.author = author;
    };
    return Book;
}());
exports.Book = Book;
