"use strict"

let Triangle = require('../lib/triangle.js')
let should = require('should');


describe("Triangle", function() {

   it("Inicializacion", function() {
        var type = Triangle
        should.exist(new Triangle({width:15, height:15},type));
   })
  
   it("Calculo del area triangulo", function() {
        var result = new Triangle({width:15, height:15}).area();
        result.should.equal(112.5);
   })
   
});
         