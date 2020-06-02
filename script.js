var partsOfSpeach = ["noun","verb","adjective","adverb","prepositon", "proper-noun","interjection","plural-noun","plural-verb"];
var oldSentence = null;
var sentence = [];
var replacments =0;
var newSentence= null;
var preSentence = [];
function main() { 
  var again = true;
  while (again == true) {
    oldSentence = null;
    sentence = [];
    replacments =0;
    newSentence= null;
    preSentence = [];
    sentenceRead();
    playerPopulate();
    displayResult();
    again = confirm("would you like to play again?");
  }
  alert("thank you for playing madlibs.");
}
function sentenceRead() {
  let tChar = ("S");
  let cCount = 0;
  while(tChar !="%"){
    tChar=fileString.charAt(cCount);
    if(tChar=="%"){
      oldSentence = fileString.slice(0,cCount-1);
      preSentence=fileString.slice(cCount+1);
    }
    cCount++;
  }
  sentence=preSentence.split(" ");
  for(let i=0; i>replacments;){
    if(partsOfSpeach.includes(sentence(i))){
      replacments++;
    }
  }
  return replacments;
}
function playerPopulate(){
  for (let i = 0; i < sentence.length; i++) {
    let newWord=("");
    let word = sentence[i];
    if(partsOfSpeach.includes(word)){
      newWord=prompt("Enter a " +word+ " and preserve puncuation!");
      sentence[i]=newWord;
    }
  }
}

function displayResult() {
  newSentence = sentence.join(" ");
  alert("get the Author, then press OK or enter to see new sentence");
  alert(newSentence);
  newSentence.readAsText
}