require.config({
	paths: {
		"jquery": "vendor/jquery/dist/jquery.min",
		"underscore": "vendor/underscore/underscore-min",
		"backbone": "vendor/backbone/backbone-min",
		"text": "vendor/text/text",
		"templates": "../templates"
	}
});

require(['app'], function(App) {
		new App.initialize();
})	