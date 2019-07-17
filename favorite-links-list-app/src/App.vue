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
