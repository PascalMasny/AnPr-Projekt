const express = require('express');
const app = express();
const EXP_PORT = 8080;

app.use(express.static('public'));
app.use(express.urlencoded({extendet: true}));



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






//! Sever Main
app.listen(EXP_PORT, () => {
    console.log("Ich höre auf Port! " + EXP_PORT);
})