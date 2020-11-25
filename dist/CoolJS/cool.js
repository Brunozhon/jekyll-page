if (Cool === undefined) {
  var Cool = {};
} else { 
  Cool = {};
} 
Cool.createElement = function(elem_str, txt_str) {
  var elem = document.createElement(elem_str); 
  var txt = document.createTextNode(txt_str); 
  elem.appendChild(txt); 
  return elem;
}
Cool.render = function(elem, id) {
  var query = document.querySelector(id); 
  query.innerHTML = elem.render();
}
