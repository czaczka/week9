module.exports = function(db,app) {
    app.post('/api/add', async function(req,res){
        if (!req.body) {
            return res.sendStatus(400)
        }
        product = req.body;
        console.log(product);
        const collection = db.collection('products');

        await collection.find({'productID':product.productID}).toArray(function(err,docs){console.log(docs)})


        collection.find({'productID':product.productID}).count((err,count)=>{
            if (count == 0){
                collection.insertOne(product,(err,dbres)=>{
                    if (err) throw err;
                    let num = dbres.insertedCount;

                    res.send({'num':num,err:null});
                })
            } else {
                res.send({num:0,err:"duplicate item"});
            }
        })
    })
}