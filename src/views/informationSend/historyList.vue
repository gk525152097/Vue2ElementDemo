<template>
    <div class="index">
        <div class="box">
            <el-form class="search-form" label-position="left" label-width="80px" :model="searchForm">
                <el-row :gutter="12">
<!--                    <el-col :span="6">-->
<!--                        <el-form-item label="用户名称">-->
<!--                            <el-input size="small" v-model="searchForm.name"></el-input>-->
<!--                        </el-form-item>-->
<!--                    </el-col>-->
<!--                    <el-col :span="6">-->
<!--                        <el-form-item label="状态">-->
<!--                            <el-input size="small" v-model="searchForm.region"></el-input>-->
<!--                        </el-form-item>-->
<!--                    </el-col>-->
                </el-row>
                <div class="btn-wrapper between">
                    <div class="wrapper-left">
                        推送记录
<!--                        <vs-button @click="handleAdd">新增</vs-button>-->
                    </div>
                    <div class="wrapper-right">
                        <el-form-item label="推送时间">
                            <el-date-picker size="small" v-model="searchForm.date" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
                        </el-form-item>
                        <vs-button>导出</vs-button>
<!--                        <vs-button flat>重置</vs-button>-->
                    </div>
                </div>
            </el-form>
            <el-table :data="tableData" style="width: 100%; margin: 24px 0">
                <el-table-column prop="index" align="center" label="序号" width="60">
                    <template #default="{ $index }">
                        {{ (page.current - 1) * page.size + $index + 1 }}
                    </template>
                </el-table-column>
                <el-table-column prop="date" label="资讯编号"></el-table-column>
                <el-table-column prop="date" label="资讯标题"></el-table-column>
                <el-table-column prop="date" label="组别名称"></el-table-column>
                <el-table-column prop="date" label="推送状态"></el-table-column>
                <el-table-column prop="date" label="推送时间"></el-table-column>
                <el-table-column fixed="right" :width="230" align="center" label="操作">
                    <template slot-scope="scope">
                        <div class="btn-wrapper">
                            <vs-button size="small" @click="handleEdit(scope.row)">下载推送详情</vs-button>
                            <vs-button flat size="small" @click="handleView(scope.row)">查看失败记录</vs-button>
                        </div>
                    </template>
                </el-table-column>
            </el-table>
            <div class="pagination-wrapper">
                共 {{ page.total }} 条数据
                <div style="margin: 0 8px"><vs-pagination not-margin v-model="page.current" :length="page.total" /></div>
                <vs-select style="width: 120px" placeholder="Select" v-model="page.size">
                    <vs-option v-for="(item, index) in pagination" :label="`${item}条/页`" :value="item" :key="index">{{ `${item}条/页` }}</vs-option>
                </vs-select>
            </div>
        </div>

        <historyModel ref="historyModel"></historyModel>
    </div>
</template>

<script>
    import historyModel from "./historyModel";
    export default {
        name: 'index',
        components: {
            historyModel
        },
        props: {},
        data() {
            return {
                page: {
                    size: 10,
                    current: 1,
                    total: 100
                },
                pagination: [10, 20, 50, 100],
                searchForm: {

                },
                checkItem: {},
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1517 弄',
                    zip: 200333
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1519 弄',
                    zip: 200333
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1516 弄',
                    zip: 200333
                }]
            }
        },
        computed: {},
        watch: {},
        methods: {
            handleView(record) {
                this.checkItem = record
                this.$refs.historyModel.visible = true
            }
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
    ::v-deep {
        .search-form {
            .el-form-item {
                margin-bottom: 0 !important;
            }
        }
    }
    .index {
    }
</style>
