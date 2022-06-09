const mongoose = require('mongoose');
const snackSchema = mongoose.Schema({
    SnackId:{
        type:Number,
        required:true
    },
    SnackName:{
        type:String,
        required:true,
    },
    Cost:{
        type:Number,
        required:true
    }
});

module.exports = mongoose.model("Snack",snackSchema);