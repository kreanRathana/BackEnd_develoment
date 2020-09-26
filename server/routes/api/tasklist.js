const express = require('express');
const mongodb = require('mongodb');
const router = express.Router();

// get tasklist 

router.get("/" , async (req , res ) => {
    const posts = await loadTasksCollection();
    res.send(await posts.find({}).toArray());
});

// addd tasklist

router.post("/" , async (req , res ) => {
    const posts = await loadTasksCollection();
    await posts.insertOne({
        task:req.body.text , id:req.body.number , Datacreate: new Date()
    });
    res.status(201).send();
})

// delete tasklist 

router.delete("/:id" , async(req , res ) => {
const posts = await loadTasksCollection();
await posts.deleteOne({_id:new mongodb.ObjectID(req.params.id)})

res.status(200).send();
});
async function loadTasksCollection(){

    const client = await mongodb.MongoClient.connect("mongodb+srv://rathana:1234@rathanaclouddb.fj7r8.mongodb.net/test"  
    , {useNewUrlParser: true } )

    return client.db("my_taklist").collection("mytask");
}

module.exports = router;