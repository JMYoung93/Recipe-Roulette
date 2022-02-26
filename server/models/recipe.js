//Define Mongoose
const mongoose = require('mongoose');

//Create new instance of the mongoose schema to define the shape of recipe cards
const recipeSchema = new mongoose.Schema({
    //Add individual recipe properties and their types
    //Setting required to `true` will disallow null values
    title: { type: String, required: true},
    diet: {type: String, required: true},
    allergies: {type: String, required: true},
});

//Using mongoose.model() to compile a model based on the schema
//recipeSchema is the name of the schema used to create a new instance of the model 
const Recipe = mongoose.model('Recipe', recipeSchema);

//Error handler function to be called when an error occurs when trying to save a document
const handleError = (err) => console.error(err);

//Using the model, we can create individual documents that have the properties defined
//in the schema

Recipe.create(
    {
        title: {title},
        diet: {diet},
        allergies: {allergies}
    },
    (err) => (err ? handleError(err) : console.log('Created New Document'))
);

module.exports = Recipe;