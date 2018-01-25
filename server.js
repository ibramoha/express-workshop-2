const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const posts = require('./data/posts.json');
app.use(express.static("public", {'extensions': ['html']})); 
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.get("/", (req, res) => {
  res.render("index", {
    posts:posts
  });
});



app.get("/my-cv", (req, res) => {
  res.render("my-cv");
});


app.get("/admin", (req, res) => {
  res.render("admin");
});


// app.get("/contact", (req, res) => {
//   res.render("contact");
// });



// The extensions 'html' allows us to serve file without adding .html at the end 
// i.e /my-cv will server /my-cv.html



// what does this line mean: process.env.PORT || 3000
app.listen(process.env.PORT || 3000, function () {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});