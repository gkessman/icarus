define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/mainTemplate.html'
], function($, _, Backbone, MainTemplate) {

	var MainView = Backbone.View.extend({

		render: function() {
			console.log("main view render");
			this.$el.html(MainTemplate);
		},

		close: function() {
			this.remove();
			this.unbind();
		}
		
	});

	return MainView;

});