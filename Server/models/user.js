const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt-nodejs");

const UserSchema = new Schema({
  name: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  address: { type: String, required: true },
  plz: { type: String, required: true },
  city: { type: String, required: true },
});

UserSchema.pre("save", function (next) {
  // .pre says that before saving users Object t the database run this code first
  let user = this;
  if (this.isModified("password") || this.isNew) {
    // if password is modified or is an new password then go in to the statement
    bcrypt.genSalt(10, function (err, salt) {
      // generate a 10 long random characters
      if (err) {
        return next(err);
      }

      bcrypt.hash(user.password, salt, null, function (err, hash) {
        // the generated 10 long random characters will get mixed with the password and then outputed in hash
        if (err) {
          return next(err);
        }
        console.log(hash);
        user.password = hash; // store the hash in the users password
        next(); // the statement ends here and the Object can then be stored
      });
    });
  } else {
    return next();
  }
});

UserSchema.methods.comparePassword = function (password, next) {
  // We are creating a new method function named comparePassword with the parameters password and next
  let user = this;
  return bcrypt.compareSync(password, user.password); // We compare the parameter password withe the hashed password. If its a match then we become true, if not false
};

module.exports = mongoose.model("User", UserSchema);

//Salt hashing(mixen) is a technique in which we take the user entered password and a random string of characters called as salt, hash the combined string with a sutaible hashing algorithm and store the result in the database.
