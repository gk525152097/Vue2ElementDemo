<template>
    <el-row :gutter="12" class="show-more-wrapper" :style="{ height: searchMore ? `${height}px` : '0px' }">
        <div ref="showMore" class="show-more">
            <slot></slot>
        </div>
    </el-row>
</template>

<script>
export default {
    name: 'index',
    components: {},
    props: ['searchMore'],
    data() {
        return {
            height: 0
        }
    },
    computed: {},
    watch: {
    },
    methods: {},
    created() {
    },
    mounted() {
        this.height = this.$refs.showMore.offsetHeight
    },
    destroyed() {
    }
}
</script>

<style lang="scss" scoped>
    .show-more-wrapper {
        position: relative;
        overflow: hidden;
        transition: all 0.5s;
        .show-more {
            width: 100%;
            position: absolute;
        }
    }
</style>
