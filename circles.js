/* global d3, data */

// get the d3 scale or something?

d3.selectAll( 'circle.event' )
    .data( data ).enter()
  .append( 'circle' )
    .attr({
      class: 'event',

      cx: function(d) {

      },

      cy: function(d) {

      },

      r: function(d) {

      }
    })
