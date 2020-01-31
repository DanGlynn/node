
var express = require('express');
var app = express();
var cors = require('cors');
app.use(cors());



app.get('/api/timestamp/:date_string?', function(req, res){
    var dateParameter = req.params.date_string
    res.json({ date_string: dateParameter })
});