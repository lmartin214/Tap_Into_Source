const router = require("express").Router();
const { User, Post } = require("../models/");

router.get("/", (req, res) => {
  res.render("home", {
    layout: "main",
  });
});

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

router.get("/post", (req, res) => {
  res.render("post", {
    layout: "main",
  });
});

router.get("/search", (req, res) => {
  res.render("search", {
    layout: "main",
  });
});

module.exports = router;
