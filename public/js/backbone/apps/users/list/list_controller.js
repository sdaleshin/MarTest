define(["app"], function (App) {
    App.module('UserApp.List', function (List, App, Backbone, Marionette, $, _) {

        List.Controller = {

            listUsers: function () {
                require(["entities/user", "apps/users/list/list_view"], _.bind(function () {
                    App.request("user:entities", _.bind(function (users) {
                        this.layout = this.getLayoutView();
                        this.layout.on('show', function () {
                            //showPanel(users);
                            this.showTable(users);
                        }, this);
                        App.mainRegion.show(this.layout);
                    }, this));
                }, this));
            },

            getLayoutView: function () {
                return new List.Layout();
            },

            showPanel: function (users) {
                panelView = this.getPanelView(users);
                this.layout.panelRegion.show(panelView);
            },

            getPanelView: function (users) {
                return new List.Panel({ collection: users });
            },

            showTable: function () {
                tableView = this.getTableView(users);
                this.layout.tableRegion.show(tableView);
            },

            getTableView: function (users) {
                return new List.Users({ collection: users });
            }
        }

    });
});