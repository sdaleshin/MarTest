define(["app"], function (App) {
    App.module('UserApp', function (UserApp, App, Backbone, Marionette, $, _) {

        UserApp.Router = Marionette.AppRouter.extend({
            appRoutes: {
                "users/:id/edit": "editUser",
                "users/:id": "showUser",
                "users": "listUsers"
            }
        });

        var API = {
            editUser: function (id) {
                App.execute("set-active-menu-item:action", "users");
                require(["apps/users/edit/edit_controller"], function () {
                    return new UserApp.Edit.Controller({id: id});
                });
            },
            showUser: function (id) {
                App.execute("set-active-menu-item:action", "users");
                return UserApp.Show.Controller.showUser(id);
            },
            listUsers: function () {
                App.execute("set-active-menu-item:action", "users");
                require(["apps/users/list/list_controller"], function () {
                    return new UserApp.List.Controller();
                });
            }

        };

        App.addInitializer(function () {
            return new UserApp.Router({ controller: API });
        })

    });
});