const router = require('express').Router()
const {
    User, Post
} = require('../models/')

router.get('/',(req,res)=>{
res.render('home',{
    layout:'main'
})
})

router.get('/signup',(req,res)=>{
    if (req.session.loggedIn){
        res.redirect('/')
        return
    }
    res.render('signup',{
        layout:"signup",
        style: "signup.css",
        
    })
})







module.exports = router