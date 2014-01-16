define(["app", "entities/user", "apps/users/edit/edit_view"], function (App) {
    App.module('UserApp.Edit', function (Edit, App, Backbone, Marionette, $, _) {
        Edit.Controller = Marionette.Controller.extend({
            initialize: function (options) {
                options = options || {};
                var id = options.id;
                var user = App.request("user:entity", id);
                App.execute("when:fetched", user, function () {
                    this.layout = this.getLayoutView();
                    this.layout.on('show', function () {
                        this.showPanel(user);
                    }, this);
                    App.mainRegion.show(this.layout);
                }, this);
            },
            getLayoutView: function () {
                return new Edit.Layout();
            },

            showPanel: function (user) {
                var panelView = this.getPanelView(user);
                this.listenTo(panelView, 'btnSave:clicked', this.onBtnSaveClicked);
                this.listenTo(panelView, 'btnCancel:clicked', this.onBtnCancelClicked);
                this.layout.panelRegion.show(panelView);
            },

            onBtnCancelClicked: function(data){
                App.navigate('users', true);
            },

            onBtnSaveClicked: function(data){
                var user = App.request('update:users:entity', data.model);
                App.execute("when:fetched", user, function () {
                    App.navigate('users', true);
                }, this);
            },

            getPanelView: function (user) {
                return new Edit.User({ model: user });
            }
        });

    });
});