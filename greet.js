module.exports = function greet(){

    let greetMessage = ''
    let name = ''
    let language = ''
    let arrayName = {}
    

    function setGreet(obj) {
        name = obj.name
        language = obj.language

    }

    function getCounter(){
        arrayName = setGreet(obj)

        return arrayName.length
    }

    
    function getGreetMessage() {

     
        if (language === "isiXhosa") {
            greetMessage = "Molo, " + name
        }
        if (language === "English") {
            greetMessage = "Hello, " + name
        }
        else if (language === "Afrikaans") {
            greetMessage = "Hallo, " + name
        }
        
        return greetMessage
    }


    return{
        setGreet,
        getGreetMessage,
        getCounter
    }
}