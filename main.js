var reconocevoz = window.webkitSpeechRecognition;

var reconocimiento = new reconocevoz();

var textbox = document.getElementById("texto");

function iniciar() {
    textbox.innerHTML = "";
    reconocimiento.start()
}

reconocimiento.onresult = function(event) {
    console.log(event);
    var contenido = event.results[0][0].transcript;
    textbox.innerHTML = contenido;
    console.log(contenido);
    if(contenido=="selfie") {
        hablar();
    }
}

function hablar() {
    var voz = window.speechSynthesis;
    vozia = "Tomando tu selfi en 5 segundos";
    var usarvoz = new SpeechSynthesisUtterance(vozia);
    Webcam.attach(camara);
    voz.speak(usarvoz);
    setTimeout(function()  {
        tomarselfi();
        guardar();
    }, 5000);
}

camara = document.getElementById("camara");

Webcam.set({
    width: 360, height: 250, image_format:'png',png_quality:90
});


function tomarselfi() {
    Webcam.snap(function(data_uri){
        document.getElementById("resultado").innerHTML = '<img id="selfi" src = " '+data_uri+'"/>';
    });
}

function guardar() {
    link= document.getElementById("link");
    image = document.getElementById("selfi").src;
    link.href = image;
    link.click();
}