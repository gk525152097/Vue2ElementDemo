<template>
    <vs-dialog full-screen scroll overflow-hidden width="800px" not-center v-model="visible">
        <template #header>
            数据审核
        </template>
        <el-form :model="form" :rules="rules" ref="ruleForm" label-width="100px">
            <el-form-item label="审核" prop="name">
                <el-radio-group v-model="form.status" size="small">
                    <el-radio :label="1">通过</el-radio>
                    <el-radio :label="0">不通过</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="是否覆盖重复项" prop="status">
                <el-radio-group v-model="form.status" size="small">
                    <el-radio :label="1">是</el-radio>
                    <el-radio :label="0">否</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="不通过原因" prop="name">
                <el-input type="textarea" v-model="form.name"></el-input>
            </el-form-item>
        </el-form>
        <div class="title">重复信息</div>
        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="index" align="center" label="序号" width="60">
                <template #default="{ $index }">
                    {{ $index + 1 }}
                </template>
            </el-table-column>
            <el-table-column prop="date" :width="160" label="账号"></el-table-column>
            <el-table-column prop="date" :width="160" label="用户名称"></el-table-column>
            <el-table-column prop="date" :width="160" label="身份证号"></el-table-column>
            <el-table-column prop="date" :width="160" label="绑定手机号码"></el-table-column>
            <el-table-column prop="date" :width="160" label="所属角色"></el-table-column>
            <el-table-column prop="date" :width="160" label="状态"></el-table-column>
            <el-table-column prop="date" :width="160" label="备注"></el-table-column>
            <el-table-column prop="date" label="更新时间"></el-table-column>
        </el-table>
        <div class="title">导入详情</div>
        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="index" align="center" label="序号" width="60">
                <template #default="{ $index }">
                    {{ $index + 1 }}
                </template>
            </el-table-column>
            <el-table-column prop="date" :width="160" label="账号"></el-table-column>
            <el-table-column prop="date" :width="160" label="用户名称"></el-table-column>
            <el-table-column prop="date" :width="160" label="身份证号"></el-table-column>
            <el-table-column prop="date" :width="160" label="绑定手机号码"></el-table-column>
            <el-table-column prop="date" :width="160" label="所属角色"></el-table-column>
            <el-table-column prop="date" :width="160" label="状态"></el-table-column>
            <el-table-column prop="date" :width="160" label="备注"></el-table-column>
            <el-table-column prop="date" label="更新时间"></el-table-column>
        </el-table>
        <template #footer>
            <div class="btn-wrapper">
                <vs-button>确定</vs-button>
                <vs-button flat @click="visible = false">取消</vs-button>
            </div>
        </template>
    </vs-dialog>
</template>

<script>
    export default {
        name: 'formModel',
        components: {},
        props: {
            checkItem: {
                type: Object,
                default: () => {
                    return {}
                }
            }
        },
        data() {
            return {
                visible: false,
                form: {
                    status: 1
                },
                rules: {
                    name: [
                        { required: true, message: '请输入角色名称', trigger: 'blur' },
                    ],
                    status: [
                        { required: true, message: '请选择状态', trigger: 'blur' },
                    ],
                },
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
@import "~@/assets/css/mainModel.scss";
    .title {
        margin: 12px 0;
    }
</style>
