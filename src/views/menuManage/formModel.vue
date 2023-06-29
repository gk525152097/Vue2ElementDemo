<template>
    <vs-dialog scroll overflow-hidden width="800px" not-center v-model="visible">
        <template #header>
            {{ Object.keys(checkItem).length ? '编辑' : '新增' }}节点
        </template>
        <el-form :model="form" :rules="rules" ref="ruleForm" label-width="80px">
            <el-form-item label="节点类型" prop="name">
                <el-radio-group v-model="form.status" size="small">
                    <el-radio :label="1">菜单</el-radio>
                    <el-radio :label="0">按钮</el-radio>
                </el-radio-group>
            </el-form-item>
            <template v-if="form.status === 1">
                <el-form-item label="上级菜单" prop="name">
                    <treeSelect
                            style="width: 100%"
                            :props="{
                                value: 'id',
                                label: 'label',
                                children: 'children'
                            }"
                            :options="tree"
                            :value="form.parentId"
                            :clearable="true"
                            :accordion="true"
                            @getValue="e => form.parentId = e"
                    />
                </el-form-item>
                <el-form-item label="菜单名称" prop="name">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="菜单地址" prop="name">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="组件地址" prop="name">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="显示顺序" prop="name">
                    <el-input type="number" v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="图标">
                    <div class="icon-wrapper">
                        <div :class="['icon', form.icon === item ? 'active' : '']" v-for="(item) in icons" :key="item" @click="handleIcon(item)">
                            <div class="square">
                                <div class="wrapper">
                                    <i :class="item"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </el-form-item>
            </template>
            <template v-else>
                <el-form-item label="按钮名称" prop="name">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="权限标识" prop="name">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
            </template>
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
    import treeSelect from '@/components/treeSelect'
    export default {
        name: 'formModel',
        components: {
            treeSelect
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
                icons: ["el-icon-platform-eleme","el-icon-eleme","el-icon-delete-solid","el-icon-delete","el-icon-s-tools","el-icon-setting","el-icon-user-solid","el-icon-user","el-icon-phone","el-icon-phone-outline","el-icon-more","el-icon-more-outline","el-icon-star-on","el-icon-star-off","el-icon-s-goods","el-icon-goods","el-icon-warning","el-icon-warning-outline","el-icon-question","el-icon-info","el-icon-remove","el-icon-circle-plus","el-icon-success","el-icon-error","el-icon-zoom-in","el-icon-zoom-out","el-icon-remove-outline","el-icon-circle-plus-outline","el-icon-circle-check","el-icon-circle-close","el-icon-s-help","el-icon-help","el-icon-minus","el-icon-plus","el-icon-check","el-icon-close","el-icon-picture","el-icon-picture-outline","el-icon-picture-outline-round","el-icon-upload","el-icon-upload2","el-icon-download","el-icon-camera-solid","el-icon-camera","el-icon-video-camera-solid","el-icon-video-camera","el-icon-message-solid","el-icon-bell","el-icon-s-cooperation","el-icon-s-order","el-icon-s-platform","el-icon-s-fold","el-icon-s-unfold","el-icon-s-operation","el-icon-s-promotion","el-icon-s-home","el-icon-s-release","el-icon-s-ticket","el-icon-s-management","el-icon-s-open","el-icon-s-shop","el-icon-s-marketing","el-icon-s-flag","el-icon-s-comment","el-icon-s-finance","el-icon-s-claim","el-icon-s-custom","el-icon-s-opportunity","el-icon-s-data","el-icon-s-check","el-icon-s-grid","el-icon-menu","el-icon-share","el-icon-d-caret","el-icon-caret-left","el-icon-caret-right","el-icon-caret-bottom","el-icon-caret-top","el-icon-bottom-left","el-icon-bottom-right","el-icon-back","el-icon-right","el-icon-bottom","el-icon-top","el-icon-top-left","el-icon-top-right","el-icon-arrow-left","el-icon-arrow-right","el-icon-arrow-down","el-icon-arrow-up","el-icon-d-arrow-left","el-icon-d-arrow-right","el-icon-video-pause","el-icon-video-play","el-icon-refresh","el-icon-refresh-right","el-icon-refresh-left","el-icon-finished","el-icon-sort","el-icon-sort-up","el-icon-sort-down","el-icon-rank","el-icon-loading","el-icon-view","el-icon-c-scale-to-original","el-icon-date","el-icon-edit","el-icon-edit-outline","el-icon-folder","el-icon-folder-opened","el-icon-folder-add","el-icon-folder-remove","el-icon-folder-delete","el-icon-folder-checked","el-icon-tickets","el-icon-document-remove","el-icon-document-delete","el-icon-document-copy","el-icon-document-checked","el-icon-document","el-icon-document-add","el-icon-printer","el-icon-paperclip","el-icon-takeaway-box","el-icon-search","el-icon-monitor","el-icon-attract","el-icon-mobile","el-icon-scissors","el-icon-umbrella","el-icon-headset","el-icon-brush","el-icon-mouse","el-icon-coordinate","el-icon-magic-stick","el-icon-reading","el-icon-data-line","el-icon-data-board","el-icon-pie-chart","el-icon-data-analysis","el-icon-collection-tag","el-icon-film","el-icon-suitcase","el-icon-suitcase-1","el-icon-receiving","el-icon-collection","el-icon-files","el-icon-notebook-1","el-icon-notebook-2","el-icon-toilet-paper","el-icon-office-building","el-icon-school","el-icon-table-lamp","el-icon-house","el-icon-no-smoking","el-icon-smoking","el-icon-shopping-cart-full","el-icon-shopping-cart-1","el-icon-shopping-cart-2","el-icon-shopping-bag-1","el-icon-shopping-bag-2","el-icon-sold-out","el-icon-sell","el-icon-present","el-icon-box","el-icon-bank-card","el-icon-money","el-icon-coin","el-icon-wallet","el-icon-discount","el-icon-price-tag","el-icon-news","el-icon-guide","el-icon-male","el-icon-female","el-icon-thumb","el-icon-cpu","el-icon-link","el-icon-connection","el-icon-open","el-icon-turn-off","el-icon-set-up","el-icon-chat-round","el-icon-chat-line-round","el-icon-chat-square","el-icon-chat-dot-round","el-icon-chat-dot-square","el-icon-chat-line-square","el-icon-message","el-icon-postcard","el-icon-position","el-icon-turn-off-microphone","el-icon-microphone","el-icon-close-notification","el-icon-bangzhu","el-icon-time","el-icon-odometer","el-icon-crop","el-icon-aim","el-icon-switch-button","el-icon-full-screen","el-icon-copy-document","el-icon-mic","el-icon-stopwatch","el-icon-medal-1","el-icon-medal","el-icon-trophy","el-icon-trophy-1","el-icon-first-aid-kit","el-icon-discover","el-icon-place","el-icon-location","el-icon-location-outline","el-icon-location-information","el-icon-add-location","el-icon-delete-location","el-icon-map-location","el-icon-alarm-clock","el-icon-timer","el-icon-watch-1","el-icon-watch","el-icon-lock","el-icon-unlock","el-icon-key","el-icon-service","el-icon-mobile-phone","el-icon-bicycle","el-icon-truck","el-icon-ship","el-icon-basketball","el-icon-football","el-icon-soccer","el-icon-baseball","el-icon-wind-power","el-icon-light-rain","el-icon-lightning","el-icon-heavy-rain","el-icon-sunrise","el-icon-sunrise-1","el-icon-sunset","el-icon-sunny","el-icon-cloudy","el-icon-partly-cloudy","el-icon-cloudy-and-sunny","el-icon-moon","el-icon-moon-night","el-icon-dish","el-icon-dish-1","el-icon-food","el-icon-chicken","el-icon-fork-spoon","el-icon-knife-fork","el-icon-burger","el-icon-tableware","el-icon-sugar","el-icon-dessert","el-icon-ice-cream","el-icon-hot-water","el-icon-water-cup","el-icon-coffee-cup","el-icon-cold-drink","el-icon-goblet","el-icon-goblet-full","el-icon-goblet-square","el-icon-goblet-square-full","el-icon-refrigerator","el-icon-grape","el-icon-watermelon","el-icon-cherry","el-icon-apple","el-icon-pear","el-icon-orange","el-icon-coffee","el-icon-ice-tea","el-icon-ice-drink","el-icon-milk-tea","el-icon-potato-strips","el-icon-lollipop","el-icon-ice-cream-square","el-icon-ice-cream-round"],
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
                tree: [{
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
            },
            handleIcon(record) {
                this.form.icon = record
                this.$nextTick(() => {
                    this.$forceUpdate()
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
@import "~@/assets/css/mainModel.scss";
.icon-wrapper {
    .icon {
        width: calc(100% / 12);
        cursor: pointer;
        float: left;
        display: inline;
        box-sizing: border-box;
        &.active {
            border: 1px solid #409EFF;
            border-radius: 12px;
        }
        .square {
            width: 100%;
            padding-top: 100%;
            position: relative;
            .wrapper {
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 22px;
                font-weight: bold;
            }
        }
    }
}
</style>
