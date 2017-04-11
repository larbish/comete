var express = require('express');
var app = express();
var router = express.Router();

app.use(express.static(__dirname + '/app'));

app.listen(process.env.PORT || 5000);
