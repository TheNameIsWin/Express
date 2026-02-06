
let myToken = 12345;
let checkToken = (req, res, next) => {
    //console.log("Welcome from middleware" , req.url);
    //console.log(req.query.token);
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

module.exports = { checkToken };