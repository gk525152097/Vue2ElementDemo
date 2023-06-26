<template>
    <div class="header">
        <div class="logo-wrapper">
            vue2ElementDemo
        </div>
        <div>
            用户信息
        </div>
    </div>
</template>

<script>
    export default {
        name: 'mainHeader',
        components: {},
        props: {},
        data() {
            return {}
        },

        computed: {},
        watch: {},
        methods: {},
        created() {
        },
        mounted() {
        },
        destroyed() {
        }
    }
</script>

<style lang="scss" scoped>
    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 60px;
        padding: 0 24px;
        background: dodgerblue;
    }
</style>
