const express = require("express");
const app = express();

app.get('/', (req, res) => {
    res.send({ status: 1, message: "homepage" });
})
app.get('/about', (req, res) => {
    res.send({ status: 1, message: "This is my about us page" });
})
app.get('/products', (req, res) => {
    res.send({ status: 1, msg: "this is my products page" })
})
app.listen(4000);