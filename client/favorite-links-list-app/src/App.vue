<template>
  <div id="app">
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

      deleteLink(id){
        this.links = this.links.filter(link => link.id !== id);
      },
      async addLink(newLink){
        //Add the new link to the database
        await LinkService.addLink(newLink);
        //Get the updated links list from the server
        this.links = await LinkService.getLinks();

       // this.links = [...this.links,newLink];
      }
  },
  async created(){
    try{
      //Get the list array from the backend
      this.links = await LinkService.getLinks();
      console.log(this.links);
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
