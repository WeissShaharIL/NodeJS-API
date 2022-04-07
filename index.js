
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
         //add check to see that it has the string "Hi!"

           res.send("Hi!")


    } catch (error) {
        next(error)
    }
})

app.listen(port, () => {
    console.log(`Listenning on port ${port}`)


});

//app.listen(3000)

//curl -X POST --data 'Hi!' http://localhost:3000