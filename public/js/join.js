//TODO: Complete
//sends user info to server

//placeholder of users and their score, unordered
var users = [["dude1", 12], ["dude2", 4], ["dude3", 0], ["chenyu", 54]]
var score = 0;
var name = "anonymous";

function submitUserInfo() {
    name = document.getElementById("user").value;

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

function triggerEndStats(){
    document.getElementById("sign-in").style.display = "none";
    document.getElementById("question").style.display = "none";
    document.getElementById("stats").style.display="block";
}

function sendEndStats() {
    emitStat(name,score);
}

function publishStats(a) {
    b = a.sort(sortFunction)
    for (var i = 0; i < users.length; i++) {
        nameList = "<li>" + users[i] + "<\i>"
        document.getElementById("final-list").innerHTML += "<li>" + users[i][0] + " " + users[i][1] + "</li>";
    }
}

function showQuestion(question) {
    document.getElementById("sign-in").style.display = "none";
    document.getElementById("question").style.display = "block";
    document.getElementById("current-question").innerText = question[0];
    document.getElementById("correct-answer").innerHTML = "";
    document.getElementById("mc1").disabled = false
    document.getElementById("mc2").disabled = false
    document.getElementById("mc3").disabled = false
    document.getElementById("mc4").disabled = false
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

    let answer = question[1][0];

    document.getElementById("mc1").addEventListener("click", function () {
        checkAnswer(document.getElementById("mc1").innerText, answer, "mc1");
        document.getElementById("mc2").disabled = true
        document.getElementById("mc3").disabled = true
        document.getElementById("mc4").disabled = true
    });
    document.getElementById("mc2").addEventListener("click", function () {
        checkAnswer(document.getElementById("mc2").innerText, answer, "mc1");
        document.getElementById("mc1").disabled = true
        document.getElementById("mc3").disabled = true
        document.getElementById("mc4").disabled = true
    });
    document.getElementById("mc3").addEventListener("click", function () {
        checkAnswer(document.getElementById("mc3").innerText, answer, "mc1");
        document.getElementById("mc2").disabled = true
        document.getElementById("mc1").disabled = true
        document.getElementById("mc4").disabled = true 
    });
    document.getElementById("mc4").addEventListener("click", function () {
        checkAnswer(document.getElementById("mc4").innerText, answer, "mc1");
        document.getElementById("mc2").disabled = true
        document.getElementById("mc3").disabled = true
        document.getElementById("mc1").disabled = true    
    });
}

function showAnswer(msg) {
    document.getElementById("mc1").disabled = true
    document.getElementById("mc2").disabled = true
    document.getElementById("mc3").disabled = true
    document.getElementById("mc4").disabled = true
    document.getElementById("correct-answer").innerHTML = "The correct answer is: " + msg;
}

function checkAnswer(myAnswer, answer, btnID) {
    if (answer == myAnswer) {
        score++;
    }
    else {
        console.log("false")
    }
}