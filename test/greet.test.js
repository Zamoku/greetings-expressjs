const assert = require('assert');
const Greetings = require('../greet')
const pgPromise = require("pg-promise")
const pgp = pgPromise({})

const connectionString = process.env.DATABASE_URL || 'postgresql://zamoe:zamo123@localhost:5432/greet_db_test';

const db = pgp(connectionString)

// describe("This is to test the greet function", function(){
    
    
//     it("should return the greeting message", async function(){
 

//         var greetings2 =  Greetings();
//         greetings2.setGreet({name: "Zandile", language: "isiXhosa"})
//         assert.equal("Molo, Zandile",greetings2.getGreetMessage())
//     })
 
//     it("should return the counter of greeting",async function(){
//         var greetings =  Greetings();
//         greetings.objectAdd()
//         greetings.objectAdd()
//         assert.equal(2, greetings.getCounter())

//      })
// })

describe('The basic database web app', function(){

    beforeEach(async function(){
        // clean the tables before each test run
        await db.query("delete from Users;");
       
    });

    it('should pass the db test', async function(){
        
        // the Factory Function is called CategoryService
        let greetings = Greetings(db);
        await greetings.objectAdd({
            name : "Nomzamo"
        });

        let greet = await greetings.getCounter();
        assert.equal(1, greet);

    });

    beforeEach(async function(){
        // clean the tables before each test run
        await db.query("delete from Users;");
       
    });

    it('should pass the db test', async function(){
        
        // the Factory Function is called CategoryService
        let greetings = Greetings(db);
        await greetings.objectAdd({
            name : "Nomzamo"
        });

        let greet = await greetings.getCounter();
        assert.equal(1, greet);

    });

});