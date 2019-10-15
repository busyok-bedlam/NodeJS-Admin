const LocalStrategy = require('passport-local').Strategy;

module.exports = passport => {
  passport.use(new LocalStrategy(
    function(username, password, done) {
      return done(null, {username, password})
      // Item.findOne({ username: username }, function (err, user) {
      //   if (err) { return done(err); }
      //   if (!user) {
      //     return done(null, false, { message: 'Incorrect username.' });
      //   }
      //   if (!user.validPassword(password)) {
      //     return done(null, false, { message: 'Incorrect password.' });
      //   }
      //   return done(null, user);
      // });
    }
  ));

  passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
  // passport.deserializeUser(function(id, done) {
  //   User.findById(id, function(err, user) {
  //     done(err, user);
  //   });
  // });
}
