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
            getCounter: greet.allCounter()
        })
})

app.post('/greet', function (req, res) {
    greet.setGreet({
        name: req.body.setName,
        language: req.body.langType,
    });
    greet.objectAdd(req.body.setName)

    res.redirect('/')
});

app.get('/greeted', function (req, res) {
    res.render('greeted', {
        actions: greet.getNames()
    })

})

app.get('/actions/:username', function (req, res) {
    res.render('actions', {
        username: req.params.username,
        namecount: greet.getCounter(req.params.username)
    })
})


const PORT = process.env.PORT || 3000

app.listen(PORT, function () {
    console.log('App started at port:', PORT)
})