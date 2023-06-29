<template>
    <vs-dialog scroll overflow-hidden width="800px" not-center v-model="visible">
        <template #header>
            {{ Object.keys(checkItem).length ? '编辑' : '新增' }}角色
        </template>
        <el-form :model="form" :rules="rules" ref="ruleForm" label-width="80px">
            <el-form-item label="角色名称" prop="name">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="菜单权限">
                <el-tree
                    :data="data"
                    show-checkbox
                    node-key="id"
                    default-expand-all
                    :props="defaultProps"
                    :default-checked-keys="form.defaultCheckedKeys"
                    @check="handleCheck"
                ></el-tree>
            </el-form-item>
            <el-form-item label="状态" prop="status">
                <el-radio-group v-model="form.status" size="small">
                    <el-radio :label="1">有效</el-radio>
                    <el-radio :label="0">无效</el-radio>
                </el-radio-group>
            </el-form-item>
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
