<template>
    <vs-dialog scroll overflow-hidden not-center v-model="visible">
        <template #header>
            发送资讯
        </template>
        <el-form :model="form" :rules="rules" ref="ruleForm" label-width="80px">
            <el-form-item label="选择资讯" prop="name">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="资讯编号" prop="name">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="资讯类型" prop="name">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="定时推送" prop="name">
                <el-date-picker v-model="form.value1" type="datetime" placeholder="选择日期时间" :picker-options="pickerOptions"></el-date-picker>
                <span style="margin-left: 12px">未选择定时推送时间则默认立即推送</span>
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
    import moment from 'moment'
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
                pickerOptions: {
                    disabledDate(time) {
                        return time.getTime() < Date.now() - (24 * 60 * 60 * 1000);
                    },
                    selectableRange: '00:00:00 - 23:59:59'
                }
            }
        },

        computed: {},
        watch: {
            'form.value1'(value) {
                if (moment(value).format('YYYY-MM-DD') === moment().format('YYYY-MM-DD')) {
                    this.$set(this.pickerOptions, 'selectableRange', `${moment().format('HH:mm:ss')} - 23:59:59`)
                } else {
                    this.$set(this.pickerOptions, 'selectableRange', '00:00:00 - 23:59:59')
                }
            }
        },
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
