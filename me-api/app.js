const bodyParser = require("body-parser");

const morgan = require('morgan');
const cors = require('cors');
const express = require("express");
const jwt = require('jsonwebtoken');



const app = express();
var router = express.Router();
const port = 8333;

const index = require('./routes/index.js');
const hello = require('./routes/hello.js');


app.use(cors());
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({extended: true})); // for parsing

// don't show the log when it is test
if (process.env.NODE_ENV !== 'test') {
    // use morgan to log at command line
    app.use(morgan('combined')); // 'combined' outputs the Apache style LOGs
}

// This is middleware called for all routes.
// Middleware takes three parameters.
app.use((req, res, next) => {
    console.log(req.method);
    console.log(req.path);
    next();
});


app.use('/', index);
app.use('/hello', hello);

router.post("/reports",
    (req, res, next) => checkToken(req, res, next),
    (req, res) => reports.addReport(res, req.body));

function checkToken(req, res, next) {
    const token = req.headers['x-access-token'];

    jwt.verify(token, process.env.JWT_SECRET, function(err, decoded) {
        if (err) {
            // send error response
        }

        // Valid token send on the request
        next();
    });
}



app.use((err, req, res, next) => {
    if (res.headersSent) {
        return next(err);
    }

    res.status(err.status || 500).json({
        "errors": [
            {
                "status": err.status,
                "title": err.message,
                "detail": err.message
            }
        ]
    });
});


// Start up server
app.listen(port, () => console.log(`Example API listening on port ${port}!`));


