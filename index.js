const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const flash = require('express-flash');
const session = require('express-session');
const Greet = require('./greet');
const GreetRoutes = require('./greet_route');
const GreetFunct = require('./greet_function')


const pgPromise = require("pg-promise")
const pgp = pgPromise({})

const GreetService = require('./greet');



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
        rejectUnauthorized: false
    }
});

const app = express();
// const greetings = Greet(db);

const greet = Greet(db);
const greetFunct = GreetFunct()
const greetRoutes = GreetRoutes(greet, greetFunct);

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

app.get('/', greetRoutes.greetUser)
app.post('/greet', greetRoutes.setGreet)
app.get('/greeted', greetRoutes.showNames)
app.get('/actions/:username', greetRoutes.personCounter)
app.get('/greeted/:username', greetRoutes.deleteOne)
app.get('/clear', greetRoutes.clearNames)



const PORT = process.env.PORT || 3027

app.listen(PORT, function () {
    console.log('App started at port:', PORT)

})