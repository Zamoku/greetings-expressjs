module.exports = function greet(){

    let greetMessage = ''
    let name = ''
    let language = ''
    let object = {}
    

    function setGreet(obj) {
        name = obj.name
        language = obj.language

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
    
    function objectAdd(name){
        if(object[name] !== undefined){
            object[name]++
        } else {
            object[name] = 1
        }
    }
    
    function getCounter(name){
        return object[name]
     }

    function allCounter(){
        return Object.keys(object).length;
    }

     function getNames(){
         return Object.keys(object)
     }

    return{
        setGreet,
        getNames,
        getGreetMessage,
        getCounter,
        objectAdd,
        allCounter
    }
}