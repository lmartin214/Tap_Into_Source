const router = require("express").Router();
const { User, Post } = require("../models/");
const withAuth = require("../utils/auth");

router.get("/", (req, res) => {
  res.render("home", {
    layout: "homelayout",
    style: "home.css",
  });
});

// router.get('/profile', withAuth ,(req,res)=>{

router.get('/profile',(req,res)=>{
    res.render('profile',{
        layout:'profilelayout',
        style: "profile.css",
    })
    })

router.get('/signup',(req,res)=>{
    if (req.session.loggedIn){
        res.redirect('/')
        return
    }
    res.render('signup',{
        layout:"signuplayout",
        style: "signup.css",
        
    })
})

router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return
  }
  res.render("signup", {
    layout: "signuplayout",
    style: "signup.css",
  });
});

router.get("/post", (req, res) => {
  res.render("post", {
    layout: "home",
  });
});





module.exports = router