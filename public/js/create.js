function submitTopic() {
    let topic = document.getElementById("search-box").value;
    console.log(topic)

    // send topic to backend
    const url = 'https://auto-quiz-backend.herokuapp.com/';
    const data = {
        topic: topic
    }

    $.post(url, data, function (data, status) {
        console.log('${data} and status is ${status}')
    });

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