const assert = require('assert');
const Greetings = require('../greet')

describe("This is to test the greet function", function(){
    it("should return the greeting message",function(){
        // var greetings =  Greetings();
        
        // greetings.setGreet("Nomzamo")
        // assert.equal("Nomzamo",greetings.setGreet())


        var greetings2 =  Greetings();
        greetings2.setGreet({name: "Zandile", language: "isiXhosa"})
        assert.equal("Molo, Zandile",greetings2.getGreetMessage())
    })
    // it("should return the greeting message",function(){
    //     var greetings =  Greetings();
        
    //     greetings.setGreetMessage()
    //     assert.equal("Hello, Nomzamo",greetings.getGreetMessage())


    //     var greetings2 =  Greetings();
    //     greetings2.setGreetMessage("Zandile", "Afrikaans")
    //     assert.equal("Hallo, Zandile",greetings2.getGreetMessage())
    // })
    it("should return the counter of greeting",function(){
        var greetings =  Greetings();
        greetings.setGreet({name: "Zandile", language: "isiXhosa"})
        greetings.setGreet({name: "Zandile", language: "isiXhosa"})
       // greetings.countGreet();
        assert.equal(2,greetings.getCounter())



    //     var greetings2 =  Greetings();
    //     greetings2.setGreet("Nomzamo")
    //     greetings2.setGreet("Zamo")
    //     greetings2.setGreet("Vuyokazi")
    //     assert.equal(3,greetings2.getCounter())

     })
//     it("should return an error message if the name added with special characters",function(){
//         // var greetings =  Greetings();
//         // greetings.setGreet("Nomzamo");
//         // assert.equal("Please enter the correct name", greetings.checkName())

//         var greetings =  Greetings();
//      //   greetings.checkName("Sinazo");
//         assert.equal("Please enter the correct name", greetings.checkName("Luvo,"))


//    })
//    it("should return an error message if the name added with numbers",function(){
//     // var greetings =  Greetings();
//     // greetings.setGreet("Nomzamo");
//     // assert.equal("Please enter the correct name", greetings.checkName())

//     var greetings =  Greetings();
//     //   greetings.checkName("Sinazo");
//     assert.deepEqual("Please enter the correct name", greetings.checkName("123"))


//     })
//      it("should check for duplicates",function(){
//             var greetings =  Greetings();
//             greetings.setGreet("Nomzamo")
//             greetings.setGreet("Nomfundo")
//             assert.deepEqual("You have already added the name", greetings.checkForDuplicate("Nomzamo"))
            


//             // var greetings2 =  Greetings();
//             // greetings2.setGreet("Nomzamo, Nomfundo")
//             // //greetings2.setDuplicate("Nomfundo")
//             // assert.equal(false, greetings2.checkForDuplicate())
//      })
//      it("should return an error message if the langauge is not selected",function(){
//         var greetings =  Greetings();
//         assert.deepEqual("Please select language", greetings.checkLanguagechecked(""))
        

//         // var greetings2 =  Greetings();
//         // greetings2.setGreet("Nomzamo, Nomfundo")
//         // //greetings2.setDuplicate("Nomfundo")
//         // assert.equal(false, greetings2.checkForDuplicate())
//  })

//  it("should return an error message if there is no name added on the texbox for name",function(){
//     var greetings =  Greetings();
//     assert.deepEqual("Please enter the name", greetings.checkEmptyName(""))
    

//     // var greetings2 =  Greetings();
//     // greetings2.setGreet("Nomzamo, Nomfundo")
//     // //greetings2.setDuplicate("Nomfundo")
//     // assert.equal(false, greetings2.checkForDuplicate())
// })

   
    

})