var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})


 var port = process.env.PORT || 3004;

    var server = app.listen(port, function () {
        console.log('Server running at http://127.0.0.1:' + port + '/');
    });