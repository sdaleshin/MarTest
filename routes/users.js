module.exports = function (app, options) {

    var fs = require('fs');
    var im = require('imagemagick');
    var models = options.models;
    var db = options.db;

    var base64 = require('base64-js');
    var UserModel = models.User;

    app.get('/api/users', function (req, res) {
        var qSkip = req.query.skip;
        var qTake = req.query.take;
        var qSort = req.query.sort;
        var qFilter = req.query.filter;
        return UserModel.find().select('Name Email Age Avatar').sort(qSort).skip(qSkip).limit(qTake)
        .exec(function (err, users) {
            res.send(users);
        });
    });

    app.post('/api/upload/:id', function (req, res) {
        fs.readFile(req.files.file.path, 'binary', function (err, data) {
            im.resize({
                srcData: data,
  		height: 180,
  		quality: 1,
            }, function (err, stdout, stderr) {
		fs.writeFileSync('temp.jpg', stdout, 'binary');
		var fileData = fs.readFileSync('temp.jpg');
  
                if (err) throw err;
                return UserModel.findById(req.params.id, function (err, user) {
                    user.Avatar.data = base64.fromByteArray(fileData);
                    user.Avatar.contentType = 'image/png';
                    user.save(function (err) {
                        res.send(user);
                    });
                });
                
            });
        });
        return res.send({ result: 'ok' });
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
        return UserModel.find({ _id: req.params.id }).select('Name Email Age Avatar').exec(function (err, users) {
            if (users.length == 1) {
                res.send(users[0]);
            } else {
                res.json({ err: 'not found' });
            }
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