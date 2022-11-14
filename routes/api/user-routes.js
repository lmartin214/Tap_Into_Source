const router = require('express').Router();
const { User, Post } = require('../../models');

// The `/api/users` endpoint


router.post('/',async (req, res) => {

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

router.post('/login', (req, res) => {
  User.findOne({
      where: {
      email: req.body.username
    }

  }).then(dbUserData => {
    if (!dbUserData) {
      res.status(400).json({ message: 'No user with that email name!' });
      return;
    }

    const validPassword = dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect password!' });
    }
  })
}),      

module.exports = router;
