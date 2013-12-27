App.module('FooterApp.Show', function (Show, App, Backbone, Marionette, $, _) {

    Show.Controller = {
        showFooter: function () {
            this.view = this.getFooterView();
            App.footerRegion.show(this.view);
        },
        getFooterView: function () {
            return new Show.Footer();
        }
    }

});