(function (window) {
  var helloSpeaker = {};
  var speakWord = "Hello";
  helloSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
    document.write("<p>"+speakWord + " " + name+"</p>");
  }
  
  window.helloSpeaker = helloSpeaker;
})(window);