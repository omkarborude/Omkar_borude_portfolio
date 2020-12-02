// get all with queryselector
var txtinput = document.querySelector("#txt-input")
var btnTranslate = document.querySelector("#btn-translate")
var outputdiv = document.querySelector("#output")

// then define server 
var serverURL = "https://api.funtranslations.com/translate/minion.json";


// then define Function geturl 
function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input
}

// then define function erroehandle
function errorHandler(error) {
    console.log("error occured", error);
    alert("server is down , please try later !! ")
}

//then define function clickHandler 
function clickHandler() {
    var inputText = txtinput.value;
    
    //fetch translationURL 
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputdiv.innerText = translatedText;
    })
    .catch(errorHandler)
};

btnTranslate.addEventListener("click",clickHandler)
