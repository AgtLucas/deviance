var $ = require('jquery');

var bar = (function () {

  $('.click-me').on('click', function () {
    alert('Yo!');
  });

}());

module.exports = bar;