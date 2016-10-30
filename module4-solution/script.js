var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
for (name in names) {
   var nameStr = names[name];
  if (nameStr.toLowerCase().charAt(0) === 'j') {
     byeSpeaker.speak("J"+nameStr);
  } else {
     helloSpeaker.speak(nameStr);
  }
}
