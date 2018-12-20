var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var http = require('http').Server(app)

app
  .use(express.static(__dirname + '/'))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))

  http.listen(process.env.PORT || 5000, function () {
    console.log('listening on http://localhost:5000/')
  })