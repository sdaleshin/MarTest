define(["app", "entities/_base/model", "entities/_base/collection", "entities/_base/_fetch"], function (App) {
    App.module('Entities', function (Entities, App, Backbone, Marionette, $, _) {

        Entities.User = Entities.Model.extend({
            urlRoot: "/api/users"
        });

        Entities.UsersCollection = Entities.Collection.extend({
            model: Entities.User,
            url: "/api/users"
        });

        var API = {
            getUserEntities: function () {
                users = new Entities.UsersCollection();
                users.fetch({ reset: true });
                return users;
            },
            getUserById: function (id) {
                user = new Entities.User({ _id: id });
                user.fetch();
                return user;
            },
            saveUserEnitity: function (user) {
                user.save();
                return user;
            }
        }

        App.reqres.setHandler("user:entities", function () {
            return API.getUserEntities();

        });

        App.reqres.setHandler("user:entity", function (id) {
            return API.getUserById(id);
        });

        App.reqres.setHandler("update:users:entity", function (user) {
            return API.saveUserEnitity(user);
        });

    });
});