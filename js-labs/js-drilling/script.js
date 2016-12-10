var click =document.querySelector('.click-this');
var stuff = document.querySelector('.stuff');
var showMe = document.querySelector('.show-me');

click.addEventListener('click', function() {
  var value = stuff.value;
  var stringContainsLetterE = containsTheLetterE(value);
  if (stringContainsLetterE === true) {
    showMe.classList.add('hidden');    
  }


});

function containsTheLetterE(str) {
  var index = str.indexOf('e');
  if (index === -1) {
    return false;
  }
  else {
    return true;
  }
}
