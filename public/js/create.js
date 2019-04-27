function submitTopic() {
    let topic = document.getElementById("search-box").value;
    console.log(topic)

    // send topic to backend
    const Http = new XMLHttpRequest();
    const url = 'https://auto-quiz-backend.herokuapp.com/' + topic;
    Http.open("GET", url);
    Http.send();
    Http.onreadystatechange = (e) => {
        console.log(Http.responseText)
    }

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