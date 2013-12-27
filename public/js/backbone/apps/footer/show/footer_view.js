App.module('FooterApp.Show', function (Show, App, Backbone, Marionette, $, _) {

    Show.Footer = Marionette.ItemView.extend({
        template: _.template($('#footer-show-view').html())
    });

});