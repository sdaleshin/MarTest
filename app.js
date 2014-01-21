var application_root = __dirname,
  express = require("express"),
  path = require("path"),
  mongoose = require('mongoose'),
  passport = require('passport')

var app = express();

process.on('uncaughtException', function (err) {
    console.log('Caught exception: ' + err);
});
// connect to mongo
var dbProduction = mongoose.createConnection('mongodb://localhost/my_database');

app.configure(function () {
    app.use(express.cookieParser());
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.session({ secret: 'keyboard cat' }));
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(app.router);
    app.use(express.static(path.join(application_root, "public")));
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
    app.set('views', path.join(application_root, "views"));
    app.set('view engine', 'ejs')
});

app.get('/', function (req, res) {
    console.log(req.user&&req.user.Name);
    res.render('index.ejs');
});

var models = {
    User: require('./schemas/userSchema')(dbProduction)
};

var auth = require('./routes/auth')(app, { 'models': models, 'passport': passport });
var usersApi = require('./routes/users')(app, { 'models': models });

app.listen(3000);
