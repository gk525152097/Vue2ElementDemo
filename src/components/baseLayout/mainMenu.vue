<!--<template>-->
<!--    <div class="mainMenu" :style="{ width: this.reduce ? '50px' : '200px' }">-->
<!--        <vs-sidebar-->
<!--            background="#FFFFFF"-->
<!--            absolute-->
<!--            v-model="active"-->
<!--            open-->
<!--            :reduce="reduce"-->
<!--            :hover-expand="reduce"-->
<!--        >-->
<!--            <template #logo>-->
<!--                <div class="footer-btn-wrapper">-->
<!--                    <div class="reduce-btn" v-if="reduce" @click="reduce = false">-->
<!--                        <i class="el-icon-unlock icon"></i>-->
<!--                    </div>-->
<!--                    <div class="reduce-btn" v-if="!reduce" @click="reduce = true">-->
<!--                        <i class="el-icon-lock icon"></i>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </template>-->

<!--            <mainMenuItem :routes="routes"></mainMenuItem>-->

<!--        </vs-sidebar>-->
<!--    </div>-->
<!--</template>-->


<script>
import { routes } from '@/router/index'
import mainMenuItem from "./mainMenuItem";
export default {
    name: 'mainMenu',
    components: {
        mainMenuItem
    },
    props: {},
    data() {
        return {
            reduce: false,
            active: '',
            routes: routes
        }
    },

    computed: {},
    watch: {},
    methods: {
        handleRoute(record) {
            this.active = record.path
            if (this.$route.path !== record.path) {
                this.$router.push({ path: record.path })
            }
        },
        handleMenu(h, list) {
            let menus = []
            menus = list.map(item => {
                if (item.children) {
                    if (item.children.length === 1) {
                        return h(
                            'vs-sidebar-item',
                            {
                                attrs: {
                                    id: item.children[0].path,
                                },
                                nativeOn: {
                                    click: () => this.handleRoute(item.children[0])
                                }
                            },
                            [
                                item.children[0].name,
                                h(
                                    'i',
                                    {
                                        slot: 'icon',
                                        'class': [item.children[0].icon],
                                        style: {
                                            fontSize: '16px'
                                        }
                                    },
                                )
                            ]
                        )
                    } else {
                        return h(
                            'vs-sidebar-group',
                            {
                                attrs: {
                                    id: item.path,
                                }
                            },
                            [
                                h(
                                    'vs-sidebar-item',
                                    {
                                        slot: 'header',
                                        props: {
                                            // arrow: true
                                        }
                                    },
                                    [
                                        item.name,
                                        h(
                                            'i',
                                            {
                                                slot: 'icon',
                                                'class': [item.icon],
                                                style: {
                                                    fontSize: '16px'
                                                }
                                            },
                                        )
                                    ]
                                ),
                                this.handleMenu(h, item.children)
                            ]
                        )
                    }
                } else {
                    return h(
                        'vs-sidebar-item',
                        {
                            attrs: {
                                id: item.path,
                            },
                            nativeOn: {
                                click: () => this.handleRoute(item)
                            }
                        },
                        [
                            item.name,
                            h(
                                'i',
                                {
                                    slot: 'icon',
                                    'class': [item.icon],
                                    style: {
                                        fontSize: '16px'
                                    },
                                },
                            )
                        ]
                    )
                }

            })
            return menus
        }
    },
    created() {
    },
    mounted() {
    },
    destroyed() {
    },
    render(createElement) {
        return createElement(
            'div',
            {
                'class': ['mainMenu'],
                style: {
                    width: this.reduce ? '50px' : '200px'
                }
            },
            [
                createElement(
                    'vs-sidebar',
                    {
                        props: {
                            background: '#FFFFFF',
                            absolute: true,
                            open: true,
                            reduce: this.reduce,
                            'hover-expand': this.reduce,
                            value: this.active
                        }
                    },
                    [
                        createElement(
                            'div',
                            {
                                slot: 'logo',
                            },
                            [
                                createElement(
                                    'div',
                                    {
                                        'class': ['footer-btn-wrapper']
                                    },
                                    [
                                        this.reduce ? createElement(
                                            'div',
                                            {
                                                'class': ['reduce-btn'],
                                                on: {
                                                    click: () => {
                                                        this.reduce = false
                                                    }
                                                }
                                            },
                                            [
                                                createElement('i', { 'class': ['el-icon-unlock', 'icon'] })
                                            ]
                                        ) : '',
                                        !this.reduce ? createElement(
                                            'div',
                                            {
                                                'class': ['reduce-btn'],
                                                on: {
                                                    click: () => {
                                                        this.reduce = true
                                                    }
                                                }
                                            },
                                            [
                                                createElement('i', { 'class': ['el-icon-lock', 'icon'] })
                                            ]
                                        ) : ''
                                    ]
                                )
                            ]
                        ),
                        this.handleMenu(createElement, this.routes)
                    ]
                )
            ]
        )
    }
}
</script>

<style lang="scss" scoped>
::v-deep {
    .vs-sidebar-content {
        width: 100%;
    }
}
    .mainMenu {
    }
    .footer-btn-wrapper {
        .reduce-btn {
            width: 36px;
            height: 36px;
            border-radius: 12px;
            border: 1px solid #ccc;
            display: flex;
            align-items: center;
            justify-content: center;
            .icon {
                font-size: 18px;
                color: #000000;
            }
        }
    }

</style>
