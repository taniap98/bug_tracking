const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require('bcrypt');

async function initPassport(passport, getUserByEmail, getUserById) {
  const authUser = async (email, password, done) => {
    const user = await getUserByEmail(email);
    if (user == null) {
      console.log("Este null ceva nu e bine");
      return done(null, false, { message: "No user with this email" });
    }
    try {
      bcrypt.compare(password, user.password, (err, res) => {
        if(err)
           return done(null, false, { message: "Password incorrect" });
        if(!res)
          return done(null, false, { message: "Password incorrect" });

        return done(null, user);
      })  
    } catch (err) {
      return done(err);
    }
  };

  passport.use(new LocalStrategy({ usernameField: "email" }, authUser));
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    return done(null, getUserById(id));
  });
}

module.exports = initPassport;
