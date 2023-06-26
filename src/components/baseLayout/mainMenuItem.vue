<!--<template>-->
<!--    <div>-->
<!--        <vs-sidebar-item id="Music">-->
<!--            <template #icon>-->
<!--                <i class='bx bxs-music'></i>-->
<!--            </template>-->
<!--            Music-->
<!--        </vs-sidebar-item>-->
<!--        <vs-sidebar-group>-->
<!--            <template #header>-->
<!--                <vs-sidebar-item arrow>-->
<!--                    <template #icon>-->
<!--                        <i class='bx bx-group'></i>-->
<!--                    </template>-->
<!--                    Social media-->
<!--                </vs-sidebar-item>-->
<!--            </template>-->

<!--            <vs-sidebar-item id="Instagram">-->
<!--                <template #icon>-->
<!--                    <i class='bx bxl-instagram'></i>-->
<!--                </template>-->
<!--                Instagram-->
<!--            </vs-sidebar-item>-->
<!--            <vs-sidebar-item id="twitter">-->
<!--                <template #icon>-->
<!--                    <i class='bx bxl-twitter' ></i>-->
<!--                </template>-->
<!--                Twitter-->
<!--            </vs-sidebar-item>-->
<!--            <vs-sidebar-item id="Facebook">-->
<!--                <template #icon>-->
<!--                    <i class='bx bxl-facebook' ></i>-->
<!--                </template>-->
<!--                Facebook-->
<!--            </vs-sidebar-item>-->
<!--        </vs-sidebar-group>-->

<!--        <template v-for="(item, index) in routes">-->
<!--            <vs-sidebar-item v-if="item.children.length === 1" :id="item.name">-->
<!--                <template #icon>-->
<!--                    <i class='bx bx-home'></i>-->
<!--                </template>-->
<!--                {{ item.name }}-->
<!--            </vs-sidebar-item>-->
<!--            <vs-sidebar-group v-else>-->
<!--                <template #header>-->
<!--                    <vs-sidebar-item arrow>-->
<!--                        <template #icon>-->
<!--                            <i class='bx bx-group'></i>-->
<!--                        </template>-->
<!--                        {{ item.name }}-->
<!--                    </vs-sidebar-item>-->
<!--                </template>-->

<!--                <vs-sidebar-item id="Instagram">-->
<!--                    <template #icon>-->
<!--                        <i class='bx bxl-instagram'></i>-->
<!--                    </template>-->
<!--                    Instagram-->
<!--                </vs-sidebar-item>-->
<!--                <vs-sidebar-item id="twitter">-->
<!--                    <template #icon>-->
<!--                        <i class='bx bxl-twitter' ></i>-->
<!--                    </template>-->
<!--                    Twitter-->
<!--                </vs-sidebar-item>-->
<!--                <vs-sidebar-item id="Facebook">-->
<!--                    <template #icon>-->
<!--                        <i class='bx bxl-facebook' ></i>-->
<!--                    </template>-->
<!--                    Facebook-->
<!--                </vs-sidebar-item>-->
<!--            </vs-sidebar-group>-->
<!--        </template>-->

<!--    </div>-->
<!--</template>-->

<script>
export default {
    name: 'mainMenuItem',
    components: {},
    props: {
        routes: {
            type: Array,
            default: () => {
                return []
            }
        }
    },
    data() {
        return {

        }
    },
    methods: {
        handleClickItem() {
        },
        handleRoute(record) {
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
                                    id: item.path,
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
    render(createElement) {
        return createElement('div', { }, this.handleMenu(createElement, this.routes))
    }
}
</script>

<style lang="scss" scoped>
    .mainMenuItem {
    }
</style>
