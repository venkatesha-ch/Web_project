const mongoose = require("mongoose");

var budget_track = mongoose.Schema(
    {   
        name: {type:String},
        total_collection: {type:Number, default: 0},
        total_expense: {type:Number, default: 0}

    }
)

const Budget = mongoose.model("balance", budget_track);

module.exports = Budget;