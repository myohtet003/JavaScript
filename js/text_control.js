fonts = ["Josefin Sans","Oswald","PT Sans"];
//selectors
// font-family: 'Josefin Sans', sans-serif;
// font-family: 'Oswald', sans-serif;
// font-family: 'PT Sans', sans-serif;

const output = document.querySelector("#output");
const text = document.querySelector("#text");
const count = document.querySelector("#count");
const color = document.querySelector("#color");
const fontSize = document.querySelector("#fontSize");
const fontFamily = document.querySelector("#fontFamily");
const textToSpeak = document.querySelector("#textToSpeak");
const speechToText = document.querySelector("#speechToText")
const synth = window.speechSynthesis;

const listen = () => {
    var recognition = new webkitSpeechRecognition();
  
    // Set the language and start recognizing
    recognition.lang = "en-US";
    
    recognition.start();
  
    recognition.addEventListener("start", (event) => {
        speechToText.classList.add("active");
        speechToText.innerHTML = `<div class="spinner-border text-white spinner-border-sm" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>`;
    console.log(event.target);
    });
  
    recognition.addEventListener("end", () => {
        speechToText.classList.remove("active");
  
        speechToText.innerHTML = `<i class="bi bi-mic"></i>`;
    });
  
    // When a speech result is returned
    recognition.onresult = function (event) {
      // Get the transcript of the spoken words
    //   console.log(event.results);
      var transcript = event.results[0][0].transcript;
      text.value += transcript;
    };
  };

 const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance();
    utterance.rate = 0.7;
    utterance.text = text;
    utterance.voice = synth.getVoices()[2];

    utterance.addEventListener("start",() => {
        textToSpeak.classList.add("active");
    });

    utterance.addEventListener("end",() => {
        textToSpeak.classList.remove("active");
    });

    synth.speak(utterance);
  };

fonts.forEach(font => {
    fontFamily.append(new Option(font,font))
});

//text ko pyan htote pay tar
text.addEventListener("keyup", (event) => {
     output.innerText = text.value;
     count.innerText = text.value.length;
})

color.addEventListener("change", event => {
    output.style.color = event.target.value;
})

fontSize.addEventListener("change", event => {
    output.style.fontSize = event.target.value + "px";
});

fontFamily.addEventListener("change", event => {
    output.style.fontFamily = fontFamily.value;
});

textToSpeak.addEventListener("click",( ) => {
    speak(text.value);
});

speechToText.addEventListener("click", listen);
