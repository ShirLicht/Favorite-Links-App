<template>
     <div>
        <form @submit="addLink">
            <input type="text" v-model="url" name="title" placeholder="Add Link...">
            <input type="submit" value="Submit" class="btn"> 

        </form>
    </div>
</template>

<script>
import uuid from 'uuid';
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
            const newLink = {
                id: uuid.v4(),
                url:this.url
            }

            //Send up to parent
            this.$emit('add-link', newLink);

            this.url = '';
        }
    }
}
</script>

<style scoped>
 form{
     display: flex;
 }

 input[type="text"]{
     flex: 10;
     padding: 5px;
 }

 input[type="submit"]{
     flex:2;
 }
</style>

