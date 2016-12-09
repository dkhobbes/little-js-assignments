var click =document.querySelector('.click-this');
var stuff = document.querySelector('.stuff');
var showMe = document.querySelector('.show-me');

click.addEventListener('click', function() {
  var value = stuff.value;

showMe.classList.add('hidden');

});
