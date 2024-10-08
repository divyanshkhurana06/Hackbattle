const express = require('express');
const app = express()
const port = 8000

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static(__dirname + '/public'));

app.get('/login', (req, res) => {
  res.render('login')
})

app.get('/home1', (req, res) => {
    res.render('home1')
})

app.get('/lostandfound', (req, res) => {
    res.render('lostandfound')
})

app.get('/profile1', (req, res) => {
    res.render('profile1')
})

app.get('/reportproblem', (req, res) => {
    res.render('reportproblem')
})

app.get('/middle1', (req, res) => {
    res.render('middle1')
})

app.get('/message1', (req, res) => {
    res.render('message1')
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})