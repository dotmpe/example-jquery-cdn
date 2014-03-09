// XXX Configured to run from static page in media/template
// loading modules from the lib directory,
// except 'app' ones, 
console.log('requirejs config');

requirejs.config({
    "baseUrl": "../../media/script/lib",
    "paths": {
      "app": "../requirejs-app",
      "jquery": "//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min"
    }
});

// Load the main app module(s) to start the JS app
requirejs(["app/jquery"]);
