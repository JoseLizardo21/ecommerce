const express = require("express");
const session = require("express-session");
const {engine} = require("express-handlebars");
const flash = require("connect-flash");
const path = require("path");
const {PORT} = require("./config");
const morgan = require("morgan");
const passport = require("passport")

//initializatons
const app = express();

//settings
app.set("views", path.join(__dirname, "views"))
app.engine(".hbs", engine({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: ".hbs"
}))
app.set("view engine", ".hbs");

//midlewars
app.use(express.urlencoded({ extended: false }))
app.use(express.json());
//app.use(morgan('dev'))
app.use(session({
    secret: 'akaakka',
    resave: false,
    saveUninitialized: false,
}))
app.use(flash())
app.use(passport.initialize());
app.use(passport.session())
//global varibles
app.use((req, res, next)=>{
    app.locals.message = req.flash("message");
    next();
}) 

//Routes
app.use(require("./routes/authentication.routes.js"));
app.use("/servicios", require("./routes/services.routes.js"));
app.use("/contactanos", require("./routes/contactUs.routes.js"));
app.use("/reservarCitas", require("./routes/appointments.routes.js"));
app.use("/packs", require("./routes/packs.routes.js"));
app.use("/", require("./routes/home.routes.js"));
app.use("/libroReclamaciones", require("./routes/complaintsBook.routes.js"));


//static files
app.use(express.static(path.join(__dirname, "public")))

app.listen(PORT, ()=>{
    console.log(`Server on port ${PORT}`);
});