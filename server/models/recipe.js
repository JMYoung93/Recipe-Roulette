//Define Mongoose
const mongoose = require('mongoose');

//Create new instance of the mongoose schema to define the shape of recipe cards
const recipeCard = new mongoose.Schema({
    //Add individual recipe properties and their types
    //Setting required to `true` will disallow null values
    card: { type: String, required: true},
    diet: {type: String, required: true},
    
})