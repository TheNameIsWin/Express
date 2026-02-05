const express = require("express");
const app = express();

app.use(express.json());
app.get('/', (req, res) => {
    res.send({ status: 1, message: "homepage" });
});
app.get('/about', (req, res) => {
    res.send({ status: 1, message: "This is my about us page" });
});
app.get('/products', (req, res) => {
    res.send({ status: 1, msg: "this is my products page" });
});
app.post("/login", (req, res) => {
    console.log(req);
    res.send({
        status: 1,
        msg: "This is login page",
        bodyData: req.body,
        queryData: req.query
    });
});
app.listen(4000, () => {
    console.log("the server is running on port 4000 sucessfully") // it's working fine and showing msg in terminal
});