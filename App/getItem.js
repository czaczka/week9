module.exports = function(db,app) {
    app.get('/api/getitem', function(req,res){
        const collection = db.collection('products');
        collection.find({productID: productID}).toArray((err,data)=>{
            console.log(data);
            res.send(data);
        })
    })
}