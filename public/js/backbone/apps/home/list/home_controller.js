App.module('HomeApp.List', function (List, App, Backbone, Marionette, $, _) {

    List.Controller = {
        showHeader: function () {
            this.layout = this.getHeaderView();
            this.layout.on('show', function () {
                this.showTable();
                this.showPanel();
            });
            App.headerRegion.show(this.layout);
        },
        getLayoutView: function () {
            return new Show.Layout();
        },
        showPanel: function () {
            this.view = this.getPanelView();
            this.layout.panelRegion.show(this.view);
        },
        showTable: function () {
            this.view = this.getTableView();
            this.layout.tableRegion.show(this.view);
        },
        getPanelView: function () {
            return new Show.Panel();
        },
        getTableView: function () {
            return new Show.News();
        }
    }

});