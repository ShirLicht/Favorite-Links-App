<template>

  <div id="app">
    <link href="https://fonts.googleapis.com/css?family=Caveat&display=swap" rel="stylesheet">
    <Header/>
    <AddLink v-on:add-link="addLink"/>
    <Links v-bind:links="links" v-on:del-link="deleteLink"/>
  </div>
</template>

<script>
import LinkService from './components/LinkService.js';
import Header from './components/layout/Header';
import Links from './components/Links';
import AddLink from './components/AddLink';


export default {
  name: 'app',
  components: {
    Header,
    Links,
    AddLink
  },
  data(){
    return{
      links :[]
    }
  },
  methods:{

      async deleteLink(id){
        
        //Delete the link with the given id from the server
        await LinkService.deleteLink(id);
        //Get the updated links list from the server
        this.links = await LinkService.getLinks();
      },
      async addLink(newLink){
        console.log("new Link: " + newLink);
        if(newLink==null || newLink=="")
        {
           window.alert("Link can not be empty!!!! Please enter a valid url!");
            console.log("err");
          
        }
        else{
            //Add the new link to the database
          await LinkService.addLink(newLink);
          //Get the updated links list from the server
          this.links = await LinkService.getLinks();
        }
       

       
      }
  },
  async created(){
    try{
      //Get the links array from the server
      this.links = await LinkService.getLinks();
      
    }catch(err){
      console.log(err.message);
    }
  }
}
</script>

<style>

*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body{
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.4;
  }

 .btn{
    display: inline-block;
    border: none;
    background: #555;
    color: #fff;
    padding: 7px 20px;
    cursor: pointer;
  }

  .btn:hover{
    background: #666;
  }
</style>
