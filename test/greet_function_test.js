const assert = require('assert');
const Greet = require('../greet_function');

describe('greetings function', function () {

    it("should return the greeting message when greeted in English", function () {
        let greetings = Greet();

        greetings.setGreet("Nomzamo", "English")
        assert.equal("Hello, Nomzamo", greetings.setGreet())


        var greetings2 = Greet();
        greetings2.setGreet("Zandile", "English")
        assert.equal("Hello, Zandile", greetings2.getGreetMessage())
    })
    it("should return the greeting message when greeted in IsiXhosa", function () {
        let greetings = Greet();

        greetings.setGreet("Nomzamo", "isiXhosa")
        assert.equal("Molo, Nomzamo", greetings.setGreet())


        var greetings2 = Greet();
        greetings2.setGreet("Zandile", "isiXhosa")
        assert.equal("Molo, Zandile", greetings2.getGreetMessage())
    })
    it("should return the greeting message when greeted in Afrikaans", function () {
        let greetings = Greet();

        greetings.setGreet("Nomzamo", "Afrikaans")
        assert.equal("Hallo, Nomzamo", greetings.setGreet())


        var greetings2 = Greet();
        greetings2.setGreet("Zandile", "Afrikaans")
        assert.equal("Hallo, Zandile", greetings2.getGreetMessage())
    })
});