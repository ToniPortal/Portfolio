const express = require('express'),
    path = require('path'),
    port = (process.env.PORT || process.env.ALWAYSDATA_HTTPD_PORT || 8100),
    ip = (process.env.IP || process.env.ALWAYSDATA_HTTPD_IP),
    helmet = require("helmet"),
    fs = require('fs');

app = express();

server = app.listen(port, ip, err => {
    err ?
        console.log("Error in server setup") :
        console.log(`Worker ${process.pid} started\nServeur lancer sur: http://localhost:${port}`);
});

app.use('/src', express.static(path.join(__dirname, 'src')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


// server-sent event stream
app.get('/dormir', function (req, res) {
    res.setHeader('Content-Type', 'text/event-stream')
    res.setHeader('Cache-Control', 'no-cache')

    // send a ping approx every 2 seconds
    var timer = setInterval(function () {
        res.write('zzzzzzzz\n')
        res.flushHeaders();
    }, (Math.random() * 1000))

    res.on('close', function () {
        clearInterval(timer)
    })
});


app.get('/', function (req, res) {
    res.render('index.ejs')
})

app.get('/quisuisje', function (req, res) {
    res.render('quisuisje.ejs')
})

app.get('/monparcour', function (req, res) {
    res.render('monparcour.ejs')
})

app.get('/mesproject', function (req, res) {
    res.render('mesproject.ejs')
})

app.get('/veilletechno', function (req, res) {
    res.render('veilletechno.ejs')
})

app.get('/e4', function (req, res) {
    res.redirect('/src/e4tableau.xlsx')
})

app.get('/quack', function (req, res) {
    res.redirect("/src/Quack.mp4");
})

