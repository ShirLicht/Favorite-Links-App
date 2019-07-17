<template>
    <div>
        <div v-bind:key="link.id" v-for="link in links">
            <p>{{link.url}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "Links",
    props: ["links"]
}
</script>

<style scoped>

</style>


