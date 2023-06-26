<template>
    <div class="index">
        <div>
            <mainHeader></mainHeader>
        </div>
        <div class="layout-contant-wrapper">
            <div class="layout-menu">
                <mainMenu></mainMenu>
            </div>
            <div class="layout-content">
                <div class="content"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import mainHeader from "./mainHeader";
    import mainMenu from "./mainMenu";
    export default {
        name: 'index',
        components: {
            mainHeader,
            mainMenu
        },
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
    .index {
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        .layout-contant-wrapper {
            flex: 1;
            display: flex;
            justify-content: stretch;
            .layout-menu {
            }
            .layout-content {
                flex: 1;
                position: relative;
                .content {
                    position: absolute;
                    top: 0;
                    left: 0;
                    bottom: 0;
                    right: 0;
                    background: #888888;
                }
            }
        }
    }
</style>
