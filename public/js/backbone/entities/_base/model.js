define(["app"], function (App) {
    App.module('Entities', function (Entities, App, Backbone, Marionette, $, _) {

        Entities.Model = Backbone.Model.extend({
            idAttribute: "_id"
        });

    });
});
