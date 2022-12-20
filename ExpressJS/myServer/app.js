const express = require('express');
const app = express();
const EXP_PORT = 8080;

//app.get(/\/[^\/]{3}.*/, (req, res) => {
  //  res.send("Anfrage mit mind. drei Zeichen bis zum 1. Slash");
//});

// Verarbeitung aller GET-Anfragen der Route /meineTestanfrage
app.get("/meineTestanfrage", (req, res) => {
    // Senden des Textes an den Client
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

app.get("/abteilung/:abteilungId/kunde/:kundeID", (req, res) => {
    const {abteilungId, kundeID} = req.params;
    res.send(`Abteilung: ${abteilungId}<br/>Kunde: ${kundeID}`);
});






app.listen(EXP_PORT, () => {
    console.log("Ich höre auf Port! " + EXP_PORT);
})