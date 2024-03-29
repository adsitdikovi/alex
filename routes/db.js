/**
 * Created by Diana on 6/30/2014.
 */
var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/alex');

var movieSchema = new mongoose.Schema({
    id: {type: Number},
    title: { type: String }
    , rating: String
    , releaseYear: Number
    , hasCreditCookie: Boolean
});

// Compile a 'Movie' model using the movieSchema as the structure.
// Mongoose also creates a MongoDB collection called 'Movies' for these documents.
var Movie = mongoose.model('Movie', movieSchema);

var thor = new Movie({
    title: 'Thor'
    , rating: 'PG-13'
    , releaseYear: '2011'  // Notice the use of a String rather than a Number - Mongoose will automatically convert this for us.
    , hasCreditCookie: true
});

thor.save(function(err, thor) {
    if (err) return console.error(err);
    console.dir(thor);
});


router.get('/', function(req, res) {
    res.send('respond with a resource');
});

module.exports = router;
