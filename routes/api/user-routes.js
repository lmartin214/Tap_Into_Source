const router = require('express').Router();
const { User, Post } = require('../../models');
const withAuth = require('../../utils/auth')

// The `/api/users` endpoint


router.post('/', withAuth , async (req, res) => {

try{
const newUser = await User.create({
  username:req.body.username,
  password:req.body.password,
})
req.session.save(()=>{
  req.session.userId = newUser.id,
  req.session.username = newUser.username,
  req.session.loggedIn = true
})
res.json(newUser)
}catch(err){
res.status(500).json(err)
}
});

router.put('/:id', withAuth, async (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
