define(["app", "entities/_base/model", "entities/_base/collection", "entities/_base/_fetch"], function (App) {
    App.module('Entities', function (Entities, App, Backbone, Marionette, $, _) {

        Entities.Auth = Entities.Model.extend({
            urlRoot: "/login"
        });

        var API = {
            signIn: function (model) {
                model.save();
                return model;
            },
            getNewAuthEntity: function () {
                return new Entities.Auth();
            }
        }

        App.reqres.setHandler("auth:signin", function (model) {
            return API.signIn(model);
        });

        App.reqres.setHandler("new:auth:entity", function () {
            return API.getNewAuthEntity();
        });
    });
});