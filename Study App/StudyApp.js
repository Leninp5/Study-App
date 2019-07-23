var btn = document.getElementById('newCard');
    btn.addEventListener("click", newCard);

var study_Card = '<div class="flip-card"><div id="flip-card-inner"><div id="flip-card-front"><h2 id="def"></h2><br><h3 id="def2"></h3></div><div id="flip-card-back"><p id="cardDefinition"></p></div></div></div><br><div id="buttons"><button type="button" id="term-button" class="btn-btn-outline-success" onclick="termButton()">Term</button><button type="button" id="definition-button" class="btn-btn-outline-success" onclick="definitionButton()">Definition</button><button type="button" id="next-button" class="btn-btn-outline-success" onclick="nextButton()">Next</button><button type="button" id="back-button" class="btn-btn-outline-success"onclick="backButton()">Back</button><br><button type="button" id="create-button" class="btn-btn-outline-success" onclick="createButton()">Create</button></div>';
var flashArr = [];
var i = 0;

function Card(termValue , definitionValue){
    this.termValue = document.getElementById('term').value;
    this.definitionValue = document.getElementById('definition').value;

    
    
}

    function newCard(){
        
        var newCard = '<form id="form"> Term<br> <input type="text" name="term" id="term"><br>Definition<br> <textarea name="definition" id="definition" rows="10" cols="30"></textarea><br> <button type="submit" action="submitForm()"  id="submit-Form" class="btn-btn-outline-success" >Submit</button><button type="button" onclick="study()" class="btn-btn-outline-success" >Study</button></form>';
            document.getElementById('new-or-study').innerHTML = newCard; 

        var submit_Form = document.getElementById('submit-Form');
            submit_Form.addEventListener('click', submitForm);

        function submitForm(e){
            e.preventDefault();

            addCard();
            
            var reset = document.getElementById('form');
             reset.reset();
        }

    }

    function study(){
       console.log(flashArr);
            document.getElementById('new-or-study').innerHTML = study_Card;
    }

function nextButton(){
       
    i = i + 1 ;

    if(i > flashArr.length){
            console.log("You have exceeded the amount of cards, please create more in order to continue studying");
    }
        console.log(i);
}

function backButton(){
    i = i -1;

    if(i < flashArr.length && i < 0){
        console.log("You ran out cards, please create more!");
    }
}

function termButton(){
    
    if(flashArr.length == 0){
        console.log("Please create a card in order to start studying");
    }
       return document.getElementById('def2').innerText = flashArr[i].termValue;
}
function definitionButton(){

    if(flashArr.length == 0){
        console.log("Please create a card in order to start studying");
    }   
    return document.getElementById('def2').innerText = flashArr[i].definitionValue;
}
    //add card
function addCard(termValue, definitionValue){
    var c = new Card(termValue, definitionValue);
    flashArr.push(c);
    console.log(flashArr[0].termValue);
}

    //get term
function getTerm(termValue){
    return termValue;
}

    //get definition
function getDefinition(definitionValue){
    return definitionValue;
}
    //create a new card
function createButton(){
    newCard();
}


// dictionary api

var getMeaning = () => {
    document.querySelector('.defs').innerHTML = ''
    document.querySelector('.means').style.display = 'block'
    let word = document.querySelector('#myword').value
    fetch('https://api-maps.yandex.ru/2.1/?apikey=dict.1.1.20190710T115104Z.1a987de28f6d1254.416b684e4cb4c3afc638bd08113841fe8a4472b0&lang=en_RU'+ word).then(res => res.json()).then(data => {
      let word = document.querySelector('.word')
      let type = document.querySelector('.type')
      let defs = document.querySelector('.defs')
      if(data.word == undefined && data.type == undefined) {
        word.innerHTML = data.error
        type.innerHTML = 'Contact us at '+data.contact_us
      } else {
        word.innerHTML = data.word
        type.innerHTML = data.type
        data.definitions.forEach(def => {
        defs.innerHTML += `<li>${def}</li>`
      })
      }
    })
  }

