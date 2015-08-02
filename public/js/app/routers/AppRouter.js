define([
	"App",
	"views/header",
    "views/welcome",
    ], function(App,HeaderView,WelcomeView) {

	return Marionette.AppRouter.extend({
		//"index" must be a method in AppRouter's controller
		appRoutes: {
			"": "index"
		},

		controller: {
            // 'initialize': function(options){
            //     App.headerRegion.show(new HeaderView());
            // },
            //gets mapped to in AppRouter's appRoutes
            'index': function(){
                App.mainRegion.show(new WelcomeView());
            }
        }
	});
});