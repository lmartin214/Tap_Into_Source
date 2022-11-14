const router = require('express').Router();
const { User, Post } = require('../../models');
const withAuth = require('../../utils/auth')

// The `/api/users` endpoint


router.post('/' , async (req, res) => {

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

router.get(':id',(req, res) => {
  User.findOne({
    attributes:{exclude:['password']},
    where:{
    id:req.params.id
  }
  })
.then(dbUserData => {
  if (!dbUserData) {
    res.status(404).json({message: 'No user found with this id'});
    return;
  }
  res.json(dbUserData);
})
.catch(err => {
  console.log(err);
  res.status(500).json(err);
});
});

router.put('/:id', (req, res) => {
    (req.body,{
    individualHooks: true,
    where: {
      id:req.params.id
    }
  })
  .then(dbUserData => {
    if(dbUserData[0]) {
      res.status(404).json({message: 'No user found with this id'});
      return;
    }
    res.json(dbUserData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.delete('/:id', (req, res) => {
  User.destroy({
    where:{
      id:req.params.id
    }
  })
  .then(dbUserData => {
    if(dbUserData) {
      res.status(404).json({message:'No user found with this id'});
      return;
    }
    res.json(dbUserData);
  })
  .catch(err =>{
    console.log(err);
    res.status(500).json(err);
  });
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
