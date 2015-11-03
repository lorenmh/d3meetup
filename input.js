var d3 = require('d3');
console.dir(d3);
d3.csv( 'events.csv', function(d) {
  console.log( d );
})
