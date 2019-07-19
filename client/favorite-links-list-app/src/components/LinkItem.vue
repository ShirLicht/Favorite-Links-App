<template>
    <div class="link-item" >
        <div class="img-div">
            <img id="linkImg" v-bind:src="link.image" width="100" height="100">
        </div>
        <div class="content-div">
            <h2 id="linkTitle">{{link.title}}</h2>
            <p id="linkDescription">{{link.desc}}</p>
            <a v-bind:href="link.url" id="url-p"> {{link.url}}</a>
        </div>
        <div class="del-btn-div">
            <button @click="$emit('del-link', link._id)" class="del">x</button>
        </div>
    </div>
</template>

<script>

export default {
    name: "LinkItem",
    props: ["link"]
}
</script>

<style scoped>
 .link-item{
        background: #f4f4f4;
        padding: 10px;
        border-bottom: 1px #ccc dotted;
        display: flex;
        margin-bottom: 10px;
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

 .content-div{
    padding-left:15px;
    width: 100%;
 }
   
</style>


