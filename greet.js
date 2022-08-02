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
    //Adding the name to the object {Nomzamo: 2}, {Zeenat: 1}
    function objectAdd(name){
        let regex = /^[a-z]+$/gi
        if(!name && language !== null) return;

        if(!regex.test(name)) return;

        if(object[name] !== undefined){
            object[name]++
        } else {
            object[name] = 1
        }
    }
    //counts how namy times one name is greeted
    function getCounter(name){
        return object[name]
     }
    //Counts each name
    function allCounter(){
        return Object.keys(object).length;
    }
    //get the list of names on second page
     function getNames(){
         return Object.keys(object)
     }
     function clearNmaes(){
        return object
     }

    return{
        setGreet,
        getNames,
        getGreetMessage,
        getCounter,
        clearNmaes,
        objectAdd,
        allCounter
    }
}