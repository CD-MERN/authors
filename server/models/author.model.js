const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
    name: { 
        type: String,
        required:[true,"The name is required"],
        minLength: [3, "The name must be at least 3"],
        trim: true
    },
},
    { timestamps: true }
)

const Author = mongoose.model('Author', AuthorSchema);

module.exports = Author;