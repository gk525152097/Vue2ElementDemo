<template>
    <div class="center">
        <vs-button flat @click="visible = true">字段展示筛选</vs-button>
        <vs-dialog v-model="visible">
            <template #header>
                <h4 class="not-margin">
                    字段展示筛选
                </h4>
            </template>
            <div class="confirm-content">
                <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
                <div style="margin: 15px 0;"></div>
                <el-checkbox-group v-model="checkedItems" @change="handlecheckedItemsChange">
                    <el-checkbox v-for="(item, index) in columns" :label="item.name" :key="item.key + index">{{item.name}}</el-checkbox>
                </el-checkbox-group>
            </div>

            <template #footer>
                <div class="btn-wrapper">
                    <vs-button @click="handleOk">确定</vs-button>
                    <vs-button flat @click="handleCancel">取消</vs-button>
                </div>
            </template>
        </vs-dialog>
    </div>
</template>


<script>
    export default {
        name: 'index',
        components: {},
        props: {
            columns: {
                type: Array,
                default: () => {
                    return []
                }
            }
        },
        data() {
            return {
                visible: false,
                isIndeterminate: false,
                checkAll: false,
                checkedItems: []
            }
        },
        computed: {},
        watch: {
            columns: {
                immediate:true,
                handler() {
                    this.checkedItems = this.columns.filter(item => item.check).map(item => item.name)
                    if (this.checkedItems.length) {
                        this.isIndeterminate = true
                    }
                }
            }
        },
        methods: {
            handleCheckAllChange(val) {
                this.checkedItems = val ? this.columns.map(item => item.name) : [];
                this.isIndeterminate = false;
            },
            handlecheckedItemsChange(value) {
                let checkedCount = value.length;
                this.checkAll = checkedCount === this.columns.length;
                this.isIndeterminate = checkedCount > 0 && checkedCount < this.columns.length;
            },
            handleOk() {
                let newColumns = this.columns.map(item => {
                    if (this.checkedItems.includes(item.name)) {
                        return {
                            ...item,
                            check: true
                        }
                    } else {
                        return {
                            ...item,
                            check: false
                        }
                    }
                })
                this.$parent.columns = newColumns
                this.visible = false
            },
            handleCancel() {
                this.visible = false
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
    ::v-deep {
        .el-checkbox {
            display: block;
        }
    }
    .confirm-content {
    }
    .btn-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        button {
            margin-right: 12px;
            &:last-child {
                margin-right: 0;
            }
        }
    }
</style>
