module.exports = function GreetRoutes(greet, greetFunct) {

    //main page sending the greet message
    async function greetUser(req, res) {

        res.render('index',
            {
                greetMsg: await greetFunct.getGreetMessage(),
                getCounter: await greet.getCounter()

            })
    }


    async function setGreet(req, res) {
        await greetFunct.setGreet(
            req.body.setName, req.body.langType
        );
        await greet.objectAdd(req.body.setName, req.body.langType)

        let name = req.body.setName
        let language = req.body.langType
        let regex = /^[a-z A-Z]+$/gi


        if (name === "" && !language) {
            req.flash("info", "Please enter name and select language")
        }
        //getting the list of users 
        

        else if (!language && name) {
            req.flash("info", "Please select language")
        }
        else if (name === "" && language) {
            req.flash("info", "Please add name")

        }
        else if (!regex.test(name)) {
            req.flash("info", "Please enter correct name")

        }
        res.redirect('/')
    };

    async function showNames(req, res) {
        res.render('greeted', {
            names: await greet.getNames(),
        })

    }

    async function personCounter(req, res) {
        res.render('actions', {

            username: req.params.username,
            namecount: await greet.personCounter(req.params.username)
        })
    }
    async function deleteOne(req, res) {

        req.flash('success', 'You have succesfully deleted the name')
        await greet.deleteOne(req.params.username)

        res.redirect('/greeted')
    }
    async function clearNames(req, res) {
        req.flash('success', 'All names are deleted')
        await greet.clearNames()

        res.redirect('/')
    }
    return {
        greetUser,
        setGreet,
        showNames,
        personCounter,
        deleteOne,
        clearNames
    }

}
