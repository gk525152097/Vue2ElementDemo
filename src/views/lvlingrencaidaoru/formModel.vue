<template>
    <vs-dialog scroll overflow-hidden width="800px" not-center v-model="visible">
        <template #header>
            {{ Object.keys(checkItem).length ? '编辑' : '新增' }}绿领人才
        </template>
        <el-form :model="form" :rules="rules" ref="ruleForm" label-width="120px">
            <el-row :gutter="24">
                <el-col :span="12">
                    <el-form-item label="姓名" prop="name">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="性别" prop="name">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="出生日期" prop="name">
                        <el-date-picker style="width: 100%" v-model="form.value1" type="date" placeholder="选择日期"></el-date-picker>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="籍贯" prop="name">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="24">
                    <el-form-item label="籍贯地址" prop="name">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="人才类型" prop="name">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="从事行业" prop="name">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="特殊技能" prop="name">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="联系电话" prop="name">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="QQ/微信" prop="name">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="24">
                    <el-form-item label="备注" prop="name">
                        <el-input type="textarea" :max="1000" v-model="form.name" placeholder=""></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>

        <template #footer>
            <div class="btn-wrapper">
                <vs-button>确定</vs-button>
                <vs-button flat v-if="Object.keys(checkItem).length">取消</vs-button>
                <vs-button flat v-else @click="handleReset">重置</vs-button>
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
                data: [{
                    id: 1,
                    label: '一级 1',
                    children: [{
                        id: 4,
                        label: '二级 1-1',
                        children: [{
                            id: 9,
                            label: '三级 1-1-1'
                        }, {
                            id: 10,
                            label: '三级 1-1-2'
                        }]
                    }]
                }, {
                    id: 2,
                    label: '一级 2',
                    children: [{
                        id: 5,
                        label: '二级 2-1'
                    }, {
                        id: 6,
                        label: '二级 2-2'
                    }]
                }, {
                    id: 3,
                    label: '一级 3',
                    children: [{
                        id: 7,
                        label: '二级 3-1'
                    }, {
                        id: 8,
                        label: '二级 3-2'
                    }]
                }],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                },
                defaultCheckedKeys: [1]
            }
        },

        computed: {},
        watch: {},
        methods: {
            handleCheck(_, checkInfo) {
                const { checkedKeys, halfCheckedKeys } = checkInfo
                console.log(checkedKeys, halfCheckedKeys)
            },
            handleReset() {
                this.form = {
                    status: 1
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
@import "~@/assets/css/mainModel.scss";
    .formModel {
    }
</style>
