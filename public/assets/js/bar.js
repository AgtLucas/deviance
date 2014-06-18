var _ = require('lodash');

var bar = function () {
  var array = [1, 2, 3, 4, 5, 6];
  var evens = _.remove(array, function(num) { return num % 2 == 0; });

  console.log(array);

  console.log(evens);
};

module.exports = bar;