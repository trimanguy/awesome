define([
	"App",
    "views/welcome",
    "views/resume"
    ], function(App,WelcomeView,ResumeView) {

	return Marionette.AppRouter.extend({
		//"index" must be a method in AppRouter's controller
		appRoutes: {
			'': 'index',
			'resume': 'resume'
		},

		controller: {
            // 'initialize': function(options){
            //     App.headerRegion.show(new HeaderView());
            // },
            //gets mapped to in AppRouter's appRoutes
            'index': function(){
                App.mainRegion.show(new WelcomeView());
            },
            'resume': function(){
            	App.mainRegion.show(new ResumeView());
            }
        }
	});
});