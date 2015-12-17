define([
	'jquery',
	'underscore',
	'backbone',
	'views/mainView',
	'views/otherView'
	], function($, _, Backbone, MainView, OtherView) {

	var AppRouter = Backbone.Router.extend({

		initialize: function() {
			this.appView = new AppView();
			Backbone.history.start();
		},

		routes: {

			'': 'mainView',
			'main': 'mainView',
			'other': 'otherView',
				// Default
			'*actions': 'defaultAction'
		},

		mainView: function() {
			var mainView = new MainView();
			this.appView.showView(mainView);
		},

		otherView: function() {
			var otherView = new OtherView();
			this.appView.showView(otherView);
		},

		defaultAction: function() {
			var mainView = new MainView();
			this.appView.showView(mainView);
		}

	});

	function AppView() {
		this.showView = function(view) {
			if (this.currentView) {
				this.currentView.close();
			}

			this.currentView = view;
			this.currentView.render();
			$('.content').html(this.currentView.el);
		}
	}

	return AppRouter;

});