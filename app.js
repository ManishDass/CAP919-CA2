const path = require("path");
var expr = require("express");
const hbs = require("hbs");
const port = process.env.PORT || 3000;

var app = expr();

const content = path.join(__dirname, "./template/views");
const components = path.join(__dirname, "./template/partials");
const csspath = path.join(__dirname, "./template/partials");

app.set("view engine", "hbs");
app.set("views", content);

hbs.registerPartials(components);
app.use(expr.static(csspath));

app.get("", (req, res) => {
  res.render("index", {
    location: "Home Page",
    author: "Manish",
    mString: "This is string value in H1 Bold Style",
  });
});

app.get("/sale", (req, res) => {
  res.render("sale", {
    location: "Sale Page",
    author: "Manish",
  });
});

app.get("/delivery", (req, res) => {
  res.render("delivery", {
    location: "Delivery Page",
  });
});

app.get("/bill", (req, res) => {
  res.render("bill", {
    location: "Billing Page",
  });
});

app.get("/return", (req, res) => {
  res.render("return", {
    location: "Return Page",
  });
});

app.get("/data", (req, res) => {
  res.render("data", {
    location: "Data Page",
    author: "Vikas",
    semNo1: "I",
    semNo2: "II",
    semNo3: "III",
    semNo4: "IV",
    semNo5: "V",
    tgpa1: 3.3,
    tgpa2: 2.4,
    tgpa3: 3.8,
    tgpa4: 4.3,
    tgpa5: 5.6,
  });
});

app.get("*", (req, res) => {
  res.render("error");
});

app.listen(port, () => {
  console.log(`Server running succesfully at port ${port}`);
});

//if code not running then type this nodemon filename.js -e js,hbs
