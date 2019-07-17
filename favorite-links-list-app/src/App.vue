<template>
  <div id="app">
    <Header/>
    <Links v-bind:links="links"/>
  </div>
</template>

<script>
import Header from './components/layout/Header'
import Links from './components/Links'

export default {
  name: 'app',
  components: {
    Header,
    Links
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
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
