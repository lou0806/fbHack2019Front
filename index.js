var express = require('express')
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use('/views', express.static('views'));
app.use('/public', express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/create', function (req, res) {
    res.sendFile(__dirname + '/views/create.html');
});

app.get('/join', function (req, res) {
    res.sendFile(__dirname + '/views/join.html');
});

io.on('connection', function (socket) {
    console.log('an user connected');
    socket.on('disconnect', function () {
        console.log('user disconnected');
    });
    socket.on('allQuestions', function (questions) {
        console.log(questions);
    });
});

http.listen(3000, function () {
    console.log('listening on *:3000');
});