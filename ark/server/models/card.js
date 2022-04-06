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

SomeModel.create({ title: 'Brecons Card',views:10}, function (err, first_card) {
    if (err) return handleError(err);
    // saved!
  });

  // Access model field values using dot notation
console.log(first_card.name); //should log 'also_awesome'

// Change record by modifying the fields, then calling save().
first_card.title="New cool name";
first_card.save(function (err) {
  if (err) return handleError(err); // saved!
});