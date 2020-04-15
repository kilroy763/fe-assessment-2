document.getElementById('toonnaam').innerHTML = "Hey " + localStorage.getItem('naam');            // geeft naam mee vanuit form

document.getElementById('toonmail').innerHTML = localStorage.getItem('mail');                     // geeft mail mee vanuit form

document.getElementById('toondatum').innerHTML = localStorage.getItem('date')                     // geeft geboortedatum mee vanuit form


function remove() {                                                                               // verwijdert gebruiker uit localstorage
    localStorage.removeItem('date')
    localStorage.removeItem('mail')
    localStorage.removeItem('naam')
    console.log(localStorage)
    location.reload();
  }