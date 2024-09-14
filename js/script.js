// let memberlist =["Lia","Ruma","Smrity","Safa","Nusaiba"]
// function wc(memberName) {
 
//   let utterance = new SpeechSynthesisUtterance(`Welcome  ${memberName}`);
// speechSynthesis.speak(utterance);
// }

 
// for (let i = 0; i < memberlist.length; i++) {
//   wc (memberlist[i]);
   
//  }


let question ="What Is Your Name?"
function questionAns() {
  if(question== "What Is Your Name?"){
    let utterance = new SpeechSynthesisUtterance(`My Name Is Lia Akter`);
    speechSynthesis.speak(utterance);
  }
  else if(question== "What Is Your Age?"){
    let utterance = new SpeechSynthesisUtterance(`My Age Is 20`);
    speechSynthesis.speak(utterance);
  }
}

questionAns()