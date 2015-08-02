require.config({
    baseUrl:"./js/app",
    // 3rd party script alias names (Easier to type "jquery" than "libs/jquery, etc")
    // probably a good idea to keep version numbers in the file names for updates checking
    //TODO: learn more & uncomment; all global for now
    paths:{
        // Core Libraries
        // "jquery":"../libs/jquery",
        // "jqueryui":"../libs/jqueryui",
        // "underscore":"../libs/lodash", // lodash is extension of underscore
        // "backbone":"../libs/backbone",
        // "marionette":"../libs/backbone.marionette",
        // "handlebars":"../libs/handlebars",

        // Plugins
        "backbone.validateAll":"../libs/plugins/Backbone.validateAll",
        // "bootstrap":"../libs/plugins/bootstrap",
        "text":"../libs/plugins/text",

        "libs": "../libs"
    },

    //TODO: learn more & uncomment; all global for now
    // Sets the configuration for your third party scripts that are not AMD compatible
    shim:{
        // "bootstrap":["jquery"],
        // "jqueryui":["jquery"],
        // "backbone":{
        //     "deps":["underscore"],
        //     // Exports the global window.Backbone object
        //     "exports":"Backbone"
        // },
        // "marionette":{
        //     "deps":["underscore", "backbone", "jquery"],
        //     // Exports the global window.Marionette object
        //     "exports":"Marionette"
        // },
        // "handlebars":{
        //     "exports":"Handlebars"
        // },
        // Backbone.validateAll plugin (https://github.com/gfranko/Backbone.validateAll)
        // "backbone.validateAll":["backbone"]
    }
});

// Includes Desktop Specific JavaScript files here (or inside of your Desktop router)
require([
    "App",
    "routers/AppRouter",
    "libs/require/domReady",
    "views/header",
    "backbone.validateAll"
],function (App, AppRouter, domReady, HeaderView) {

    App.appRouter = new AppRouter();
    App.addRegions({
        headerRegion: '#header',
        mainRegion: '#main'
    });

    App.on('start', function(){
        App.headerRegion.show(new HeaderView());
    });

    domReady(function(){

        App.start();
    });

});