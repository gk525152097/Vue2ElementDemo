<!-- tinymc富文本 -->
<template>
    <div v-if="show">
        <editor :ref="ref" v-model="myValue" :init="init" :disabled="disabled" @onClick="onClick" :key="ref"></editor>
    </div>
</template>

<script>
    import tinymce from 'tinymce/tinymce'
    import Editor from '@tinymce/tinymce-vue'
    import 'tinymce/skins/ui/oxide/skin.css'
    import '@/assets/tinymce/langs/zh_CN.js' // 本地汉化
    import 'tinymce/themes/silver/theme'
    import 'tinymce/plugins/image'
    // import 'tinymce/plugins/media'
    // import 'tinymce/plugins/table'
    import 'tinymce/plugins/lists'
    import 'tinymce/plugins/contextmenu'
    import 'tinymce/plugins/wordcount'
    import 'tinymce/plugins/colorpicker'
    import 'tinymce/plugins/textcolor'
    import 'tinymce/icons/default'
    import 'tinymce/plugins/fullscreen' //全屏
    export default {
        name:'tinymce',
        components: {
            Editor
        },
        props: {
            //传入一个value，使组件支持v-model绑定
            value: {
                type: String,
                default: ''
            },
            disabled: {
                type: Boolean,
                default: false
            },
            plugins: {
                type: [String, Array],
                default:
                // ' anchor autolink autosave code codesample colorpicker colorpicker contextmenu directionality emoticons fullscreen hr image imagetools insertdatetime link lists   noneditable pagebreak paste preview print save searchreplace spellchecker tabfocus table template textcolor textpattern visualblocks visualchars wordcount'
                    'fullscreen lists image media table  wordcount'
            },
            toolbar: {
                type: [String, Array],
                default:
                // 'undo redo | searchreplace | bold  italic | underline | strikethrough | alignleft  aligncenter alignright | outdent indent  blockquote  removeformat subscript superscript code codesample hr bullist numlist link image charmap preview anchor pagebreak insertdatetime  table  forecolor backcolor'
                    'undo redo |  formatselect | bold italic underline | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | fullscreen removeformat hr'
            }
        },
        data () {
            return {
                ref: new Date().valueOf(),
                show: true,
                //初始化配置
                init: {
                    language_url: '@/asset/tinymce/langs/zh_CN.js', // 这里需要单独处理
                    language: 'zh_CN',
                    height: 300,
                    plugins: this.plugins,
                    toolbar: this.toolbar,
                    branding: false,
                    menubar: false,
                    //此处为图片上传处理函数，这个直接用了base64的图片形式上传图片，
                    //如需ajax上传可参考https://www.tiny.cloud/docs/configure/file-image-upload/#images_upload_handler
                    images_upload_handler: (blobInfo, success, failure) => {
                        const img = 'data:image/jpeg;base64,' + blobInfo.base64()
                        success(img)
                    },
                    resize: false
                },
                myValue: this.value
            }
        },
        mounted () {
            this.$nextTick(() => {
                tinymce.init({})
            })
        },
        methods: {
            //添加相关的事件，可用的事件参照文档=> https://github.com/tinymce/tinymce-vue => All available events
            //需要什么事件可以自己增加
            onClick (e) {
                this.$emit('onClick', e, tinymce)
            },
            clear () {
                this.myValue = ''
            }
        },
        watch: {
            value (newValue) {
                this.show = false
                this.myValue = newValue
                setTimeout(() => {
                    this.show = true
                    tinymce.init({})
                },500 )
            },
            myValue (newValue) {
                this.$emit('input', newValue)
            }
        },
    }
</script>
<style scoped>
</style>
