var d3 = require('d3');
var topojson = require('topojson');
console.dir(d3);
d3.csv( 'events.csv', function(data) {
  console.log( data );
  var merc = d3.geo.mercator();
  d3.json("topo_world_countries_with_meta.json", function(err, world){
    console.dir(world);
    var svg = d3.select('#target').append('svg')
      .attr('width', 960)
      .attr('height', 800);
    svg.append('path')
      .datum(topojson.feature(world, world.objects.countries))
      .attr("d", d3.geo.path().projection( merc ));
    ;

    data = data.map( function(d) {
      return merc( [(+ d.longitude), (+ d.latitude)] );
    });

    svg.selectAll( 'circle.event' )
        .data( data ).enter()
      .append( 'circle' )
        .attr({
          class: 'event',

          cx: function(d) {
            return d[0]
          },

          cy: function(d) {
            return d[1]
          },

          r: function(d) {
            return 5
          }
        })
  });
})
