define(['jquery', 'underscore', 'd3', 'rickshaw'], function(jQuery, d3) {
  console.log('jQ should be loaded');
  console.log(jQuery);
  console.log('d3 should be loaded');
  console.log(d3);
  console.log('rickshaw should be loaded');
  console.log(Rickshaw);

  var graph = new Rickshaw.Graph( {
      element: jQuery("#chart")[0], 
      width: 300, 
      height: 200, 
      series: [{
        color: 'steelblue',
      data: [ 
          { x: 0, y: 40 }, 
              { x: 1, y: 49 }, 
              { x: 2, y: 38 }, 
              { x: 3, y: 30 }, 
              { x: 4, y: 32 } ]
              }]
          });

  graph.render();

});

