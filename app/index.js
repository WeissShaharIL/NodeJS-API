
const express = require('express')
const app = express()
const port = 3000;

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

app.listen(port, () => {
    console.log(`Listenning on port ${port}`)


});
