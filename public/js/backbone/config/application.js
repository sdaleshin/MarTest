define(["marionette"], function (Marionette) {
    (function (_, Backbone, Marionette) {
        "use strict";

        _.extend(Marionette.Application.prototype, {

            navigate: function (route, options) {
                options || (options = {});
                Backbone.history.navigate(route, options);
            },

            getCurrentRoute: function () {
                var frag = Backbone.history.fragment;
                if (_.isEmpty(frag)) return null;
                return frag;
            },

            startHistory: function () {
                if (Backbone.history) {
                    Backbone.history.start();
                }
            },

            register: function (instance, id) {
                this._registry || (this._registry = {});
                this._registry[id] = instance;
            },

            unregister: function (instance, id) {
                delete this._registry[id];
            },

            resetRegistry: function () {
                var oldCount = this.getRegistrySize();
                _.each(this._registry, function (controller, key) {
                    controller.region.close();
                }, this);
                var msg = "There were " + oldCount + " controllers in the registry, there are now " + this.getRegistrySize();
                if (this.getRegistrySize() > 0) {
                    colsole.warn(msg);
                } else {
                    colsole.log(msg);
                }
            },

            getRegistrySize: function () {
                return _.size(this._registry);
            }


        });

    })(_, Backbone, Marionette);
});
