var $ = require('jquery');

var foo = (function () {

  $('.click-me').on('click', function () {
    alert('Foo!');
  });

}());

module.exports = foo;