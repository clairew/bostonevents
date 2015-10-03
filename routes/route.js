
var index = function(req, res, next) {
  if (!req.isAuthenticated()){
    res.redirect('/login');
  } else {
    res.render('index', { title: 'Home' });
  }
};


var accounts = function(req, res, next) {
  if (!req.isAuthenticated()){
    res.redirect('/login');
  } else {
    res.render('accounts', { title: 'Accounts' });
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
  res.redirect('/login');
};


//****************************************************************//

module.exports.index = index;

module.exports.login = login;

module.exports.logout = logout;

module.exports.accounts = accounts;
