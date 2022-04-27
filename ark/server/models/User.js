const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
// var passportLocalMongoose = require("passport-local-mongoose"); 


const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide a username"],
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
    unique: true,
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please provide a valid email",
    ],
  },
  password: {
    type: String,
    required: [true, "Please enter a password"],
    minlength: 6,
    select: false,
  },
});

//This function runs before a user is saved in the database using the mongoose pre functionality 
UserSchema.pre("save", async function(next) {
  if(!this.isModified("password")){ //checks if the password has been hashed or not, if hashed then ignore the function
    next();
  }

  const salt = await bcrypt.genSalt(10); //take 10 salt rounds
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

//Function to check passwords for login
UserSchema.methods.matchPassword = async function(password){
  return await bcrypt.compare(password, this.password);
};

// //This is Bex trying to track a session to see what user is logged in
// UserSchema.plugin(passportLocalMongoose); 

module.exports = mongoose.model("User", UserSchema);
