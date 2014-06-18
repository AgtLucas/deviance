var _ = require('lodash');
var bar = require('./bar');

_.forEach({'one': 1, 'two': 2, 'three': 3}, function (num) {
  console.log(num);
});

bar;