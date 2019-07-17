<template>
  <div id="app">
    <Header/>
    <AddLink v-on:add-link="addLink"/>
    <Links v-bind:links="links" v-on:del-link="deleteLink"/>
  </div>
</template>

<script>
import Header from './components/layout/Header'
import Links from './components/Links'
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
      links: [
        {
          id: 1,
          url: "https://www.youtube.com/watch?v=YrLk4vdY28Q"
        },
        {
           id: 2,
           url:"https://www.youtube.com/watch?v=vLHcHWDvgfQ"
        },
        {
          id: 3,
          url: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwikpJn-wbzjAhXLzIUKHYzKDKQQjRx6BAgBEAU&url=https%3A%2F%2Fgiphy.com%2Fexplore%2Fdisney&psig=AOvVaw2G7jb_4JxIZZ6q_a9Ouno4&ust=1563472198140484"
        }
      ]
    }
  },
  methods:{

      deleteLink(id){
        this.links = this.links.filter(link => link.id !== id);
      },
      addLink(newLink){
        this.links = [...this.links,newLink];
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
