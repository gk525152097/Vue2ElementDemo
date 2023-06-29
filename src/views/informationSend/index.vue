<template>
    <div class="index">
        <groupList></groupList>
        <historyList></historyList>
    </div>
</template>

<script>
    import groupList from "./groupList";
    import historyList from "./historyList";
    export default {
        name: 'index',
        components: {
            groupList,
            historyList
        },
        props: {},
        data() {
            return {}
        },
        computed: {},
        watch: {},
        methods: {
        },
        created() {
        },
        mounted() {
        },
        destroyed() {
        }
    }
</script>

<style lang="scss" scoped>
    @import "~@/assets/css/mainPage.scss";
    .index {
    }
</style>
