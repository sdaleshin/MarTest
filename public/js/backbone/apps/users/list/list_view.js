define(["app", "tpl!apps/users/list/templates/list-layout.ejs", "tpl!apps/users/list/templates/list-item.ejs"], function (App, layout_template, list_item_template) {
    App.module('UserApp.List', function (List, App, Backbone, Marionette, $, _) { 
        List.Layout = Marionette.Layout.extend({
            template: layout_template, 

            regions: {
                panelRegion: "#panel-region",
                asideRegion: "#aside-region",
                tableRegion: "#table-region"
            }
        });

        List.User = Marionette.ItemView.extend({
            template: list_item_template
        });

        List.Users = Marionette.CollectionView.extend({
            itemView: List.User
        });

        List.Panel = Marionette.ItemView.extend({
            template: list_item_template//_.template($('#users-list-item').html())
        });

    });
});