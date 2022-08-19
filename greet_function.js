module.exports = function GreetFunct() {

    let greetMessage = ''
    // let name = ''
    // let language = ''
    let object = {}



    function setGreet(name, language) {
        let regex = /^[a-z]+$/gi

        if (!regex.test(name)) return;

        if (name === null && language !== null) return;

        if (language === "isiXhosa" && name !== "") {
            greetMessage = "Molo, " + name
        }
        else if (language === "English" && name !== "") {
            greetMessage = "Hello, " + name
        }
        else if (language === "Afrikaans" && name !== "") {
            greetMessage = "Hallo, " + name
        }

        return greetMessage
    }

    function getGreetMessage() {
        return greetMessage;

    }

    return {
        setGreet,
        getGreetMessage
    }

}