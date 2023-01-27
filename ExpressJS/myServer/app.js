const express = require('express');
const app = express();
const EXP_PORT = 8080;
const rateLimit = require("express-rate-limit");
//const myMw = require("./myMw")

//Seitenaufruf
app.use(express.static('public'));
app.use(express.urlencoded({extendet: true}));


//Ratelimiter
const limiter = rateLimit({
    windowMs: 60 * 1000, // Zeitintervall: 1 Minute
    max: 2000, // Maximal viele Anfragen von einer IP innerhalb Zeitintervall
    message: "Zu viele Anfragen pro Zeit!"
});
app.use(limiter)

//use route 
//app.use("/api/", myMw)



//02 Aufagbe 2
app.get("/meineTestanfrage", (req, res) => {
    // Senden des Textes an den Client
    res.send("Ich habe die Anfrage empfangen!");
});

//02 Aufgabe 3
app.get("/meineTestanfrage*", (req, res) => {
    res.send("Ich habe die Anfrage empfangen!");
});

app.get("/kunde/*", (req, res, next) => {
    res.write("Kunde\n");
    next();
});
    
app.get("/kunde/anfrage", (req, res) => {
    res.write("Kunde und Anfrage");
    res.end();
});

// 02 Aufgabe 4
app.get("/abteilung/:abteilungId/kunde/:kundeID", (req, res) => {
    const {abteilungId, kundeID} = req.params;
    res.send(`Abteilung: ${abteilungId}<br/>Kunde: ${kundeID}`);
});

//* ODER

app.get("/abteilung/:abteilungId/kunde/:kundeID", (req, res) => {
    const {kundeID, abteilungId} = req.params;
    const anrede = req.query.anrede ? req.query.anrede : "";
    console.log(req.query.anrede);
    res.send(`Abteilung: ${abteilungId}<br/>Kunde: ${anrede} ${kundeID}`);
});

// 02 Aufgabe 4 testMessage Form 
app.use(express.urlencoded());
app.post('/testMessage', function (req, res, next) {
    res.send("I received: " + req.body.myMessage);
});

// 02 Aufgabe 5
app.use(express.urlencoded());
app.post('/addnum', function (req, res, next) {
    res.send("Solution: " +(parseInt(req.body.num1) + parseInt(req.body.num2)));
});


//03 Aufgabe 1
app.get("/api/eins", (req, res, next) => {
    res.write("eins");
    res.end();
}) //=> geht

app.get("/api/zwei", (req, res, next) => {
    res.write("zwei");
    res.end();
}) //=> geht

app.get("/test", (req, res, next) => {
    res.write("test");S
    res.end();
})//=> blocked






//! Sever Main
app.listen(EXP_PORT, () => {
    console.log("http://localhost:" + EXP_PORT);
})