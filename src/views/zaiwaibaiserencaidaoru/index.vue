<template>
    <div class="index">
        <div class="box">
            <el-form label-position="top" label-width="80px" :model="searchForm">
                <el-row :gutter="12">
                    <el-col :span="6">
                        <el-form-item label="状态">
                            <el-input size="small" v-model="searchForm.region"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="文件名称">
                            <el-input size="small" v-model="searchForm.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="导入日期">
                            <el-date-picker size="small" v-model="searchForm.date" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
                        </el-form-item>
                    </el-col>
                </el-row>
                <div class="btn-wrapper between">
                    <div class="wrapper-left">
                        <vs-button @click="handleAdd">新增</vs-button>
                        <vs-button flat @click="handleImport">批量导入</vs-button>
                        <vs-button flat @click="handleDownloadTemplate">导入模版下载</vs-button>
                    </div>
                    <div class="wrapper-right">
                        <vs-button>查询</vs-button>
                        <vs-button flat>重置</vs-button>
                    </div>
                </div>
            </el-form>
        </div>
        <div class="box">
            <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="index" align="center" label="序号" width="60">
                    <template #default="{ $index }">
                        {{ (page.current - 1) * page.size + $index + 1 }}
                    </template>
                </el-table-column>
                <el-table-column prop="date" :width="160" label="账号"></el-table-column>
                <el-table-column prop="date" :width="160" label="用户名称"></el-table-column>
                <el-table-column prop="date" :width="160" label="身份证号"></el-table-column>
                <el-table-column prop="date" :width="160" label="绑定手机号码"></el-table-column>
                <el-table-column prop="date" :width="160" label="所属角色"></el-table-column>
                <el-table-column prop="date" :width="160" label="状态"></el-table-column>
                <el-table-column prop="date" :width="160" label="备注"></el-table-column>
                <el-table-column prop="date" :width="160" label="更新时间"></el-table-column>
                <el-table-column fixed="right" :width="240" align="center" label="操作">
                    <template slot-scope="scope">
                        <div class="btn-wrapper">
                            <vs-button size="small" @click="handleDownloadFile(scope.row)">下载文件</vs-button>
                            <vs-button size="small" @click="handleJudge(scope.row)">审核</vs-button>
                            <vs-button size="small" @click="handleDownloadFail(scope.row)">下载失败数据</vs-button>
                        </div>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div class="box">
            <div class="pagination-wrapper">
                共 {{ page.total }} 条数据
                <div style="margin: 0 8px"><vs-pagination not-margin v-model="page.current" :length="page.total" /></div>
                <vs-select style="width: 120px" placeholder="Select" v-model="page.size">
                    <vs-option v-for="(item, index) in pagination" :label="`${item}条/页`" :value="item" :key="index">{{ `${item}条/页` }}</vs-option>
                </vs-select>
            </div>
        </div>

        <formModel ref="formModel" :checkItem="checkItem"></formModel>
        <importModel ref="importModel"></importModel>
        <judgeModel ref="judgeModel" :checkItem="checkItem"></judgeModel>
    </div>
</template>

<script>
    import formModel from "./formModel";
    import importModel from "./importModel";
    import judgeModel from "./judgeModel";
    export default {
        name: 'index',
        components: {
            formModel,
            importModel,
            judgeModel
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
                tableData: [
                    {
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
                    },
                    {
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
                    }, {
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
                    }, {
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
                    }, {
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
                    },
                ]
            }
        },
        computed: {},
        watch: {},
        methods: {
            handleAdd() {
                this.$refs.formModel.visible = true
            },
            handleJudge(record) {
                this.checkItem = record
                this.$refs.judgeModel.visible = true
            },
            handleDownloadFile(record) {
                this.checkItem = record
            },
            handleDownloadFail(record) {
                this.checkItem = record
            },
            handleDownloadTemplate() {},
            handleImport() {
                this.$refs.importModel.visible = true
            },
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
    .index {
    }
</style>
