"use strict";

let Triangle = require('../lib/triangle.js')
let should = require('should');


describe("Triangle", function() {

   it("Inicializacion", function() {
        var type = Triangle
        should.exist(new Triangle({width:15, height:15}));
        
   })
  
   it("Calculo del area triangle", function() {
        var result = new Triangle({width:15, height:15}).area();
        result.should.equal(112.5);
   })
   
   it("Soy tipo triangle", function() {
        var result = new Triangle({width:15, height:15}).gettipo();
        result.should.equal('Triangle');
   })
});
         