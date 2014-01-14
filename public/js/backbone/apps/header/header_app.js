define(["app", "apps/header/show/header_controller"], function (App) {
    App.module('HeaderApp', function (HeaderApp, App, Backbone, Marionette, $, _) {

        var API = {
            showHeader: function () {
                return HeaderApp.Show.Controller.showHeader();
            },
            setActiveMenuItem: function (item) {
                return HeaderApp.Show.Controller.setActiveMenuItem(item);
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