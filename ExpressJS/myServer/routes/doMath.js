//03 Aufgabe 3

const express = require('express');
const router = express.Router();

router.get("/add/:x/:i/", (req, res, next) => {
    const {x, i} = req.params;
    req.send(`${parseInt(x) + parseInt(i)}`);
})

router.get("/sub/:x/:i/", (req, res, next) => {
    const {x, i} = req.params;
    req.send(`${parseInt(x) - parseInt(i)}`);
})

router.get("/mul/:x/:i/", (req, res, next) => {
    const {x, i} = req.params;
    req.send(`${parseInt(x) * parseInt(i)}`);
})

router.get("/div/:x/:i/", (req, res, next) => {
    const {x, i} = req.params;
    req.send(`${parseInt(x) / parseInt(i)}`);
})

module.exports = router;