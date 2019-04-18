var crypto = require('crypto');

/*
 * GET home page.
 */

exports.index = function(req, res){
  if (res.locals.user) {
    res.redirect('/tasks');
  } else {
    res.render('index', { csrf: res.locals._csrf });
  }

  
};

exports.login = function(req, res, next){
  var username = req.body.username;
  var pass = req.body.pass;
  var hash = crypto.createHash('sha256').update(pass).digest('base64');
  
  req.db.all("select * from users where username = ? and passwd = ?", username, hash, function(err, rows) {
    if (err) return next(err);
    if (rows.length == 0) {
      res.render('index', {errmsg: 'No such user/password.', csrf: res.locals._csrf, username: username });
    } else {
      res.cookie('user', username);
      res.redirect('/tasks');
    }
  });
};

exports.logout = function(req, res, next) {
  res.clearCookie('user');
  res.redirect('/');
}