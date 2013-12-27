App.module('FooterApp', function (FooterApp, App, Backbone, Marionette, $, _) {

    var API = {
        showFooter: function () {
            return FooterApp.Show.Controller.showFooter();
        }
    };

    FooterApp.on('start', function () {
        API.showFooter();
    })

    //App.addInitializer(function () {
    //    FooterApp.start();
    //})
});