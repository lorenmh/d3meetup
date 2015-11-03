var d3 = require('d3');
// var queue = require('queue');
console.dir(d3);
d3.csv( 'events.csv', function(d) {
  console.log( d );
  d3.json("topo_world_countries_with_meta.json", function(err, world){
    console.dir(world);
  });
})
