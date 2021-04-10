Prediction_1 = "";

Webcam.set ({
    width: 350,
    height:350,
    image_format:'png',
    png_quality: 1080
});
camera = document.getElementById("camera");
Webcam.attach ('#camera');
function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
    });
}
console.log('ml5 version:', ml5.version);
  
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/0JJFP0AJc/model.json',modelLoaded);

  function modelLoaded() {
    console.log('Model Loaded!');
  }
function speak() {
    var synth = window.speechSynthesis;
    speak_data_1 = "The prediction is " + Prediction_1;
    var utterThis = new SpeechSynthesisisUtterant(speak_data_1);
    synth.speak(utterThis);
}
function check() {
  img = document.getElementById('captured_image');
  classifier.classify(img, gotReasult);
}
function gotReasult(error,results){
  if(error) {
    console.error(error);
  }
  else {
    console.log(results);
    document.getElementById("result_emotion_name").innerHTML = results[0].label;
    document.getElementById("result_emotion_name2").innerHTML = results[1].label;
    prediction_1= results[0].label;
    prediction_2= results[1].label;
    speak();
    if (results[0].label == "Smile") {
      document.getElementById("update_emoji").innerHTML = "&#128512";
    }  
    if (results[0].label == "Angry") {
      document.getElementById("update_emoji").innerHTML = "&#128545";
    }  
    if (results[0].label == "Sad") {
      document.getElementById("update_emoji").innerHTML = "&#128532";
    }  
    if (results[1].label == "Smile") {
      document.getElementById("update_emoji2").innerHTML = "&#128512";
    }  
    if (results[1].label == "Angry") {
      document.getElementById("update_emoji2").innerHTML = "&#128545";
    }  
    if (results[1].label == "Sad") {
      document.getElementById("update_emoji2").innerHTML = "&#128532";
    }  
  }
  
}