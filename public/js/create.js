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

    sendQuestions("questions");

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