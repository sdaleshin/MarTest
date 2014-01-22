({
    //- paths are relative to this app.build.js file
    appDir: "../",
    baseUrl: "public/js/backbone",
    //- this is the directory that the new files will be. it will be created if it doesn't exist
    dir: "app-build",
    paths: {
        backbone: '../vendor/backbone',
        underscore: '../vendor/underscore',
        jquery: '../vendor/jquery-1.10.1',
        marionette: '../vendor/backbone.marionette',
        tpl: '../vendor/tpl',
        backbone_sync: '../backbone/config/sync',
        backbone_stickit: '../vendor/backbone.stickit',
        file_upload: '../vendor/fileupload/jquery.fileupload',
        file_upload_image: '../vendor/fileupload/jquery.fileupload-image',
        canvas_to_blob: '../vendor/fileupload/canvas-to-blob',
        load_image: '../vendor/fileupload/load-image'
    },
    shim: {
        jquery: {
            exports: '$'
        },
        underscore: {
            exports: '_'
        },
        tpl: {
            deps: ['underscore','backbone'],
            //exports: 'Backbone'
        },
        load_image: {
            deps: ['jquery'],
            //exports: 'loadImage'
        },
        backbone: {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },
        backbone_sync: {
            deps: ['backbone']
        },
        backbone_stickit: {
            deps: ['backbone']
        },
        canvas_to_blob: {
            deps: ['jquery'],
            exports: 'dataURLtoBlob'
        },
        marionette: {
            deps: ['backbone', 'backbone_sync', 'backbone_stickit','tpl'],
            exports: 'Marionette'
        }
    },
    //optimizeCss: "standard.keepLines",
    modules: [
		{
		    name: "../main"
		}
    ],
    fileExclusionRegExp: /\.git/
})