<template>
    <div class="index" @click="handleCopy">
        {{ text }}
    </div>
</template>

<script>
    import copy from "@/utils/copy";
    export default {
        name: 'index',
        components: {},
        props: {
            text: {
                type: String
            }
        },
        data() {
            return {}
        },

        computed: {},
        watch: {},
        methods: {
            handleCopy() {
                copy(this.text)
                setTimeout(() => {
                    this.$vs.notification({
                        position: 'top-center',
                        text: `复制成功：${this.text}`
                    })
                })
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
    .index {
        cursor: copy;
    }
</style>
