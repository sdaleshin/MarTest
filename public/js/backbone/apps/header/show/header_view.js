App.module('HeaderApp.Show', function (Show, App, Backbone, Marionette, $, _) {

    Show.Header = Marionette.ItemView.extend({
        template: _.template($('#header-show-view').html()),
        setActiveMenuItem: function (item) {
            this.$('.main-menu li').removeClass('active');
            this.$('.' + item).addClass('active');
        }
    });

});