module.exports = function GreetFunct() {

    let greetMessage = ''
    let object = {}



    function setGreet(name, language) {
        let actualName = name.charAt(0).toUpperCase() + name.slice(1)
        let regex = /^[a-z]+$/gi

        if (!regex.test(actualName)) return;

        if (actualName === null && language !== null) return;

        if (language === "isiXhosa" && actualName !== "") {
            greetMessage = "Molo, " + actualName
        }
        else if (language === "English" && actualName !== "") {
            greetMessage = "Hello, " + actualName
        }
        else if (language === "Afrikaans" && actualName !== "") {
            greetMessage = "Hallo, " + actualName
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