define([
    "app",
    "tpl!apps/header/show/templates/header-layout.ejs",
    "tpl!apps/header/show/templates/menu-view.ejs",
    "tpl!apps/header/show/templates/login-form-view.ejs"
],
    function (App, layout_template, menu_template, login_form_template) {
        App.module('HeaderApp.Show', function (Show, App, Backbone, Marionette, $, _) {

            Show.Menu = Marionette.ItemView.extend({
                template: menu_template,
                setActiveMenuItem: function (item) {
                    this.$('li').removeClass('active');
                    this.$('.' + item).addClass('active');
                }
            });

            Show.LoginForm = Marionette.ItemView.extend({
                template: login_form_template,
                ui:{
                    'btnSignIn':'.signin'
                },
                bindings: {
                    'input[type=text]': 'email',
                    'input[type=password]': 'password'
                },
                triggers: {
                    'click @ui.btnSignIn': 'btn:signin:clicked'
                },
                onRender: function () {
                    this.stickit();
                }
            });

            Show.Header = Marionette.Layout.extend({
                template: layout_template,
                regions: {
                    menuRegion: ".menu-region",
                    authRegion: ".auth-region"
                }
            });

        });
    });