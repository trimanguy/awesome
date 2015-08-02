define([
    'App',
    'models/Model',
    'text!templates/welcome.html'
], function( App, Model, template) {
    //ItemView provides some default rendering logic
    return Marionette.ItemView.extend( {
        //Template HTML string
        template: Handlebars.compile(template),
        model: new Model({
            mobile: App.mobile
        }),

        // View Event Handlers
        events: {

        }
    });
});