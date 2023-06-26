<template>
    <div class="mainMenu">
        <vs-sidebar
            background="primary"
            textWhite
            absolute
            v-model="active"
            open
            :reduce="reduce"
            :hover-expand="reduce"
        >
            <template #logo>
                <div class="footer-btn-wrapper">
                    <div class="reduce-btn" v-if="reduce" @click="reduce = false">
                        <i class="el-icon-unlock icon"></i>
                    </div>
                    <div class="reduce-btn" v-if="!reduce" @click="reduce = true">
                        <i class="el-icon-lock icon"></i>
                    </div>
                </div>
            </template>

            <mainMenuItem :routes="routes"></mainMenuItem>

        </vs-sidebar>
    </div>
</template>


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
::v-deep {
    .vs-sidebar-content {
        width: 100%;
    }
}
    .mainMenu {
        width: 200px;
    }
    .footer-btn-wrapper {
        .reduce-btn {
            width: 36px;
            height: 36px;
            border-radius: 12px;
            background: #fff;
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
