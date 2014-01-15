define(["app", "entities/_base/model", "entities/_base/collection"], function (App) {
    App.module('Entities', function (Entities, App, Backbone, Marionette, $, _) {

        Entities.User = Entities.Model.extend({
            urlRoot: "/api/users"
        });

        Entities.UsersCollection = Entities.Collection.extend({
            model: Entities.User,
            url: "/api/users"
        });

        var API = {
            getUserEntities: function (cb) {
                users = new Entities.UsersCollection();
                users.fetch({
                    success: function () {
                        cb(users);
                    }
                });
            },
            getUserById: function (id, cb) {
                user = new Entities.User();
                user.fetch({
                    success: function () {
                        cb(user);
                    }
                });
            }
        }

        App.reqres.setHandler("user:entities", function (cb) {
            API.getUserEntities(cb);
        });

        App.reqres.setHandler("user:entity", function (id, cb) {
            API.getUserById(id, cb);
        });

    });
});