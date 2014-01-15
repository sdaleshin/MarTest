define(["marionette",'config/application'], function (Marionette) {
    App = new Backbone.Marionette.Application();

    App.addRegions({
        headerRegion: "#header-region",
        mainRegion: "#main-region",
        footerRegion: "#footer-region"
    });

    App.on('initialize:after', function (options) {
        if (Backbone.history) {
            Backbone.history.start();
        }
    });

    return App;
});