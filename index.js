var proxy = require('express-http-proxy');
var express = require('express');
var app = express();

app.use(express.static('public', {etag: false, maxAge: 86400000}));
//app.use('/proxy', proxy('www.google.com.mx', {https: true}));

app.get('/', function(req, res){
    res.send('hello world');
});

app.listen(80);