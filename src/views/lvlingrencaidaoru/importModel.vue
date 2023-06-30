<template>
    <vs-dialog scroll overflow-hidden not-center v-model="visible">
        <template #header>
            批量导入
        </template>
        <el-upload class="upload-demo" drag action="" :limit="1" :auto-upload="false" :file-list="fileList" :on-remove="handleRemove" :on-change="handleAdd">
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        </el-upload>

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
        name: 'importModel',
        components: {},
        props: {},
        data() {
            return {
                visible: false,
                fileList: []
            }
        },

        computed: {},
        watch: {},
        methods: {
            handleAdd(file, fileList) {
                this.fileList = fileList
            },
            handleRemove() {},
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
    .importModel {
    }
</style>
