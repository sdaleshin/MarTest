App.module('HeaderApp.Show', function (Show, App, Backbone, Marionette, $, _) {

    Show.Controller = {
        showHeader: function () {
            this.view = this.getHeaderView();
            App.headerRegion.show(this.view);
        },
        getHeaderView: function () {
            return new Show.Header();
        },
        setActiveMenuItem: function(item){
            this.view.setActiveMenuItem(item);
        }
    }

});