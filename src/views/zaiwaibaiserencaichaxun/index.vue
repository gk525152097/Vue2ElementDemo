<template>
    <div class="index">
        <div class="box">
            <el-form class="search-form" label-position="top" label-width="80px" :model="searchForm">
                <el-row :gutter="12">
                    <el-col :span="6">
                        <el-form-item label="采集单位">
                            <el-input size="small" v-model="searchForm.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="人才工作领域">
                            <el-input size="small" v-model="searchForm.region"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="单位所属行业">
                            <el-input size="small" v-model="searchForm.region"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="职务级别">
                            <el-input size="small" v-model="searchForm.region"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <showMore :searchMore="searchMore">
                    <el-col :span="6">
                        <el-form-item label="姓名">
                            <el-input size="small" v-model="searchForm.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="性别">
                            <el-input size="small" v-model="searchForm.region"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="国籍">
                            <el-input size="small" v-model="searchForm.region"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="籍贯">
                            <el-input size="small" v-model="searchForm.region"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="出生日期">
                            <el-input size="small" v-model="searchForm.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="政治面貌">
                            <el-input size="small" v-model="searchForm.region"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="手机号码">
                            <el-input size="small" v-model="searchForm.region"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="目前状态">
                            <el-input size="small" v-model="searchForm.region"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="最高学历">
                            <el-input size="small" v-model="searchForm.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="毕业院校">
                            <el-input size="small" v-model="searchForm.region"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="最高学位">
                            <el-input size="small" v-model="searchForm.region"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="专业分类">
                            <el-input size="small" v-model="searchForm.region"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="技术支撑">
                            <el-input size="small" v-model="searchForm.region"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="现单位性质">
                            <el-input size="small" v-model="searchForm.region"></el-input>
                        </el-form-item>
                    </el-col>
                </showMore>
            </el-form>
            <div class="btn-wrapper between">
                <div class="wrapper-left">
                    <vs-button>导出Excel</vs-button>
                    <vs-button @click="handleExportWord">导出Word</vs-button>
                    <columnsSelect :columns="columns"></columnsSelect>
                </div>
                <div class="wrapper-right">
                    <a class="show-more" @click="searchMore = !searchMore">
                        高级查询
                        <i v-if="!searchMore" class="el-icon-arrow-down"></i>
                        <i v-if="searchMore" class="el-icon-arrow-up"></i>
                    </a>
                    <vs-button>查询</vs-button>
                    <vs-button flat>重置</vs-button>
                </div>
            </div>
        </div>
        <div class="box">
            <el-table :data="tableData" @selection-change="handleSelectionChange" style="width: 100%">
                <el-table-column fixed align="center" type="selection" width="55"></el-table-column>
                <el-table-column fixed prop="index" align="center" label="序号" width="60">
                    <template #default="{ $index }">
                        {{ (page.current - 1) * page.size + $index + 1 }}
                    </template>
                </el-table-column>
                <el-table-column v-for="(item, index) in columnsShow" :key="item.key + index + Math.random()" :prop="item.key" :width="160" :label="item.name"></el-table-column>
                <el-table-column fixed="right" :width="160" align="center" label="操作">
                    <template slot-scope="scope">
                        <div class="btn-wrapper">
                            <vs-button size="small" @click="handleEdit(scope.row)">编辑</vs-button>
                            <vs-button flat size="small" @click="handleDeleteConfirm(scope.row)">删除</vs-button>
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
        <confirmBox ref="confirmBox" :content="`确认删除?`" @handleOk="handleDelete"></confirmBox>
        <tooltipBox ref="tooltipBox" :content="`您还未勾选需要导出的数据，请勾选需要导出为Word文件的数据!`"></tooltipBox>
    </div>
</template>

<script>
    import formModel from "../zaiwaibaiserencaidaoru/formModel";
    import confirmBox from '@/components/confirmBox'
    import tooltipBox from '@/components/tooltipBox'
    import columnsSelect from '@/components/columnsSelect'
    import showMore from '@/components/showMore'
    export default {
        name: 'index',
        components: {
            formModel,
            confirmBox,
            tooltipBox,
            columnsSelect,
            showMore
        },
        props: {},
        data() {
            return {
                searchMore: false,
                page: {
                    size: 10,
                    current: 1,
                    total: 100
                },
                pagination: [10, 20, 50, 100],
                searchForm: {},
                checkItem: {},
                multipleSelection: [],
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
                },  {
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
                },],
                columns: [
                    { name: '填表日期', key: 'date', check: true },
                    { name: '采集单位', key: 'date', check: true },
                    { name: '人才工作领域', key: 'date', check: true },
                    { name: '姓名', key: 'date', check: true },
                    { name: '性别', key: 'date', check: true },
                    { name: '国籍', key: 'date', check: true },
                    { name: '籍贯', key: 'date', check: true },
                    { name: '籍贯地址', key: 'date', check: true },
                    { name: '出生日期', key: 'date', check: true },
                    { name: '政治面貌', key: 'date', check: true },
                    { name: '手机号码', key: 'date', check: true },
                    { name: 'QQ/微信', key: 'date' },
                    { name: '电子邮箱', key: 'date' },
                    { name: '现居住地', key: 'date' },
                    { name: '目前状态', key: 'date' },
                    { name: '最高学历', key: 'date' },
                    { name: '最高学历毕业院校', key: 'date' },
                    { name: '最高学位', key: 'date' },
                    { name: '专业分类', key: 'date' },
                    { name: '职务级别', key: 'date' },
                    { name: '技术职称', key: 'date' },
                    { name: '教育经历', key: 'date' },
                    { name: '现工作单位', key: 'date' },
                    { name: '现工作单位所属行业', key: 'date' },
                    { name: '现工作单位性质', key: 'date' },
                    { name: '在广西简要对学习、工作经历', key: 'date' },
                    { name: '工作业绩', key: 'date' },
                    { name: '个人有关情况简介', key: 'date' },
                    { name: '更新人员', key: 'date' },
                    { name: '更新时间', key: 'date' },
                ]
            }
        },
        computed: {
            columnsShow() {
                return this.columns.filter(item => item.check)
            }
        },
        watch: {
        },
        methods: {
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
            handleAdd() {
                this.$refs.formModel.visible = true
            },
            handleEdit(record) {
                this.checkItem = record
                this.handleAdd()
            },
            handleDeleteConfirm(record) {
                this.checkItem = record
                this.$refs.confirmBox.visible = true
            },
            handleDelete() {
            },
            handleExportWord() {
                if (!this.multipleSelection.length) {
                    this.$refs.tooltipBox.visible = true
                }
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
    .index {
    }
</style>
