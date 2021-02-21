"use strict";
exports.__esModule = true;
exports.Library = void 0;
var fs = require('fs');
var Library = /** @class */ (function () {
    function Library(books) {
        this.books = books;
    }
    //Metodos
    Library.prototype.toString = function () {
        var resultado = "";
        for (var i = 0; i < this.books.length; i++) {
            resultado += this.books[i].toString() + "\n";
        }
        return resultado;
    };
    Library.prototype.escribirEnFicheroJson = function (nombreFichero) {
        var miLibreria = JSON.stringify(this);
        fs.writeFileSync(nombreFichero, miLibreria);
    };
    Library.prototype.obtenerInstanciaLibreria = function (nombreFichero) {
        var file = fs.readFileSync(nombreFichero);
        var libreria = JSON.parse(file);
        return libreria;
    };
    return Library;
}());
exports.Library = Library;
