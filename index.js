var express = require('express')
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use('/views', express.static('views'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/views/index.html');
});

io.on('connection', function (socket) {
    console.log('an user connected');
    socket.on('disconnect', function () {
        console.log('user disconnected');
    });
});

http.listen(3000, function () {
    console.log('listening on *:3000');
});