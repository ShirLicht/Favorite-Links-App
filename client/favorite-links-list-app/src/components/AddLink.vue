<template>
     <div>
        <form @submit="addLink" >
            <input type="text" v-model="url" name="title" placeholder="Add Link..." required>
            <input type="submit" value="Submit" class="btn"> 
        </form>
    </div>
</template>

<script>

export default {
    name:"AddLink",
     data(){
       return{
           url: ''
       }
    },
    methods:{
        addLink(e){
            
            e.preventDefault();
          
            //Send the new url up to the parent
            this.$emit('add-link', this.url);

            this.url = '';
            
        }
    }
}
</script>

<style scoped>
 form{
     display: flex;
     margin-bottom: 10px;
 }

 input[type="text"]{
     flex: 10;
     padding: 5px;
 }

 input[type="submit"]{
     flex:2;
 }
</style>

