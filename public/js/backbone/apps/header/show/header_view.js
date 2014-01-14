define(["app", "tpl!apps/header/show/templates/header-view.ejs"], function (App, view_template) {
    App.module('HeaderApp.Show', function (Show, App, Backbone, Marionette, $, _) {

        Show.Header = Marionette.ItemView.extend({
            template: view_template,
            setActiveMenuItem: function (item) {
                this.$('.main-menu li').removeClass('active');
                this.$('.' + item).addClass('active');
            }
        });

    });
});