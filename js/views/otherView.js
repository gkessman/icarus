define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/otherTemplate.html'
], function($, _, Backbone, OtherTemplate) {

	var OtherView = Backbone.View.extend({

		render: function() {
			console.log("This is the other view!");
			this.$el.html(OtherTemplate);
		},

		close: function() {
			this.remove();
			this.unbind();
		}
		
	});

	return OtherView;

});