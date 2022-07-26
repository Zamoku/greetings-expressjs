const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const Greet = require('./greet')
const flash = require('express-flash');
const session = require('express-session');



const app = express();
const greet = Greet();

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

//parse application/json
app.use(bodyParser.json());

app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.render('index',
        {
            greetMsg: greet.getGreetMessage(),
            getCounter: greet.getCounter()
        })
})

app.post('/greet', function (req, res) {
    greet.setGreet({
        name: req.body.setName,
        language: req.body.langType,
    });
    greet.objectAdd()
    console.log(greet.getGreetMessage())
    console.log(greet.getCounter())
    res.redirect('/')
})



const PORT = process.env.PORT || 3000

app.listen(PORT, function () {
    console.log('App started at port:', PORT)
})