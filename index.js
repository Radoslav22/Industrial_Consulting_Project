const express = require("express");
const path = require("path");
const app = express();
app.set("view engine", "ejs");
app.use(express.static(path.resolve(__dirname, 'public')));
const port = 3000;


app.get("/", (req, res) => {
    res.render("index");
});

app.get("/login", (req, res) => {
    res.render("login");
});

app.get("/signup", (req, res) => {
    res.render("signup");
});

app.get("/jobapply", (req, res) => {
    res.render("jobapply")
})
app.get("/applysuccess", (req, res) => {
    res.render("applysuccess")
})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});