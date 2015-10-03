var passport = require('passport');

var index = function(req, res, next) {
  if (req.isAuthenticated()){
    res.render('index', { title: 'Home' });
  } else {
    res.redirect('/login');
  }
};

var login = function(req, res, next) {
  if (!req.isAuthenticated()){
    res.render('login', { title: 'Login' });
  } else {
    res.redirect('/');
  }
};

var logout = function(req, res) {
  req.logout();
  res.redirect('/');
};

module.exports.index = index;

module.exports.login = login;

module.exports.logout = logout;
