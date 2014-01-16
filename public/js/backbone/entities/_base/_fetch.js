App.module("Entities", function (Entities, App, Backbone, Marionette, $, _) {
    "use strict";

    App.commands.setHandler("when:fetched", function (entities, callback, context) {
        var xhrs = _.chain([entities]).flatten().pluck("_fetch").value();
        $.when.apply($, xhrs).done(function () {
            callback.call(context || this);
        });
    });

});