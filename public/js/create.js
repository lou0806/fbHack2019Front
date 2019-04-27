function submitTopic() {
    let topic = document.getElementById("search-box").value;
    console.log(topic)

    // send topic to backend
    const url = 'https://auto-quiz-backend.herokuapp.com/';

    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
        topic: topic
    }));
    xhr.onreadystatechange = function () {
        // If the request completed, close the extension popup
        if (xhr.readyState == 4)
            if (xhr.status == 200) {
                var json_data = xhr.responseText;
                sendQuestions(json_data);
            }
    };

    // generate room key
    function makeid(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    console.log(makeid(4));
}

function startQuiz() {
    sendStart();
}

function showQuestion(question) {
    document.getElementById("sign-in").style.display = "none";
    document.getElementById("question").style.display = "block";
    //TODO: complete
}

function answerReveal() {
    //TODO: complete
    document.getElementById("answer").innerHTML = "placeholder text that would otherwise show the answer";
}

function nextQuestion() {
    //TODO: complete
}