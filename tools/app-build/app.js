var application_root=__dirname,express=require("express"),path=require("path"),mongoose=require("mongoose"),passport=require("passport"),app=express();process.on("uncaughtException",function(e){console.log("Caught exception: "+e)});var dbProduction=mongoose.createConnection("mongodb://localhost/my_database");app.configure(function(){app.use(express.cookieParser()),app.use(express.bodyParser()),app.use(express.methodOverride()),app.use(express.session({secret:"keyboard cat"})),app.use(passport.initialize()),app.use(passport.session()),app.use(app.router),app.use(express.static(path.join(application_root,"public"))),app.use(express.errorHandler({dumpExceptions:!0,showStack:!0})),app.set("views",path.join(application_root,"views")),app.set("view engine","ejs")}),app.get("/",function(e,t){console.log(e.user&&e.user.Name),t.render("index.ejs")});var models={User:require("./schemas/userSchema")(dbProduction)},auth=require("./routes/auth")(app,{models:models,passport:passport}),usersApi=require("./routes/users")(app,{models:models});app.listen(3e3);