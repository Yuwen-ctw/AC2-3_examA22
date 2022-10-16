// include express and handlebars
const express = require('express')
const exphbs = require('express-handlebars')

const app = express()
// server setting
const port = 3000
const hostname = 'localhost'
// set view engine and layout
app.set('view engine', 'handlebars')
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
// routes setting
app.get('/', (req, res) => {
  res.render('index')
})
app.get('/about', (req, res) => {
  res.render('about')
})
app.get('/portfolio', (req, res) => {
  res.render('portfolio')
})
app.get('/contact', (req, res) => {
  res.render('contact')
})

// run server
app.listen(port, hostname, () => {
  console.log(`Sever is running on ${hostname}:${port}`)
})
