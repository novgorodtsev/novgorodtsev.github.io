(function (window) {
  var byeSpeaker = {};
  var speakWord = "Good Bye";
  byeSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
    document.write("<p>"+speakWord + " " + name+"</p>");
  }
  
  window.byeSpeaker = byeSpeaker;
})(window);