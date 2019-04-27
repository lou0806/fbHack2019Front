//TODO: Complete
//sends user info to server

//placeholder of users and their score, unordered
var users = []

function submitUserInfo() {
    let userName = document.getElementById("sign-in").value;
    console.log(userName)

    //send userName to server TODO

}

//starts the Questions on the prompt of Creator clicking Start.
//TODO: make this true when Creator clicks Start
//function startQuestions() {
    //when server sends signal to start, hide div "sign-in", display div "question"
//}

//currently displays: "User Score", i.e. "Louis 23"
//Orders list
function sortFunction(a, b) {
    if (a[1] === b[1]) {
        return 0;
    }
    else {
        return (a[1] > b[1]) ? -1 : 1;
    }
}

function displayEndStats() {
    //orders users, passes them back
    users.sort(sortFunction);
    for (var i = 0; i < users.length; i++) {
        nameList = "<li>" + users[i] + "<\i>"
        document.getElementById("final-stats").innerHTML += "<li>" + users[i][0] + " " + users[i][1] + "</li>";
    }
}

var placeHolderScore = 23;

function sendEndStats() {
    document.getElementById("sign-in").style.display = "none";
    document.getElementById("question").style.display = "none";
    document.getElementById("stats").style.display="block";
    name = document.getElementById("user").innerText;
    score = placeHolderScore;
    socket.emit('userScore', [name,score]);
}

function showQuestion(question) {
    document.getElementById("sign-in").style.display = "none";
    document.getElementById("question").style.display = "block";
    document.getElementById("current-question").innerText = question[0];
    document.getElementById("correct-answer").innerHTML = "";
    var min = 0;
    var max = 4;
    var random = Math.floor(Math.random() * (+max - +min)) + +min;
    document.getElementById("mc1").innerText = question[1][random];
    random++;
    random = random % 4;
    document.getElementById("mc2").innerText = question[1][random];
    random++;
    random = random % 4;
    document.getElementById("mc3").innerText = question[1][random];
    random++;
    random = random % 4;
    document.getElementById("mc4").innerText = question[1][random];

    document.getElementById("mc1").addEventListener("click", function () {
        checkAnswer(document.getElementById("mc1").innerText);
    });
    document.getElementById("mc2").addEventListener("click", function () {
        checkAnswer(document.getElementById("mc2").innerText);
    });
    document.getElementById("mc3").addEventListener("click", function () {
        checkAnswer(document.getElementById("mc3").innerText);
    });
    document.getElementById("mc4").addEventListener("click", function () {
        checkAnswer(document.getElementById("mc4").innerText);
    });
}

function showAnswer(msg) {
    document.getElementById("correct-answer").innerHTML = "The correct answer is:" + msg;
}

function checkAnswer(answer) {
    console.log(answer);
}