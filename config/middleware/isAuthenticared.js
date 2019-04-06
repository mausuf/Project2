// restrict routes for users who aren't logged in

module.exports = function(req, res, next) {
  // give pass to users who are logged in

  if (req.user) {
    return next();
  }

  // redirects users who aren't logged in to the login page (index)
  return res.redirect("/");
};
