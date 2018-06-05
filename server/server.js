const express = require('express')
const mongoose = require('mongoose')
const DB_URL = 'mongodb://localhost:27017/imooc'
mongoose.connect(DB_URL)
mongoose.connection.on('connected', function(){
    console.log('mongosuccess')
})

const User = mongoose.model('user', new mongoose.Schema({
    user:{
        type:String,
        require:true
    },
    age:{
        type: Number,
        require:true
    }
}))
// User.create({
//     user: 'zzw',
//     age: 24
// }, function(err,doc){
//     if(!err){
//         console.log(doc)
//     }else{
//         console.log(err)
//     }
// })
const app = express()
app.get('/', function (req,res) {
    res.send('<h1>hello zzw</h1>')
})

app.get('/data', function (req,res) {
    User.find({}, function (err, doc) {
        res.json(doc)
    })
})
app.listen(9093,function(){
    console.log('zzw')
})