'use strict';
const express = require('express');
// Constants
const PORT = 8080;

// App
const app = express();

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.use((req, res, next) => {
    console.log(new Date(), req.url, req.method)

    next()
})


app.post('/', (req, res, next) => {
    try {
        "Hi!" in req.body ? res.send("Hi!") :   console.log("Not a good request");

    } catch (error) {
        next(error)
    }
})


app.listen(PORT, () =>{
console.log(`Listenning on port:${PORT}`)

});


