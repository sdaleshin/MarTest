module.exports = function (app, options) {

    var fs = require('fs');
    var mongoose = options.mongoose;
    var Schema = options.mongoose.Schema;
    var db = options.db;

    var UserModel = require('../schemas/userSchema')(db);
    var base64 = require('base64-js');

    app.get('/api/users', function (req, res) {
        var qSkip = req.query.skip;
        var qTake = req.query.take;
        var qSort = req.query.sort;
        var qFilter = req.query.filter;
        return UserModel.find().sort(qSort).skip(qSkip).limit(qTake)
        .exec(function (err, users) {
            res.send(users);
        });
    });

    app.post('/api/upload/:id', function (req, res) {
        fs.readFile(req.files.file.path, function (err, data) {
            console.log('err: ' + err);
            console.log('data: ' + data.length);
            return UserModel.findById(req.params.id, function (err, user) {
                
                user.Avatar.data = base64.fromByteArray(data);
                user.Avatar.contentType = 'image/png';
                user.save(function (err) {
                    res.send(user);
                });
            });
        });
        return res.send({result: 'ok'});
    });

    app.post('/api/users', function (req, res) {
        var user;
        user = new UserModel({
            text: req.body.text,
            done: req.body.done,
            order: req.body.order
        });
        user.save(function (err) {
            // more code
        });
        return res.send(user);
    });

    app.get('/api/users/:id', function (req, res) {
        return UserModel.findById(req.params.id, function (err, user) {
            res.send(user);
        });
    });

    app.put('/api/users/:id', function (req, res) {
        return UserModel.findById(req.params.id, function (err, user) {
            user.Age = req.body.Age;
            user.Name = req.body.Name;
            user.Email = req.body.Email;
            user.save(function (err) {
                res.send(user);
            });
        });
    });

    app.delete('/api/users/:id', function (req, res) {
        return UserModel.findById(req.params.id, function (err, user) {
            return user.remove(function (err) {
                // more code
            });
        });
    });
};