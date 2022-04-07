const mongoose = require("mongoose");

const UserSchema = new mongoose.UserSchema({
    username: {
        type: String,
        required: [true, "Please provide a username"]
    },
    email:{
        type: String,
        required: [true, "Please provide an email"],
        unique: true,
        match: [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please provide a valid email",],
    },
    password: {
        type: String,
        required: [true, "Please enter a password"],
        minlength: 6,
        select: false
    },
})

module.exports = mongoose.model("User", UserSchema);