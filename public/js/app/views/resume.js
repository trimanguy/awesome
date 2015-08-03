define([
    'text!templates/resume.html'
], function(template) {
    return Marionette.ItemView.extend( {
        template: Handlebars.compile(template),
        id: 'resumePage',
    });
});