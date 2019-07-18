const express = require('express');
const mongodb = require('mongodb');
const MongoClient = require('mongodb').MongoClient;
const urlMetadata = require('url-metadata');
const router = express.Router();

//Get Links
router.get('/', async(req,res) => {
    const links = await loadLinksCollection();

    //send an array of links that are in the database
    res.send(await links.find({}).toArray());
});

//Add Link
router.post('/', async(req,res) => {
    const links = await loadLinksCollection();
    const metaArr = getUrlMetadata(req.body.url);

    await links.insertOne({
        url: req.body.url,
        image: metaArr[0],
        title: metaArr[1],
        desc: metaArr[2]
    });

    //return status 201 - everythink is ok and somethink was created
    res.status(201).send();
});

//Delete Link
router.delete('/', async(req,res) => {
    const links = await loadLinksCollection();

    //delete a link from the links collection based on the id that is recieved in req.params
    await links.deleteOne({_id: new mongodb.ObjectID(req.params.id)});

     //return status 200 - everythink is ok 
    res.status(200).send();

});

function getUrlMetadata(url){
    const metaArr = [];
    urlMetadata(url).then(
      function (metadata) { // success handler
        console.log(metadata);
        metaArr.push(metadata["og:image"]);
        metaArr.push(metadata["og:title"]);
        metaArr.push(metadata["og:description"]);
      },
      function (error) { // failure handler
        console.log(error)
      })

      return metaArr;
} 
//Handle Database

async function loadLinksCollection(){
        //Connection URL - to the project's db
        const url = 'mongodb://localhost:27017/favorite_links';

        //Database Name
        const databaseName = 'favorite_links';
        //Create a new MongoClient
        const client = await MongoClient.connect(url , {
            useNewUrlParser:true
        });

        //Get the links collection
        return client.db(databaseName).collection('links');


}


module.exports = router;