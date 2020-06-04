let mongoose=require('mongoose');
let pintores=require('../models/pintores');

let pintoresController={};

pintoresController.list=(req,res)=>{
    pintores.find({})
    .limit (20)
    .skip (0)
    .exec((err, serie)=>{
        if (err){
            console.log('Error:',err)
        }
        res.render('../views/index',{
            pintores:pintores,
            titulo:"Listado de pintores",
            year: new Date().getDate()
        })
    })
}

module.exports=pintoresController;
