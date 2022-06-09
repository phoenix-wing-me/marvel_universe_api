const mongoose = require('mongoose');
const movieSchema = mongoose.Schema({
    MovieId:{
        type:Number,
        required:true
    },
    MovieName:{
        type:String,
        required:true,
    },
    ReleasedYear:{
        type:Number,
        required:true
    }
})

module.exports = mongoose.model("Movie",movieSchema);