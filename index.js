const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const Greet = require('./greet');
const flash = require('express-flash');
const session = require('express-session');


const pgPromise = require("pg-promise")
const pgp = pgPromise({})

// SSL connection
let useSSL = false;
let local = process.env.LOCAL || false;
if (process.env.DATABASE_URL && !local) {
    useSSL = true;
}

// which db connection to use
const connectionString = process.env.DATABASE_URL || 'postgresql://zamoe:zamo123@localhost:5432/greet_db';


//connecting database with my connectionstring
const db = pgp({
    connectionString,
    ssl: {
        rejectUnauthorized : false
    }
});

const app = express();
const greetings = Greet(db);


//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

//parse application/json
app.use(bodyParser.json());

app.use(session({
    secret: "my greet secret",
    resave: false,
    saveUninitialized: true
}));

app.use(flash());


app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

//main page sending the greet message
app.get('/', async function (req, res) {
    res.render('index',
        {
            greetMsg: await greetings.getGreetMessage(),
            getCounter: await greetings.getCounter()

        })
})
//
app.post('/greet', async function (req, res) {
    await greetings.setGreet(
        req.body.setName, req.body.langType
    );
    await greetings.objectAdd(req.body.setName)

    let name = req.body.setName
    let language = req.body.langType
    let regex = /^[a-z A-Z]+$/gi


    if (name === "" && !language) {
        req.flash("info", "Please enter name and select language")
    }

    else if (!language) {
        req.flash("info", "Please select language")

    }
    else if (name === "" && language) {
        req.flash("info", "Please add name")

    }
    else if (!regex.test(name)) {
        req.flash("info", "Please enter correct name")

    }
    res.redirect('/')
});

//getting the list of users 
app.get('/greeted', async function (req, res) {
    res.render('greeted', {
        names: await greetings.getNames(),

    })

})

app.get('/actions/:username', async function (req, res) {
    res.render('actions', {

        username: req.params.username,
        namecount: await greetings.personCounter(req.params.username)
    })
})
app.get('/greeted/:username', async function (req, res) {
  
    req.flash('success','You have succesfully deleted the name')
         await greetings.deleteOne(req.params.username)

    res.redirect('/greeted')
})
app.get('/clear', async function (req, res) {
    req.flash('success','You have succesfully removed all names in your table')
     await greetings.clearNames()

    res.redirect('/')
})

const PORT = process.env.PORT || 3027

app.listen(PORT, function () {
    console.log('App started at port:', PORT)

})