<template>
    <div>
        <vs-dialog scroll overflow-hidden width="800px" not-center v-model="visible">
            <template #header>
                失败记录
            </template>
            <el-table :data="tableData" @selection-change="handleSelectionChange" style="width: 100%">
                <el-table-column fixed align="center" type="selection" width="55"></el-table-column>
                <el-table-column fixed prop="index" align="center" label="序号" width="60">
                    <template #default="{ $index }">
                        {{ $index + 1 }}
                    </template>
                </el-table-column>
                <el-table-column prop="date" label="推送时间"></el-table-column>
                <el-table-column prop="date" label="姓名"></el-table-column>
                <el-table-column prop="date" label="手机号码"></el-table-column>
                <el-table-column prop="date" label="电子邮箱"></el-table-column>
                <el-table-column prop="date" label="人才类型"></el-table-column>
                <el-table-column prop="date" label="推送情况"></el-table-column>
                <el-table-column prop="date" label="推送失败原因"></el-table-column>
            </el-table>

            <template #footer>
                <div class="btn-wrapper">
                    <vs-button @click="handleResend">重新发送</vs-button>
                    <vs-button flat @click="visible = false">取消</vs-button>
                </div>
            </template>
        </vs-dialog>
        <tooltipBox ref="tooltipBox" :content="`您还未勾选需要导出的数据，请勾选需要导出为Word文件的数据!`"></tooltipBox>
    </div>
</template>

<script>
    import tooltipBox from '@/components/tooltipBox'

    export default {
        name: 'formModel',
        components: {
            tooltipBox
        },
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
                tableData: [
                    { id: 1 },
                    { id: 2 },
                    { id: 3 },
                    { id: 4 },
                    { id: 5 },
                ],
                multipleSelection: []
            }
        },
        computed: {},
        watch: {},
        methods: {
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
            handleResend() {
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
    @import "~@/assets/css/mainModel.scss";
    .formModel {
    }
</style>
