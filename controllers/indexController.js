module.exports.getIndex = (req,res)=>{
    const welcomeText ="Welcome to Marvel Universe \n use /movies to access the movie catalog and /snacks to see the snack menu";
    console.log("We are on welcome screen ", welcomeText);
    res.send(welcomeText);
}