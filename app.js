const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 8080;
app.listen(PORT, ()=>{console.log(`App listening on port ${PORT}`)});

const bodyParser = require('body-parser');

const mongoose = require('mongoose');
mongoose.connect(
    process.env.MONGO_URI,
    {useNewUrlParser:true}
    )
    .then(()=>console.log('DB connected'));

mongoose.now('error',(err)=>{
    console.log('some error occured durig connection');
    console.log(err);
})


const {router} = require('./router/routeHandler');
app.use(bodyParser.json());
app.use('/',router);