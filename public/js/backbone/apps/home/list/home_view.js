App.module('HomeApp.List', function (List, App, Backbone, Marionette, $, _) {

    List.Header = Marionette.ItemView.extend({
        template: _.template($('#header-show-view').html()),
        setActiveMenuItem: function (item) {
            this.$('.main-menu li').removeClass('active');
            this.$('.' + item).addClass('active');
        }
    });

});