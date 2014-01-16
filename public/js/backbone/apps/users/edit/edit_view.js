define(["app", "tpl!apps/users/edit/templates/edit-layout.ejs", "tpl!apps/users/edit/templates/edit-item.ejs"], function (App, layout_template, edit_item_template) {
    App.module('UserApp.Edit', function (Edit, App, Backbone, Marionette, $, _) {
        Edit.Layout = Marionette.Layout.extend({
            template: layout_template,

            regions: {
                panelRegion: "#panel-region"
            }
        });

        Edit.User = Marionette.ItemView.extend({
            template: edit_item_template,
            bindings: {
                '.age': 'Age',
                '.email': 'Email',
                '.name': 'Name',
            },
            ui: {
                'btnSave': '.save',
                'btnCancel': '.cancel'
            },
            triggers: {
                'click @ui.btnSave': 'btnSave:clicked',
                'click @ui.btnCancel': 'btnCancel:clicked'
            },
            onRender: function () {
                this.stickit();
            }
        });

    });
});