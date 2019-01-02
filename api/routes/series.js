const express = require('express');
const router = express.Router();

const mongoose = require("mongoose");

var db = mongoose.connection;
var Schema = mongoose.Schema;
mongoose.set('useFindAndModify', false);


var serieSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: mongoose.Schema.Types.String,
    grade: mongoose.Schema.Types.Number,
    seasons: mongoose.Schema.Types.Number,

  }, {collection: 'series'}
  ,{
    versionKey: false // You should be aware of the outcome after set to false
  }
  );
  
  var SerieData = mongoose.model('SerieData', serieSchema);

router.get("/", (req, res, next) => {
    var data = [];
    
    SerieData.find().exec(function(err,result){
        if(err){
            console.log(err);
        }else{
            const serieList ={
                "series":result
            }
            data.push(serieList);
            console.log(data);
            res.send(data);
            
        }
    })
});
/* 
router.post("/insert", (req, res, next) => {
    console.log(req.body);
    var player1points = [];
    var player2points = [];
    for(var i = 0;i<5;i++){
        if(req.body.player1points[i]!=0 || req.body.player1points[i]!=null || req.body.player1points[i]!='' || req.body.player1points[i]!=undefined){
            player1points.push(req.body.player1points[i]);
            player2points.push(req.body.player2points[i]);
        }else{
            break;
        }
    }
    const match = {
        _id: new mongoose.Types.ObjectId(),
        player1id: req.body.player1Id,
        player2id: req.body.player2Id,
        player1points : player1points,
        player2points : player2points,
    }
    var data = new MatchData(match);
    data.save().then(
        result=>{
            res.send(data);
        },
        error=>{
            res.send(error.name);
        }
    )

});

router.delete("/delete/:id", (req, res, next) => {
    console.log(req.params.id);
    MatchData.findByIdAndRemove(req.params.id).exec().then(
        result=>{
            res.send(result);
        },
        error=>{
          console.log("error");
          res.send(error.name);
        }
    );
});

router.put("/update/:id",(req,res,next)=>{
}) */



module.exports = router;