const express = require("express");
const app = express();

app.use(express.json());                // we can use middleware more than one time
let myToken = 12345;
let myPass = 1212;

let checkToken = (req, res, next) => {
    //console.log("Welcome from middleware" , req.url);
    console.log(req.query.token);
    if (req.query.token == "" || req.query.token == undefined) {
        return res.send(
            {
                status: 0,
                msg: "please fill the form correctly"
            }
        )
    }
    if (req.query.token != myToken) {
        return res.send(
            {
                status: 0,
                msg: "could you please fill the form correctly"
            }
        )
    }
    next();
}
app.use((req, res, next) => {
    if (req.query.pass == "" || req.query.pass == undefined) {
        return res.send(
            {
                status: 0,
                msg: "please fill the pwd correctly"
            }
        )
    }
    if (req.query.pass != myPass) {
        return res.send(
            {
                status: 0,
                msg: "pwd is not valid"
            }
        )
    }
    next();
})
app.use(checkToken);    ///middleware

app.get('/', (req, res) => {
    res.send({ status: 1, message: "homepage" });
});
app.get('/about', (req, res) => {
    res.send({ status: 1, message: "This is my about us page API" });
});
app.get('/products', (req, res) => {
    res.send({ status: 1, msg: "this is my products page" });
});
app.get("/about/:id", (req, res) => {                           //here we're using param :id
    let currentId = req.params.id
    res.send("this is more about testimonials" + currentId)
});
app.post("/login", (req, res) => {
    console.log(req.body);
    res.send({
        status: 1,
        msg: "This is login page",
        bodyData: req.body,
        queryData: req.query
    });
});

app.post("/user", (req, res) => {
    res.status(200).json({                            //object
        status: 1,
        msg: "running successfully Woohoooooo!!!!!!!",
        bodyData: req.body,
        queryData: req.query
    });
});
app.listen(4000, () => {
    console.log("the server is running on port 4000 successfully") // it's working fine and showing message in terminal
});  