<template>
    <vs-dialog scroll overflow-hidden width="800px" not-center v-model="visible">
        <template #header>
            {{ Object.keys(checkItem).length ? '编辑' : '新增' }}组别
        </template>

        <div class="select-box">
            <div class="box-item">
                <div class="box-title">
                    <span>选择人才类型</span> <span>共5项</span>
                </div>
                <div class="select-item" v-for="(item, index) in typeList" :key="index">
                    <el-checkbox v-model="item.check" :label="item.name"></el-checkbox>
                </div>
            </div>
            <div class="box-item">
                <div class="box-title">
                    <span>搜索</span> <span>共{{ searchItemList.length }}项</span>
                </div>
                <div class="select-item" v-for="(item, index) in searchItemList" :key="index">
                    <el-checkbox v-model="item.check" :label="item.name"></el-checkbox>
                    <div class="select-input-wrapper">
                        <template v-if="item.type === 'input'">
                            <el-input size="small" v-model="item.value"></el-input>
                        </template>
                        <template v-if="item.type === 'time'">
                            <el-date-picker size="small" style="width: 100%" v-model="item.value" type="year" placeholder="选择年"></el-date-picker>
                        </template>
                        <template v-if="item.type === 'select'">
                            <el-select size="small" style="width: 100%" v-model="item.value" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                            </el-select>
                        </template>
                    </div>
                </div>
            </div>
            <div class="box-item">
                <div class="box-title">
                    <span>已选{{ searchItemCheck.length }}项</span> <a @click="handleRemoveCheckAll">清空</a>
                </div>
                <div v-for="(item, index) in searchItemCheck" :key="index" class="check-item">
                    <div style="flex: 3">{{ item.name }}</div>
                    <div style="flex: 4">{{ item.value }}</div>
                    <i style="font-size: 18px; cursor: pointer" class="el-icon-close" @click.stop="handleRemoveCheck(item)"></i>
                </div>
            </div>
        </div>

        <el-form :model="form" :rules="rules" ref="ruleForm" label-width="80px">
            <el-form-item label="组别名称" prop="name">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="组别备注" prop="name">
                <el-input type="textarea" v-model="form.name"></el-input>
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
                typeList: [
                    {
                        name: '外地派驻百色人才',
                        list: [
                            { id: 1, name: '毕业学校', value: '', type: 'input' },
                            { id: 2, name: '高中毕业时间', value: '', type: 'time' },
                            { id: 3, name: '籍贯', value: '', type: 'select' },
                            { id: 4, name: '就读高校', value: '', type: 'input' },
                            { id: 5, name: '所学专业', value: '', type: 'select' },
                            { id: 6, name: '拟获学历', value: '', type: 'select' },
                            { id: 7, name: '拟获学位', value: '', type: 'select' },
                            { id: 8, name: '预计毕业时间', value: '', type: 'time' },
                            { id: 9, name: '考研', value: '', type: 'select' }
                        ]
                    },
                    {
                        name: '在外百色籍人才',
                        list: [
                            { id: 10, name: '毕业学校', value: '', type: 'input' },
                            { id: 11, name: '高中毕业时间', value: '', type: 'time' },
                            { id: 12, name: '籍贯', value: '', type: 'select' },
                            { id: 13, name: '就读高校', value: '', type: 'input' },
                            { id: 14, name: '所学专业', value: '', type: 'select' },
                            { id: 15, name: '拟获学历', value: '', type: 'select' },
                            { id: 16, name: '拟获学位', value: '', type: 'select' },
                            { id: 17, name: '预计毕业时间', value: '', type: 'time' },
                            { id: 18, name: '考研', value: '', type: 'select' }
                        ]
                    },
                    { name: '百色籍高中毕业生' },
                    { name: '绿领人才' },
                    { name: '土专家' }
                ],
                rules: {
                    name: [
                        { required: true, message: '请输入角色名称', trigger: 'blur' },
                    ],
                    status: [
                        { required: true, message: '请选择状态', trigger: 'blur' },
                    ],
                },
                options: [
                    {value: '选项1', label: '黄金糕'},
                    {value: '选项2', label: '黄金糕'},
                    {value: '选项3', label: '黄金糕'},
                    {value: '选项4', label: '黄金糕'},
                    {value: '选项5', label: '黄金糕'},
                ],
            }
        },
        computed: {
            searchItemList() {
                let list = this.typeList.filter(item => item.check).map(item => item.list).flat(Infinity).filter(item => item)
                return list
            },
            searchItemCheck() {
                return this.searchItemList.filter(item => item.check)
            }
        },
        watch: {

        },
        methods: {
            handleReset() {},
            handleRemoveCheck(item) {
                item.value = ''
                item.check = false
            },
            handleRemoveCheckAll() {
                this.searchItemList.forEach(item => {
                    item.value = ''
                    item.check = false
                })
            },
            handletest() {

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
    .select-box {
        display: flex;
        height: 350px;
        margin-bottom: 24px;
        border-bottom: 1px solid #eee;
        .box-item {
            flex: 1;
            overflow-y: scroll;
            &:nth-child(2) {
                margin: 0 6px;
                padding: 0 6px;
                border-left: 1px solid #eee;
                border-right: 1px solid #eee;
            }
            .box-title {
                display: flex;
                justify-content: space-between;
                position: sticky;
                top: 0;
                background: #FFF;
                z-index: 10;
                margin-bottom: 8px;
            }
            .select-item {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 4px;
            }
            .select-input-wrapper {
                width: 50%;
            }
            .check-item {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 4px 8px;
                &:hover {
                    color: #ffffff;
                    background: rgba(var(--vs-primary), 0.4);
                }
            }
        }
    }
</style>
