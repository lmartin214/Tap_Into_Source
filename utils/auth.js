 //with authentication middleware that redirects user to login page if no Session is found
 const withAuth = (req, res, next) => {
    if (!req.session.logged_in) {
      res.redirect("/login");
    } else {
      next();
    }
  };
  
  module.exports = withAuth;