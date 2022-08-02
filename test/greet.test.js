const assert = require('assert');
const Greetings = require('../greet')

describe("This is to test the greet function", function(){
    it("should return the greeting message",function(){
 

        var greetings2 =  Greetings();
        greetings2.setGreet({name: "Zandile", language: "isiXhosa"})
        assert.equal("Molo, Zandile",greetings2.getGreetMessage())
    })
 
    it("should return the counter of greeting",function(){
        var greetings =  Greetings();
        greetings.objectAdd()
        greetings.objectAdd()
        assert.equal(2, greetings.getCounter())


     })

})