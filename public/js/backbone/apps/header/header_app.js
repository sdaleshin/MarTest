define(["app", "apps/header/show/header_controller"], function (App) {
    App.module('HeaderApp', function (HeaderApp, App, Backbone, Marionette, $, _) {

        var API = {
            showHeader: function () {
                this.Controller = new HeaderApp.Show.Controller();
                return this.Controller;
            },
            setActiveMenuItem: function (item) {
                return this.Controller.setActiveMenuItem(item);
            }
        };

        HeaderApp.on('start', function () {
            API.showHeader();
        })

        App.commands.setHandler("set-active-menu-item:action", function (item) {
            API.setActiveMenuItem(item);
        });

    });
});