module.exports = function(db,app) {
    console.log("working1");
    app.post('/api/getitem', function(req,res){
        console.log("working2");
        console.log(req.body);
        const collection = db.collection('products');
        collection.find({productID:Number(req.body.productid)}).toArray((err,data)=>{
            console.log("this"+data);
            res.send(data);
        })
    })
}