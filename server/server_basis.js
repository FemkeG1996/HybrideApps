var http = require("http");
var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');
var cors = require('cors')
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true })) 

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Game4life',
    database: 'db001'
});

connection.connect(
    function (err) {
        if (err) throw err
        console.log('Verbinding ok met databank')
    }
)

app.post('/query', function (req, res) {
    console.log(req.body);
    var query = req.body.sql;
    connection.query(query, function (error, results, fields) {
        if (error) throw error;
        res.end(JSON.stringify(results)+"\n");
    });
});

var server = app.listen(3100, "localhost", function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Server is aan het luisteren op http://%s:%s", host, port)
});