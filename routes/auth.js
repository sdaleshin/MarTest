module.exports = function (app, options) {

    var LocalStrategy = require('passport-local').Strategy;
    var passport = options.passport;

    var models = options.models;
    var UserModel = models.User;

    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function (id, done) {
        UserModel.findById(id, function (err, user) {
            done(err, user);
        });
    });

    passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    },
      function (email, password, done) {
          UserModel.findOne({ Email: email }, function (err, user) {
              if (err) { return done(err); }
              if (!user) {
                  return done(null, false, { message: 'Incorrect username.' });
              }
              //if (!user.validPassword(password)) {
              //    return done(null, false, { message: 'Incorrect password.' });
              //}
              return done(null, user);
          });
      }
    ));

    app.post('/login', function (req, res, next) {
        passport.authenticate('local', function (err, user, info) {
            if (err) { return next(err); }
            if (!user) { return res.redirect('/login'); }
            req.logIn(user, function (err) {
                if (err) { return next(err); }
                return res.redirect('/users/' + user.username);
            });
        })(req, res, next);
    });
}