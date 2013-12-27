module.exports = function (app, options) {

    var mongoose = options.mongoose;
    var Schema = options.mongoose.Schema;
    var db = options.db;

    var UserModel = require('../schemas/userSchema')(db);

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
        // more code
      });
    });

    app.put('/api/users/:id', function (req, res) {
      return UserModel.findById(req.params.id, function (err, user) {
        // more code
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