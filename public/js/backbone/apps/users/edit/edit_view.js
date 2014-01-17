define(["app", "tpl!apps/users/edit/templates/edit-layout.ejs", "tpl!apps/users/edit/templates/edit-item.ejs", "file_upload_image"], function (App, layout_template, edit_item_template) {
    App.module('UserApp.Edit', function (Edit, App, Backbone, Marionette, $, _) {
        Edit.Layout = Marionette.Layout.extend({
            template: layout_template,

            regions: {
                panelRegion: "#panel-region"
            }
        });

        Edit.User = Marionette.ItemView.extend({
            template: edit_item_template,
            bindings: {
                '.age': 'Age',
                '.email': 'Email',
                '.name': 'Name',
            },
            ui: {
                'btnSave': '.save',
                'btnCancel': '.cancel'
            },
            triggers: {
                'click @ui.btnSave': 'btnSave:clicked',
                'click @ui.btnCancel': 'btnCancel:clicked'
            },
            onRender: function () {
                this.stickit();
                var url = '/api/upload/' + this.model.id;
                var uploadButton = $('<button/>')
                    .addClass('btn btn-primary')
                    .prop('disabled', true)
                    .text('Processing...')
                    .on('click', function () {
                        var $this = $(this),
                            data = $this.data();
                        $this
                            .off('click')
                            .text('Abort')
                            .on('click', function () {
                                $this.remove();
                                data.abort();
                            });
                        data.submit().always(function () {
                            $this.remove();
                        });
                    });
                this.$('#fileupload').fileupload({
                    url: url,
                    dataType: 'json',
                    autoUpload: true,
                    acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i,
                    maxFileSize: 5000000, // 5 MB
                    // Enable image resizing, except for Android and Opera,
                    // which actually support image resizing, but fail to
                    // send Blob objects via XHR requests:
                    disableImageResize: /Android(?!.*Chrome)|Opera/
                        .test(window.navigator.userAgent),
                    previewMaxWidth: 227,
                    previewMaxHeight: 180,
                    previewCrop: true
                }).on('fileuploadadd', function (e, data) {
                    data.context = $('<div/>').appendTo('#files');  
                }).on('fileuploadprocessalways', function (e, data) {
                    var index = data.index,
                        file = data.files[index],
                        node = $(data.context.children()[index]);
                    if (file.preview) {
                        $('.avatar').html(file.preview);
                    }
                    if (file.error) {
                        node
                            .append('<br>')
                            .append($('<span class="text-danger"/>').text(file.error));
                    }
                    if (index + 1 === data.files.length) {
                        data.context.find('button')
                            .text('Upload')
                            .prop('disabled', !!data.files.error);
                    }
                })
            }
        });

    });
});