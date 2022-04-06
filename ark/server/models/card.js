const mongoose = require("mongoose");

const CardSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Card must have a title"]
    },
   
    views: {
        type: Number,
        required: [true, "Card must have a view tracker"],
        min: [0, 'Bellow zero views error'],
       
    },

    date: {
        type: Date,
        required: [false, "Card must have a date last edited"]
    }
})

module.exports = mongoose.model("Card", CardSchema);

var first_card = new CardSchema({title: 'Brecons Card',views:10})

first_card.save(function(err){
    if (err) return handleError(err);
    //saved
});