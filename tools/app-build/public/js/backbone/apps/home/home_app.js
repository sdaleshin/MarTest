App.module("HomeApp",function(e,t,n,r,i,s){e.Router=r.AppRouter.extend({appRoutes:{"":"showHome",home:"showHome"}});var o={showHome:function(){return t.execute("set-active-menu-item:action","home"),e.List.Controller.showHome()}};t.addInitializer(function(){return new e.Router({controller:o})})});