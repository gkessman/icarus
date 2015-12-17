define([
	'jquery', 
	'underscore', 
	'backbone',
	'router'
	], function($, _, Backbone, AppRouter) {

	var initialize = function() {
		// Pass in our Router module and call it's initialize function
		new AppRouter();
	};

	return {
		initialize: initialize
	};
});