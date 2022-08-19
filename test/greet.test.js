const assert = require('assert');
const Greetings = require('../greet')
const pgPromise = require("pg-promise");
// const { doesNotMatch } = require('assert');
const pgp = pgPromise({})

const connectionString = process.env.DATABASE_URL || 'postgresql://zamoe:zamo123@localhost:5432/greet_db_test';

const db = pgp(connectionString)

            
        describe('The basic database web app', function(){
       

        it('should insert names into the db test', async function(){
            
            
            let greetings = Greetings(db);
            let greet = await greetings.objectAdd(
                'Nomzamo'
            );

            let greet2 = await greetings.objectAdd(
                'Mavusi'
            );
            
            assert.deepEqual([], greet);
            assert.deepEqual([], greet2);
        
        });

    it('should get the number of names counted db test', async function(){
        
        // 
        let greetings = Greetings(db);
        await greetings.objectAdd('Nomzamo'
        );

        let greetings2 = Greetings(db);
        await greetings2.objectAdd('Zandile'
        );

        let greetings3 = Greetings(db);
        await greetings3.objectAdd('Yonela'
        );


        let greet = await greetings.getCounter();
        assert.equal(3, greet);

    });

    it('should get names from the db test', async function(){
        
        // 
        let greetings = Greetings(db);
        let greet = await greetings.getNames();


        assert.equal("Nomzamo","Nomzamo"
          , greet);

    });
    it('should get greet message from the db test', async function(){
        
        // 
        let greetings = Greetings(db);
        let greet = await greetings.setGreet("Nomzamo","isiXhosa");

        let greeting = await greetings.getGreetMessage()
        assert.equal("Molo, Nomzamo"
          , greeting);

    });

    it('should delete the name given from the db test', async function(){
        
        // 
        let greetings = Greetings(db);
        let greet = await greetings.deleteOne("Nomzamo");


        assert.equal(undefined
          , greet);

    });

    afterEach('Drop temporary tables', async function () {
    //clean the tables before each test run
                await db.query("delete from Users;");
                
            });

});