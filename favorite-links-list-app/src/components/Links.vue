<template>
    <div>
        <div v-bind:key="link.id" v-for="link in links">
            <LinkItem v-bind:link="link"/>
        </div>
    </div>
</template>

<script>
import LinkItem from './LinkItem';

export default {
    name: "Links",
    components:{
        LinkItem
    },
    props: ["links"]
}
</script>

<style scoped>

</style>


