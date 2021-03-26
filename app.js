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
    title: "iDestiny - Home",
  });
});

app.get("/sale", (req, res) => {
  res.render("sale", {
    title: "iDestiny – Sale",
    Mac1Discount: " – ",
    Mac1OfferPrice: "₹92,900",
    Mac2Discount: " – ",
    Mac2OfferPrice: "₹1,29,900",
    Mac3Discount: " – ",
    Mac3OfferPrice: "₹1,99,900",
    Mac4Discount: "₹7,000",
    Mac4OfferPrice: "₹1,15,900",
    iPhone1Discount: "₹1,500*",
    iPhone1OfferPrice: "₹68,400",
    iPhone2Discount: " – ",
    iPhone2OfferPrice: "₹1,29,900",
    iPhone3Discount: " – ",
    iPhone3OfferPrice: "₹1,19,900",
    iPhone4Discount: "₹1,500*",
    iPhone4OfferPrice: "₹78,400",
    iPhone5Discount: "₹17,200*",
    iPhone5OfferPrice: "₹99,900",
    iPhone6Discount: "₹1,500*",
    iPhone6OfferPrice: "₹54,900",
    iPad1Discount: "₹4,000*",
    iPad1OfferPrice: "₹50,900*",
    iPad2Discount: "₹4,000*",
    iPad2OfferPrice: "₹62,900*",
    iPad3Discount: "₹3,000*",
    iPad3OfferPrice: "₹26,900*",
    iPad4Discount: "₹3,000*",
    iPad4OfferPrice: "₹38,900*",
    iPad5Discount: " – ",
    iPad5OfferPrice: "₹44,900",
    iPad6Discount: " – ",
    iPad6OfferPrice: "₹89,900",
    iPad7Discount: "₹6,901*",
    iPad7OfferPrice: "₹96,999*",
    iPad8Discount: " – ",
    iPad8OfferPrice: "₹34,900",
    tv1Discount: " – ",
    tv1OfferPrice: "₹14,100",
    tv2Discount: " – ",
    tv2OfferPrice: "₹17,430",
    tv3Discount: " 800 ",
    tv3OfferPrice: "₹18,680",
    WATCH1Discount: "₹3,000*",
    WATCH1OfferPrice: "₹37,900",
    WATCH2Discount: "₹3,000*",
    WATCH2OfferPrice: "₹49,900",
    WATCH3Discount: "₹2,000*",
    WATCH3OfferPrice: "₹27,900",
    WATCH4Discount: "₹2,000*",
    WATCH4OfferPrice: "₹34,900",
    WATCH5Discount: "₹3,000*",
    WATCH5OfferPrice: "₹66,900",
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

app.get("/delivery", (req, res) => {
  res.render("delivery", {
    title: "iDestiny - Delivery",
    NoticeText:
      "In response to COVID-19, our delivery partners are offering contactless delivery. Drivers may issue a one time password to the mobile phone number provided at time of purchase to satisfy the signature requirement. And, as always, delivery will be fast and free. Delivery to certain PIN codes is currently unavailable due to local COVID-19 restrictions.",
  });
});

app.get("/bill", (req, res) => {
  res.render("bill", {
    title: "iDestiny - Billing",
  });
});

app.get("/return", (req, res) => {
  res.render("return", {
    title: "iDestiny - Return",
  });
});

app.get("*", (req, res) => {
  res.render("error", {
    title: "iDestiny - Error404",
  });
});

app.listen(port, () => {
  console.log(`Server running succesfully at localhost:${port}`);
});

//if code not running then type this nodemon filename.js -e js,hbs
