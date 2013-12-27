define(["app", "entities/_base/model"], function (App) {
    App.module('Entities', function (Entities, App, Backbone, Marionette, $, _) {

        Entities.Collection = Backbone.Collection.extend({
            model: Entities.Model
        });

    });
});