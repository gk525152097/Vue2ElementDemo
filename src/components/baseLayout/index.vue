<template>
    <div class="main-wrapper">
        <div>
            <mainHeader></mainHeader>
        </div>
        <div class="layout-contant-wrapper">
            <div class="layout-menu">
                <mainMenu></mainMenu>
            </div>
            <div class="layout-content">
                <div class="content">
                    <div class="content-top" :style="{ minHeight: `calc(100% - ${minHeight}px)` }">
                        <router-view></router-view>
                    </div>
                    <div class="content-bottom" ref="footer">
                        <mainFooter></mainFooter>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import mainHeader from "./mainHeader";
    import mainMenu from "./mainMenu";
    import mainFooter from "./mainFooter";
    export default {
        name: 'index',
        components: {
            mainHeader,
            mainMenu,
            mainFooter
        },
        props: {},
        data() {
            return {
                minHeight: 0
            }
        },
        computed: {},
        watch: {},
        methods: {},
        created() {
        },
        mounted() {
            this.minHeight = this.$refs.footer.offsetHeight
        },
        destroyed() {
        }
    }
</script>

<style lang="scss" scoped>
    .main-wrapper {
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        .layout-contant-wrapper {
            flex: 1;
            display: flex;
            justify-content: stretch;
            .layout-menu {
                position: relative;
            }
            .layout-content {
                flex: 1;
                position: relative;
                overflow-y: scroll;
                .content {
                    position: absolute;
                    top: 0;
                    left: 0;
                    bottom: 0;
                    right: 0;
                    .content-top {
                        padding: 12px;
                        box-sizing: border-box;
                    }
                }
            }
        }
    }
</style>
