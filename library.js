"use strict";
exports.__esModule = true;
exports.Library = void 0;
var Library = /** @class */ (function () {
    function Library(books) {
        this.books = books;
    }
    Library.prototype.toString = function () {
        var resultado = "";
        for (var i = 0; i < this.books.length; i++) {
            resultado = this.books[i].toString();
        }
        return resultado;
    };
    return Library;
}());
exports.Library = Library;
