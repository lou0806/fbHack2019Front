//TODO: Complete
//sends user info to server

//placeholder of users and their score, unordered
var users = [["dude1", 12], ["dude2", 4], ["dude3", 0], ["chenyu", 54]]

function submitUserInfo() {
    let userName = document.getElementById("sign-in").value;
    console.log(userName)

    //send userName to server TODO

}

//starts the Questions on the prompt of Creator clicking Start.
//TODO: make this true when Creator clicks Start
function startQuestions() {
    //when server sends signal to start, hide div "sign-in", display div "question"
}

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

function showQuestion(question) {
    document.getElementById("sign-in").style.display = "none";
    document.getElementById("question").style.display = "block";
    document.getElementById("current-question").innerText = question;
    document.getElementById("correct-answer").innerHTML = "";
}

function showAnswer(msg) {
    document.getElementById("correct-answer").innerHTML = "The correct answer is:" + msg;
}