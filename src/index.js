const express = require("express");
const {engine} = require("express-handlebars");
const path = require("path");
const {PORT} = require("./config");

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


app.get("/", (req, res)=>{
    res.render("index.hbs");
});

app.listen(PORT, ()=>{
    console.log(`Server on port ${PORT}`);
});