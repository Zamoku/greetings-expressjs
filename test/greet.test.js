const assert = require('assert');
const Greetings = require('../greet')
const pgPromise = require("pg-promise");
const { doesNotMatch } = require('assert');
const pgp = pgPromise({})

const connectionString = process.env.DATABASE_URL || 'postgresql://zamoe:zamo123@localhost:5432/greet_db_test';

const db = pgp(connectionString)

            
        describe('The basic database web app', function(){
       

        it('should insert names into the db test', async function(){
            
            // 
            let greetings = Greetings(db);
            let greet = await greetings.objectAdd(
                'Nomzamo'
            );
            
        
            assert.deepEqual([], greet);
        
        });

    it('should pass the db test', async function(){
        
        // 
        let greetings = Greetings(db);
        await greetings.objectAdd(
            "Nomzamo"
        );

        let greet = await greetings.getCounter();
        assert.equal(1, greet);

    });

    it('should get names from the db test', async function(){
        
        // 
        let greetings = Greetings(db);
        let greet = await greetings.getNames();


        assert.equal("Nomzamo","Nomzamo"
          , greet);

    });
    afterEach('Drop temporary tables', async function () {
    //clean the tables before each test run
                await db.query("delete from Users;");
                
            });

});