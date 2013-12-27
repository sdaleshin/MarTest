var application_root = __dirname,
  express = require("express"),
  path = require("path"),
  mongoose = require('mongoose');

var app = express();

process.on('uncaughtException', function(err) {
  console.log('Caught exception: ' + err);
});
// connect to mongo
var dbProduction = mongoose.createConnection('mongodb://localhost/my_database');

app.configure(function(){
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(application_root, "public")));
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
  app.set('views', path.join(application_root, "views"));
  app.set('view engine', 'ejs')
});

app.get('/', function(req, res){
  res.render('index.ejs');
});

var usersApi = require('./routes/users')(app, { 'mongoose': mongoose, 'db': dbProduction });

app.listen(3000);
