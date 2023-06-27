<template>
    <div class="main-wrapper">
        <div>
            <mainHeader></mainHeader>
        </div>
        <div class="layout-content-wrapper">
            <div class="layout-menu">
                <mainMenu></mainMenu>
            </div>
            <div class="layout-content">
                <transition name="breadcrumb">
                    <div class="content">
                        <div class="content-top" :style="{ minHeight: `calc(100% - ${minHeight}px)` }">
                            <transition name="fade">
                                <router-view></router-view>
                            </transition>
                        </div>
                        <div class="content-bottom" ref="footer">
                            <mainFooter></mainFooter>
                        </div>
                    </div>
                </transition>
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

    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.3s;
    }

    .fade-enter,
    .fade-leave-active {
        opacity: 0;
    }

    /*fade-transform*/
    .fade-transform-leave-active,
    .fade-transform-enter-active {
        transition: all .3s;
    }

    .fade-transform-enter {
        opacity: 0;
        transform: translateX(-30px);
    }

    .fade-transform-leave-to {
        opacity: 0;
        transform: translateX(30px);
    }

    .breadcrumb-enter-active,
    .breadcrumb-leave-active {
        transition: all .3s;
    }

    .breadcrumb-enter,
    .breadcrumb-leave-active {
        opacity: 0;
        transform: translateX(20px);
    }

    .breadcrumb-move {
        transition: all .3s;
    }

    .breadcrumb-leave-active {
        position: absolute;
    }

    .main-wrapper {
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        .layout-content-wrapper {
            flex: 1;
            display: flex;
            justify-content: stretch;
            background: #f6f6f6;
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
