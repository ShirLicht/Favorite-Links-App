<template>
    <div class="link-item" >
        <div class="img-div">
        <img id="linkImg" v-bind:src="link.image" width="100" height="100">
        </div>
         <div class="content-div">
        <h2 id="linkTitle">{{link.title}}</h2>
        <p id="linkDescription">{{link.desc}}</p>
        <p id="url-p"> {{link.url}}</p>
        </div>
        <div>
        <button @click="$emit('del-link', link.id)" class="del">x</button>
        </div>
    </div>
</template>

<script>

export default {
    name: "LinkItem",
    props: ["link"],
    methods : {
           getData(){
                console.log("create");
                const urlMetadata = require('url-metadata');
            
                urlMetadata('https://cors-anywhere.herokuapp.com/'+this.link.url).then(
                function (metadata) { // success handler
                    console.log(metadata);
                   document.getElementById("linkImg").src = metadata.image;
                    document.getElementById("linkTitle").innerHTML = metadata.title;
                    document.getElementById("linkDescription").innerHTML = metadata.description;
                }).catch(err => console.log(err))
                            }
                    }
}
</script>

<style scoped>
 .link-item{
        background: #f4f4f4;
        padding: 10px;
        border-bottom: 1px #ccc dotted;
        display: flex;
    }
 .del{
        background: #ff0000;
        color: #fff;
        border: none;
        padding: 5px 9px;
        border-radius: 50%;
        cursor: pointer;
        float: right;
    }
    #url-p{
        font-weight: bold;
    }
    .img-div{
        padding: 10;
    }
   
</style>


