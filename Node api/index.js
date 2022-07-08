const express =require('express');
const app=express();
const mongo=require('mongodb');
const Mongoclient=mongo.MongoClient;

const cors=require('cors')
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))


const url="mongodb+srv://knyhago:kenny@cluster0.2kzve.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"



const port=process.env.PORT||9090;

app.get('/',(req,res)=>{
    res.send("ok")
})

app.get('/getblog',(req,res)=>{
    db.collection('blogdata').find().toArray((err,result)=>{
        if (err) throw err
        res.send(result)
    })
})
app.post('/postblog',(req,res)=>{
    db.collection('blogdata').insertOne(req.body,(err,suc)=>{
        if (err) throw err
        res.status(200).send("added")
    })
})



Mongoclient.connect(url,(err,connectio)=>{
    if(err) throw err
    db=connectio.db('Blog')
    app.listen(port,(err,suc)=>{
        if (err) throw err
        console.log(`running on${port}`)
    })
})



