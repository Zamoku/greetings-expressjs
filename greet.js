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
        let regex = /^[a-z]+$/gi
        
        if (name === null && language !== null) return;
        
        if(!regex.test(name)) return;
        
        if (language === "isiXhosa" && name !== "") {
            greetMessage = "Molo, " + name
        }
        else if (language === "English" && name !== "") {
            greetMessage = "Hello, " + name
        }
         else if (language === "Afrikaans" && name !== "" ) {
            greetMessage = "Hallo, " + name
        }
       
        return greetMessage
    }
    
    function objectAdd(name){
        let regex = /^[a-z]+$/gi
        if(!name || !regex.test(name) || language !== null) return;
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