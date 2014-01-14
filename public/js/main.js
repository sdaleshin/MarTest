require.config({
    baseUrl: '/js/backbone',
    paths: {
        backbone: '../vendor/backbone',
        underscore: '../vendor/underscore',
        jquery: '../vendor/jquery-1.10.1',
        marionette: '../vendor/backbone.marionette',
        tpl: '../vendor/tpl'
    },
    shim: {
        jquery: {
            exports: '$'
        },
        underscore: {
            exports: '_'
        },
        tpl: {
            deps: ['underscore'],
            exports: 'Backbone'
        },
        backbone: {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },
        marionette: {
            deps: ['jquery', 'underscore', 'backbone'],
            exports: 'Marionette'
        }
    }
});

//"apps/users/user_app", "apps/header/header_app", "apps/footer/footer_app"

require(["app", "apps/users/user_app", "apps/header/header_app"], function (App) {
    App.start();
});
