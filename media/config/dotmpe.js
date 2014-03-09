// Place third party dependencies in the lib folder
//
// Configure loading modules from the lib directory,
// except 'app' ones, 
console.log('requirejs config');

requirejs.config({
    "baseUrl": "media/script/lib",
    "paths": {
      "app": "../../application/dotmpe",
      "jquery": "//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min"
    }
});

// Load the main app module to start the app
requirejs(["app/main"]);
