// XXX Configured to run from static page in media/template
// loading modules from the lib directory,
// except 'app' ones, 
requirejs.config({
	baseUrl: "../../media/script/lib",
	paths: {
		app: "../requirejs-app",
//		"jquery": "//cdnjs.cloudflare.com/ajax/libs/jquery/2.0.3/jquery.min",
//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min"
//		"jqueryui": "//cdnjs.cloudflare.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min",
//		"jquery-mousewheel": "//cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.6/jquery.mousewheel.min",
		//"rickshaw": "//cdnjs.cloudflare.com/ajax/libs/rickshaw/1.4.6/rickshaw.min",
		"rickshaw": "//cdnjs.cloudflare.com/ajax/libs/rickshaw/1.4.6/rickshaw",
		//d3: "//cdnjs.cloudflare.com/ajax/libs/d3/3.4.2/d3.min"
		"d3": "//cdnjs.cloudflare.com/ajax/libs/d3/3.4.2/d3",
		//underscore: "//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.6.0/underscore-min",
//		"underscore": "//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.6.0/underscore",
	}, 
	shim: {
//		"d3": { exports: "d3", },
		"rickshaw": { exports: "Rickshaw", deps: ['d3'] },
	}
});

// Load the main app module(s) to start the JS app
//requirejs(["app/underscore"]);
//requirejs(["app/jquery"]);
//requirejs(["app/jqueryui"]);
//requirejs("toolkit");
requirejs(["d3"]);
requirejs(["rickshaw"]);
requirejs(["graphics"]);
