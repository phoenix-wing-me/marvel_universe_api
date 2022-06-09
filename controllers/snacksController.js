const Snack = require('../models/snacksModel');


module.exports.getSnacks = (req,res)=>{
    const snacks = Snack.find()
    .select("SnackId SnackName Cost")
    .then(result =>{
        res.status(200).json({snacksList:result});
    }) 
}

module.exports.postSnack = (req,res) =>{
    const snack = new Snack(req.body);
    snack.save().then(result=>{
        res.status(200).json({snacksList:result});
    })
}

module.exports.updateSnack = (req,res) =>{
    const query = {'SnackId':req.body.SnackId}
    const snack = Snack.findOneAndUpdate(query,req.body)
    .then(result=>{
        res.status(200).json(result);
    })
}

module.exports.deleteSnack =(req,res)=>{
    const query = {'SnackId':req.body.SnackId}
    const movie = Snack.findOneAndDelete(query)
    .then(result=>{
        res.status(200).json(result);
    })
}