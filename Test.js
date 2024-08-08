const mongoose = require("mongoose");

var donation = mongoose.Schema({
    name: { type: String, uppercase: true},
    date: [{type: String}],
    amount: [{type:Number}],
    total: Number
});


const Donation = mongoose.model("Donation", donation);


module.exports = Donation;
