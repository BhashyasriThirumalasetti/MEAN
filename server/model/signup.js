const mongoose = require("mongoose");

// Define the schema
const signupSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true // Fixed 'require' to 'required'
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

// Create the model
const signupmodel = mongoose.model("signup", signupSchema);

// Export the model
module.exports = signupmodel;

