define([
	'text!templates/header.html'
], function (template) {

	//ItemView provides some default rendering logic
	return Marionette.ItemView.extend({
		template:Handlebars.compile(template)
    });

});