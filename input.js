var d3 = require('d3');

d3.csv( 'events.csv', undefined, function(d) {
  console.log( d );
})
