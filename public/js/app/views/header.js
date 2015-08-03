define([
	'text!templates/header.html'
], function (template) {

	//ItemView provides some default rendering logic
	return Marionette.ItemView.extend({
		template:Handlebars.compile(template),

		ui: {
			'links' : '#links'
		},
		events: {
			'click @ui.links' : 'handleLinkClick'
		},

		handleLinkClick: function(e){
			e.stopPropagation();
			$('.nav>li').removeClass('active');
			$(e.target.parentElement).addClass('active');
		}
    });

});