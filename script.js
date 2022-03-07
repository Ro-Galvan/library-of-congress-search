mainEl = document.querySelector('main');


var locSearchUrl = 'https://www.loc.gov/search/?q=' + search + '&fo=json';
var locFormatUrl = 'https://www.loc.gov/' + format + '/?q=' + search + '&fo=json';


var formEl = document.createElement('form');
formEl.classList.add('test');
mainEl.appendChild(formEl);