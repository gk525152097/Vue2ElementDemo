<template>
    <div class="index">
        <div class="box">
            <el-form label-position="top" label-width="80px" :model="formData">
                <el-row :gutter="12">
                    <el-col span="6">
                        <el-form-item label="名称">
                            <el-input size="small" v-model="formData.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col span="6">
                        <el-form-item label="活动区域">
                            <el-input size="small" v-model="formData.region"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col span="6">
                        <el-form-item label="活动形式">
                            <el-input size="small" v-model="formData.type"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <div class="btn-wrapper">
                    <div class="wrapper-left"></div>
                    <div class="wrapper-right">
                        <vs-button border active>查询</vs-button>
                        <vs-button border :active="false">重置</vs-button>
                    </div>
                </div>
            </el-form>
        </div>
        <div class="box">
            表格
        </div>
        <div class="box">
            分页
        </div>
    </div>
</template>

<script>
    export default {
        name: 'index',
        components: {},
        props: {},
        data() {
            return {
                formData: {}
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
    @import "~@/assets/css/mainPage.scss";
    .index {
    }
</style>
