<template>
    <div class="header">
        <div class="logo-wrapper">
            {{ defaultSetting.systemName }}
        </div>
        <div>
            <el-dropdown>
                <div class="user-btns-wrapper">
                    <vs-avatar>
                        <i class="el-icon-user avatar-icon"></i>
                    </vs-avatar>
                    <div class="logout">
                        退出系统
                    </div>
                </div>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>
                        <a>个人中心</a>
                    </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>

        </div>
    </div>
</template>

<script>
    import defaultSetting from '@/defaultSetting'
    export default {
        name: 'mainHeader',
        components: {},
        props: {},
        data() {
            return {
                defaultSetting: defaultSetting
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
    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 60px;
        padding: 0 24px;
        background: rgba(25, 91, 255, 1);
    }
    .avatar-icon {
        font-size: 20px;
        font-weight: bold;
    }
    .user-btns-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .logout {
        color: #ffffff;
        margin-left: 12px;
        cursor: pointer;
    }
</style>
