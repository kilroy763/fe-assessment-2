
var element = document.getElementById('field2');                                                  // zorgt voor progressive disclosure
element.style.display = "none";

var knop = document.getElementById("button")                                                      // zet de button uit
knop.disabled = true;

var knop = document.getElementById("button2")                                                     // zet de button uit
knop.disabled = true;

function bijna() {
  document.getElementById('update').innerHTML = "Hierna alleen nog je persoonlijke gegevens!";   //geeft aan dat er meer is na invullen van wachtwoord
}

function toonmeer() {                                                                             //zodra laatste input gevuld is de rest van form tonen
  var element = document.getElementById('field2');
  element.style.display = "block";
  var knop = document.getElementById("button")
  knop.disabled = false;
  var knop = document.getElementById("button2")
  knop.disabled = false;
  document.getElementById('update').innerHTML = "Persoonlijke gegevens";
}



// closure, local scope en hoisting.
function ziebestand() {                                                                         // live preview foto
  voorbeeld = document.querySelector('img');        
  bestand = document.querySelector('input[type=file]').files[0];
  lezer = new FileReader();

  lezer.onloadend = function () {
    voorbeeld.src = lezer.result;
  }
  lezer.readAsDataURL(bestand);

  var lezer;
  var bestand;
  var voorbeeld;
  var foto = lezer.result
  localStorage.setItem('img', foto);

}


// hoisting en local scope 
function waarde() {                                                                               //zet gegevens in localstorage

  name = document.getElementById('name').value;
  email = document.getElementById('email').value;
  age = document.getElementById('age').value;

  localStorage.setItem("naam", name);
  localStorage.setItem("mail", email);
  localStorage.setItem('date', age);

  var age
  var name;
  var email
  return false;
}




//context en global scope
var gebruiker = {                                                                                         //toont gebruiker in console
  Naam: localStorage.getItem('naam'),
  email: localStorage.getItem('mail'),
  Leeftijd: localStorage.getItem('date')
}

function user() {
  return this.gebruiker
}
console.log(user())



//MDN. (2020a, 31 januari). FileReader.readAsDataURL(). 
//Geraadpleegd op 14 april 2020, van https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL

