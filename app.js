const express = require('express')
const app = express()
const bodyParser = require('body-parser');
// const port = 4000;
const port = process.env.PORT;

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

app.use('/', function(req, res, next){
    var resultArray = [];
    MongoClient.connect(url, (err, db) => {
        var dbo = db.db("local");
        if (err) throw err;
       var cursor = dbo.collection("demo").find({}).toArray(function(err, result){
            if (err) throw err;
           // console.log(result);
            
            res.send(result);
        },  function(){
            db.close();
           // res.render(result)
        })
    })
})


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const productRoute = require('./api/routes/products');
const orderRoute = require('./api/routes/orders');

app.use(productRoute);
app.use(orderRoute);

app.listen(port || 4000, () => {
    console.log('Server is up on port', port || 4000)
})