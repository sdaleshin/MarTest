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
            return UserApp.Edit.Controller.editUser(id);
        },
        showUser: function (id) {
            App.execute("set-active-menu-item:action", "users");
            return UserApp.Show.Controller.showUser(id);
        },
        listUsers: function () {
            App.execute("set-active-menu-item:action", "users");
            return UserApp.List.Controller.listUsers();
        }

    };

    App.addInitializer(function () {
        return new UserApp.Router({ controller: API });
    })

});