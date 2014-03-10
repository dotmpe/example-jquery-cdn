define('graphdata', [], function() {
	return {
		example1: {
			element: document.getElementById("chart"), 
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
		}
	};
});


