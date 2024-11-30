const express = require("express");
const router = express.Router();
const User = require("../models/user");
const passport = require("passport");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Atrianezi", user: req.user });
});

// GET /login
router.get("/login", (req, res, next) => {
  // res.render('login', { title: 'Login' });
  // Obtain session messages if any
  let messages = req.session.messages || [];
  // Clear messages
  req.session.messages = [];
  // Pass messages to view
  res.render("login", { title: "Login", messages: messages, user: req.user });
});

// POST /login
// Syntax will be a bit different since login will be handled by passport
router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureMessage: "Invalid credentials",
  })
);

// GET /register
router.get("/register", (req, res, next) => {
  res.render("register", { title: "Create a new account", user: req.user });
});

//POST /register
router.post("/register", (req, res, next) => {
  // Create a new user based on the information from the page
  // three parameters: new user object, password, callback function
  User.register(
    new User({
      username: req.body.username,
    }),
    req.body.password,
    (err, newUser) => {
      if (err) {
        console.log(err);
        // take user back and reload register page
        return res.redirect("/register");
      } else {
        // log user in and redirect
        req.login(newUser, (err) => {
          res.redirect("/products");
        });
      }
    }
  );
});

// GET /logout
router.get("/logout", (req, res, next) => {
  req.logout((err) => {
    res.redirect("/login");
  });
});

// GET /github
// triggers when user clicks on the "Login with Github" button on the login page
// user is sent to github.com in order to provide credentials
router.get(
  "/facebook",
  passport.authenticate("facebook")
);

// GET /github/callback
router.get(
  "/facebook/callback", // path
  passport.authenticate("facebook", { failureRedirect: "/login" }), // github middleware
  (req, res, next) => {
    res.redirect("/products");
  } // custom middleware (success)
);

module.exports = router;
