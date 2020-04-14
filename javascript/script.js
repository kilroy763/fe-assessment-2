console.log('JS WERKT')

// closure, local scope en hoisting.
function ziebestand() {
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
function waarde() {

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

document.getElementById('toonnaam').innerHTML = "Hey " + localStorage.getItem('naam');

document.getElementById('toonmail').innerHTML = localStorage.getItem('mail');

document.getElementById('toondatum').innerHTML = localStorage.getItem('date')


//context en global scope
var gebruiker = {
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

function remove() {
  localStorage.removeItem('date')
  localStorage.removeItem('mail')
  localStorage.removeItem('naam')
  console.log(localStorage)
  location.reload();
}