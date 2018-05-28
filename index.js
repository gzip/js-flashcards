var express = require('express');
var app = express();

app.use(express.static('public', {etag: false, maxAge: 86400000}));
app.listen(80);