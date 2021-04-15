Webcam.set({
    width: 300,
    height: 300,
    image_format: 'jpeg',
    jpeg_quality: 90,

    constraints: {
        facingMode : "environment"
    }
});

camera = document.getElementById("cam");
Webcam.attach(camera);

function take_snapshot(){
    Webcam.snap(function (data_uri) {
        document.getElementById("img").innerHTML = "<img src= '" + data_uri + "' id= 'captured_img'>";
    });
}

console.log("Ml5 version", ml5.version);

classifier = ml5.imageClassifier("MobileNet", modelLoaded);

function modelLoaded(){
    console.log("Model Loaded!");
}

function Check(){
image = document.getElementById("captured_img");
classifier.classify(image, gotResult);
}

function gotResult(error, result){
    if(error){
        console.error("Error");
    }

    else{
        console.log(result);
     document.getElementById("result").innerHTML = result[0].label;   
    }
}