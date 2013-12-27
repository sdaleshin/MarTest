App.module('HomeApp', function (HomeApp, App, Backbone, Marionette, $, _) {

    HomeApp.Router = Marionette.AppRouter.extend({
        appRoutes: {
            "": "showHome",
            "home": "showHome"
        }
    });

    var API = {
        showHome: function () {
            App.execute("set-active-menu-item:action", "home");
            return HomeApp.List.Controller.showHome();
        }
    };

    App.addInitializer(function () {
        return new HomeApp.Router({ controller: API });
    })

});