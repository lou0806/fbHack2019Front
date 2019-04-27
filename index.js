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

var allQuestions = [];
let questionIndex = 0;

function storeQuestions(questions) {
    allQuestions = questions
}

io.on('connection', function (socket) {
    console.log('an user connected');
    socket.on('disconnect', function () {
        console.log('user disconnected');
    });
    socket.on('start', function () {
        questionIndex = 0;
        if (Object.keys(allQuestions).length > questionIndex) {
            io.sockets.emit('question', allQuestions[questionIndex][0]);
            console.log("emit questions");
            questionIndex++;
        } else {
            // go to end screen
        }
    })
    socket.on('allQuestions', function (questions) {
        questions = JSON.parse(questions);
        console.log(questions);
        console.log(questions["0"][0]);
        storeQuestions(questions)
    });
});

http.listen(3000, function () {
    console.log('listening on *:3000');
});