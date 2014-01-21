define(["app","entities/user","apps/users/list/list_view"], function (App) {
    App.module('UserApp.List', function (List, App, Backbone, Marionette, $, _) {

        List.Controller = Marionette.Controller.extend({
            initialize: function(){
                var users = App.request("user:entities");
                App.execute("when:fetched", users, function () {
                    this.layout = this.getLayoutView();
                    this.layout.on('show', function () {
                        //showPanel(users);
                        this.showTable(users);
                    }, this);
                    App.mainRegion.show(this.layout);
                }, this);
            },
            editUserEntity: function (view) {
                App.navigate('users/' + view.model.id + '/edit', true);
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
                var tableView = this.getTableView(users);
                this.layout.tableRegion.show(tableView);
                this.listenTo(tableView, 'itemview:edit:user:entity', this.editUserEntity);
            },

            getTableView: function (users) {
                return new List.Users({ collection: users });
            }
        });
        

            //listUsers: function () {
            //    require(["entities/user", "apps/users/list/list_view"], _.bind(function () {
            //        App.request("user:entities", _.bind(function (users) {
            //            this.layout = this.getLayoutView();
            //            this.layout.on('show', function () {
            //                //showPanel(users);
            //                this.showTable(users);
            //            }, this);
            //            App.mainRegion.show(this.layout);
            //        }, this));
            //    }, this));
            //},


            
        //}

    });
});