var express=require("express");
var cool=require("cool-ascii-faces");
var app=express(),
    Router=express.Router();

app.use(express.static('public'));
app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin','http://localhost:7770');
    res.header('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
    res.header('Access-Control-Allow-Headers','Origin,X-Requested-With,Content-Type,Accept');
    res.header('Access-Control-Allow-Credentials',true);
    next();
});
Router.get('/',(req,res)=>{
    res.status(200).send('<b>Hey There!!!</b> <hr/>Welcome');
});
Router.get('/coolFaces',(req,res)=>{
    res.status(200).send(cool());
});
app.use('/',Router);
app.listen(5250,()=>{
    console.log('App listening Port 5250');
});

