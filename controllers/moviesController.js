const Movie = require('../models/moviesModel');


module.exports.getMovies = (req,res)=>{
    const movies = Movie.find()
    .select("MovieId MovieName ReleasedYear")
    .then(result =>{
        res.status(200).json({moviesList:result});
    }) 
}

module.exports.postMovie = (req,res) =>{
    const movie = new Movie(req.body);
    movie.save().then(result=>{
        res.status(200).json({moviesList:result});
    })
}

module.exports.updateMovie = (req,res) =>{
    const query = {'MovieId':req.body.MovieId}
    const movie = Movie.findOneAndUpdate(query,req.body)
    .then(result=>{
        res.status(200).json(result);
    })   
}

module.exports.deleteMovie =(req,res)=>{
    const query = {'MovieId':req.body.MovieId}
    const movie = Movie.findOneAndDelete(query)
    .then(result=>{
        res.status(200).json(result);
    })
}