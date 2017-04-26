"use strict";

let Shape = require('@alu0100813272/ull-shape-jairo');



 /**
 * Clase para representar un Triangle de tipo shape.
 */
class Triangle extends Shape {
   
    /**
 * Método Constructor de una Triangle
 *
 * @param {object} options Bloque de código.
 * @param {width} options.width Anchura de la figura.
 * @param {height} options.height Altura de la figura.
 */ 
    constructor(options) {
      super(options,"Triangle")
    }
/**
 * Método area de una Triangle.
 *
 * @return {int} retorna el valor del area de un triangle.
 * 
 */ 
    area() {
      return 0.5 * this.width * this.height;
    }
    
    gettipo(){
        return "Triangle"
;    }
}
Shape.Shapes.Triangle = Triangle;
module.exports = Triangle;
