function start()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/iFuK1WtUW/model.json', modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}
var dog = 0;
var lion = 0;
function gotResults(error, results) {
    if (error) {
        console.error(error);
} else{
    console.log(results);
    

    document.getElementById("sound").innerHTML = results[0].label;
    document.getElementById("accuracy").innerHTML = (results[0].confidence*100).toFixed(0)+'% Accurate';
}
}