
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
        "Hi!" in req.body ? res.send("Hi!") :  res.sendStatus(404);

    } catch (error) {
        next(error)
    }
})

app.listen(port, () => {
    console.log(`Listenning on port ${port}`)


});
