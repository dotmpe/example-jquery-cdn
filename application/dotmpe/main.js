console.log('jq a b loading');
define(["jquery", "jquery.alpha", "jquery.beta"], function($) {
    //the jquery.alpha.js and jquery.beta.js plugins have been loaded.
	console.log('jq a b init');
    $(function() {
        $('body').alpha().beta();
        console.log('jq a b ready');
    });
});
