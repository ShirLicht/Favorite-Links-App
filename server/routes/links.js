const express = require('express');
const mongodb = require('mongodb');
const MongoClient = require('mongodb').MongoClient;
const urlMetadata = require('url-metadata');

const router = express.Router();

//Get Links
router.get('/', async(req,res) => {
    
    //connect to the database and get the links collection
    const links = await loadLinksCollection();
    
    //send an array of links that are in the database
    //get all the documents in the links collection and make an array out of them
    res.send(await links.find({}).toArray());
});

//Add Link
router.post('/', async(req,res) => {

    //connect to the database and get the links collection
    const links = await loadLinksCollection();
    
    //get the wanted metadata of the given url
    const metaArr = await getUrlMetadata(req.body.urlToAdd);

    //check if there is something wrong with the url or it's metadata - if there is throw an error
    if (metaArr == null || metaArr == undefined){
        res.status(404).send('url not found');
    }
    else{

        //Check if there is an image provided in the metadata of the url - if no image is provided add a "No_image_available" image
        if(metaArr[0]==null||metaArr[0]==""){
            metaArr[0] = "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg";
            console.log(metaArr[0]);
        }
        //add the new link to the links collection 
        await links.insertOne({
            url: req.body.urlToAdd,
            image: metaArr[0],
            title: metaArr[1],
            desc: metaArr[2]
        });

        //return status 201 - everything is ok and something new was created
        res.status(201).send();

    }
    
});

//Delete Link
router.delete('/:id', async(req,res) => {
    
    //connect to the database and get the links collection
    const links = await loadLinksCollection();

    //delete a link from the links collection based on the id that is recieved in req.params
    await links.deleteOne({_id: new mongodb.ObjectID(req.params.id)});

     //return status 200 - everything is ok 
    res.status(200).send();

});

async function getUrlMetadata(url){
    var metaArr = [];
    
    //the urlMetadata method returns all the metadata of the given url
    //metadata - includes all the metadata of the given url
    //metaArr - includes only the image, title and description out of the metadata of the given url
    metaArr = await urlMetadata(url).then(
      function (metadata) { // success handler
        var customMetaData = [];
        customMetaData.push(metadata.image);
        customMetaData.push(metadata.title);
        customMetaData.push(metadata.description);
        
        return customMetaData;

        
      },
      function (error) { // failure handler
        console.log(error);
        return null;
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