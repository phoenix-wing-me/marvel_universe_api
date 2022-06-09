const express = require('express');
const router = express.Router();

//GET: /
const {getIndex} = require('../controllers/indexController');
router.get('/',getIndex);

//CRUD: /movies
const {getMovies,postMovie,updateMovie,deleteMovie} = require('../controllers/moviesController');
router.get('/movies',getMovies);
router.post('/movies',postMovie);
router.patch('/movies',updateMovie);
router.delete('/movies',deleteMovie);

//CRUD: /snacks
const {getSnacks,postSnack,updateSnack,deleteSnack} = require('../controllers/snacksController');
router.get('/snacks',getSnacks);
router.post('/snacks',postSnack);
router.patch('/snacks',updateSnack);
router.delete('/snacks',deleteSnack);

module.exports.router = router;