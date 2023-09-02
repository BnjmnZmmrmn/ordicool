// express allows for simple routing
const express = require('express')
const app = express()
app.use(express.static('public'));
app.use(express.static('assets'))
// path to handle pathing to html files
const path = require('path')
// http for hosting the server
const server = require('http').createServer(app)
// port for hosting
const port = 3000

/* Sample routing with express
app.get('<url path>', (req, res) => {
    res.sendFile(path.join(__dirname, '<path to html file>'))
})
*/
  
// index page routing
app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
})

// 404 page
app.get('*', (req, res) => {
    res.status(404).sendFile(path.join(__dirname, '/public/404.html'))
})

// server hosting on localhost:<port>
server.listen(port, () => {
    console.log("listening on " + port)
})