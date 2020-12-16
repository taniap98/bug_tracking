// const LocalStrategy = require('passport-local').Strategy;
// const bcrypt = require('bcrypt');

// function initialize(passport, getUserbyEmail, getUserbyId){
//     const authenticateUser = async (email, password, done) => {
//         const user = getUserbyEmail(email)
//         if(user == nul){
//             return done(null, false, {message: "No user with that email"});
//         }
//         try{
//             if(await bcrypt.compare(passport, user.password)){
//                 return done(null, user);
//             } else {
//                 return done(null, false, {message: "Wrong password"});
//             }
//         } catch(err){
//             return done(err);
//         }
//     }

//     passport.use(new LocalStrategy({ usernameField: 'email'},
//     authenticateUser))
//     passport.serializeUser((user, done) => done(null, user.id))
//     passport.deserializeUser((user, done) => { 
//         done(null, getUserbyId(id))
//     })
// }

// module.exports = initialize;

const LocalStrategy = require("passport-local").Strategy;

async function initPassport(passport, getUserByEmail, getUserById) {
  const authUser = async (email, password, done) => {
    const user = await getUserByEmail(email);
    if (user == null) {
      console.log("Este null ceva nu e bine");
      return done(null, false, { message: "No user with this email" });
    }
    try {
      if (password == user.password) {
        return done(null, user);
      } else {
        return done(null, false, { message: "Password incorrect" });
      }
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
