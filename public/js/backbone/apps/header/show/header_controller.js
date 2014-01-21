define(["app",,"entities/abstract/auth", "apps/header/show/header_view"], function (App) {
    App.module('HeaderApp.Show', function (Show, App, Backbone, Marionette, $, _) {

        Show.Controller = Marionette.Controller.extend({
            initialize: function () {
                this.layout = this.getHeaderView();
                this.authModel = App.request('new:auth:entity');
                this.layout.on('show', function () {
                    this.showAuth(this.authModel);
                    this.showMenu();
                }, this);
                App.headerRegion.show(this.layout);
            },
            showAuth: function (model) {
                this.loginView = this.getLoginFormView(model);
                this.listenTo(this.loginView, 'btn:signin:clicked', this.onSignInBtnClick);
                this.layout.authRegion.show(this.loginView);
            },
            onSignInBtnClick: function (data) {
                App.request('auth:signin', data.model);
            },
            showMenu: function () {
                this.menuView = this.getMenuView();
                this.layout.menuRegion.show(this.menuView);
            },
            getMenuView: function () {
                return new Show.Menu();
            },
            getLoginFormView: function (model) {
                return new Show.LoginForm({ model: model });
            },
            getHeaderView: function () {
                return new Show.Header();
            },
            setActiveMenuItem: function (item) {
                this.menuView.setActiveMenuItem(item);
            }
        });
    });
});