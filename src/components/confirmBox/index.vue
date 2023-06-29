<template>
    <div class="center">
        <vs-dialog v-model="visible">
            <template #header>
                <h4 class="not-margin">
                   {{ title || '提示' }}
                </h4>
            </template>
            <div class="confirm-content">
                {{ content || '欢迎使用！' }}
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
            title: {
                type: String,
            },
            content: {
                type: String
            }
        },
        data() {
            return {
                visible: false
            }
        },
        computed: {},
        watch: {},
        methods: {
            handleOk() {
                this.$emit('handleOk')
                this.visible = false
            },
            handleCancel() {
                this.$emit('handleCancel')
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
    .confirm-content {
        text-align: center;
        font-size: 18px;
        padding: 24px;
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
