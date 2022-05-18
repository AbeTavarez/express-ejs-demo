const express = require('express')
const path = require('path')
// const ejs = require('ejs')

const app = express()

const PORT = 3000;

app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'views'))

app.get('/', (req, res) => {
    console.log(`Got a new request!`);
    // res.send(`Hello`)
    res.render('homePage', {user: 'Abe'})
})

app.get('/hobbies', (req, res) => {
    res.render('hobbiesPage', {hobbies: ['coding', 'swimming'] })
})

app.listen(PORT, () => {
    console.log(`Server running on : ${PORT}...`);
})