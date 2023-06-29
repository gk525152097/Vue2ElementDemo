<template>
    <div class="box">
        <div class="main-title">各类型人才总量统计</div>
        <div class="data-wrapper">
            <div class="item" v-for="(item, index) in dataList" :key="index">
                <div class="icon">
                    <i class="el-icon-s-custom" style="font-size: 36px; color: rgba(var(--vs-primary), 1)"></i>
                </div>
                <div class="info-wrapper">
                    <div class="title">{{ item.title }}</div>
                    <div class="number">
                        <CountTo :startVal="0" :endVal="item.number" :duration="1000 * 3" />
                        <div class="sub">人</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="main-title">地域分布</div>
        <div class="map-wrapper">
            <div class="map" ref="map"></div>
        </div>
        <div class="main-title">年度趋势图</div>
        <div class="line-wrapper">
            <div class="line" ref="line"></div>
        </div>
    </div>
</template>

<script>
    import CountTo from 'vue-count-to'
    import geoJson from './../../assets/mapJSON/中华人民共和国'
    export default {
        name: 'index',
        components: {
            CountTo
        },
        props: {},
        data() {
            return {
                dataList: [
                    { title: '外地驻派百色人才', number: 3205 },
                    { title: '在外百色籍人才', number: 6426 },
                    { title: '百色籍高中毕业生', number: 123234 },
                    { title: '绿领人才、土专家', number: 982 },
                ]
            }
        },
        computed: {},
        watch: {},
        methods: {
            handleMap() {
                console.log(geoJson.features)
                let data = geoJson.features.map(item => {
                    return {
                        name: item.properties.name,
                        value: (10000 * Math.random() * Math.random()).toFixed(0)
                    }
                })
                var arr = data.map(item => item.value)
                var max = arr.sort((a, b) => {
                    return b-a;
                })[0];
                let map = this.$echarts.init(this.$refs.map)
                this.$echarts.registerMap("baise", geoJson);
                const option = {
                    visualMap: [{
                        id: 'map',
                        type: 'continuous',
                        min: 0,
                        max: max,
                        seriesIndex: 0,
                        inRange: {
                            color: ['#FFF', 'rgba(91,202,250,0.7)', 'rgba(91,202,250,1)' ]
                        },
                        text: ['高', '低']
                    }],
                    geo: {
                        map: "baise",
                        top: 10,
                        bottom: 10,
                        left: 130,
                        right: 90,
                        label: {
                            normal: {
                                show: true,
                                color: "rgb(45, 50, 59)",
                                fontSize: 12,
                            },
                            emphasis: {
                                show: true,
                                color: "#fff",
                                fontSize: 12,
                            },
                        },
                        itemStyle: {
                            normal: {
                                areaColor: "#5bcafa",
                                borderColor: "#0083fc96",
                                borderWidth: 1,
                                // shadowColor: "rgba(106,65,255,0.6)",
                                // shadowOffsetX: 0,
                                // shadowOffsetY: 14
                            },
                            emphasis: {
                                areaColor: "rgba(0,110,255,0.5)",
                                borderColor: "rgba(0,244,247,0.5)",
                                borderWidth: 1,
                            },
                        },
                    },
                    tooltip: {
                        padding: 0,
                        enterable: true,
                        transitionDuration: 1,
                        textStyle: {
                            color: '#000',
                            decoration: 'none',
                        },
                        backgroundColor: 'rgba(0,0,0,0)',
                        formatter: function(params) {
                      //       if (params.data) {
                      //           if (checkItem.name !== params.data.name) {
                      //               checkItem = params.data
                      //               var tipHtml = '';
                      //               if (checkItem && checkItem.list) {
                      //                   tipHtml = `<div class="map-tip-wrapper">
                      // <div class="tip-title"><span></span>${checkItem.name}: <span>${checkItem.list.levelA + checkItem.list.levelB + checkItem.list.levelC + checkItem.list.levelD + checkItem.list.levelE}</span></div>
                      // <div class="tip-item">A层次人才总数:<span>${checkItem.list.levelA || 0}</span>人</div>
                      // <div class="tip-item">B层次人才总数:<span>${checkItem.list.levelB || 0}</span>人</div>
                      // <div class="tip-item">C层次人才总数:<span>${checkItem.list.levelC || 0}</span>人</div>
                      // <div class="tip-item">D层次人才总数:<span>${checkItem.list.levelD || 0}</span>人</div>
                      // <div class="tip-item">E层次人才总数:<span>${checkItem.list.levelE || 0}</span>人</div>
                      // </div>`;
                      //               }
                      //               $('#map_tip_wrapper')[0].innerHTML = tipHtml
                      //           }
                      //       }

                            return '';
                        }
                    },
                    series: [
                        {
                            type: 'map',
                            map: 'baise',
                            geoIndex: 0,
                            aspectScale: 0.75, //长宽比
                            showLegendSymbol: false, // 存在legend时显示
                            label: {
                                normal: {
                                    show: false
                                },
                                emphasis: {
                                    show: false,
                                    textStyle: {
                                        color: '#000'
                                    }
                                }
                            },
                            itemStyle: {
                                normal: {
                                    areaColor: '#031525',
                                    borderColor: '#3B5077',
                                },
                                emphasis: {
                                    areaColor: '#2B91B7'
                                }
                            },
                            animation: false,
                            data: data
                        }
                    ]
                }
                map.setOption(option)
            },
            handleLine() {
                let line = this.$echarts.init(this.$refs.line)
                line.setOption({
                    color: ['rgb(243, 148, 35)', 'rgb(84, 203, 128)', 'rgb(121, 194, 242)', 'rgb(238, 32, 142)', 'rgb(15, 59, 155)'],
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: ['外地驻派百色人才', '在外百色籍人才', '百色籍高中毕业生', '绿领人才', '土专家']
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: ['2019', '2020', '2021', '2022', '2023']
                    },
                    yAxis: {
                        type: 'value',
                        axisLabel: {
                            formatter: '{value}人'
                        }
                    },
                    series: [
                        {
                            name: '外地驻派百色人才',
                            type: 'line',
                            stack: 'Total',
                            label: {
                                show: true,
                                position: 'top'
                            },
                            data: [120, 132, 101, 134, 90]
                        },
                        {
                            name: '在外百色籍人才',
                            type: 'line',
                            stack: 'Total',
                            label: {
                                show: true,
                                position: 'top'
                            },
                            data: [220, 182, 191, 234, 290]
                        },
                        {
                            name: '百色籍高中毕业生',
                            type: 'line',
                            stack: 'Total',
                            label: {
                                show: true,
                                position: 'top'
                            },
                            data: [150, 232, 201, 154, 190]
                        },
                        {
                            name: '绿领人才',
                            type: 'line',
                            stack: 'Total',
                            label: {
                                show: true,
                                position: 'top'
                            },
                            data: [320, 332, 301, 334, 390]
                        },
                        {
                            name: '土专家',
                            type: 'line',
                            stack: 'Total',
                            label: {
                                show: true,
                                position: 'top'
                            },
                            data: [820, 932, 901, 934, 1290]
                        }
                    ]
                })
            }
        },
        created() {
        },
        mounted() {
            this.handleMap()
            this.handleLine()
        },
        destroyed() {
        }
    }
</script>

<style lang="scss" scoped>
    @import "~@/assets/css/mainPage";
    .main-title {
        margin: 40px 0 24px;
        font-size: 18px;
        font-weight: 400;
        position: relative;
        padding-left: 16px;
        &:before {
            content: '';
            width: 4px;
            left: 0px;
            height: 100%;
            position: absolute;
            background: rgba(var(--vs-primary), 1);
        }
        &:first-child {
            margin-top: 0;
        }
    }
    .data-wrapper {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        .item {
            display: flex;
            align-items: center;
            justify-content: stretch;
            .icon {
                width: 60px;
                height: 60px;
                margin-right: 12px;
                background: rgba(var(--vs-primary), 0.2);
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .info-wrapper {
                display: flex;
                flex-direction: column;
                .title {
                    font-size: 16px;
                }
                .number {
                    display: flex;
                    align-items: baseline;
                    font-size: 36px;
                    font-family: DINAlternate-Bold;
                    color: orange;
                    .sub {
                        font-size: 14px;
                    }
                }
            }
        }
    }
    .map-wrapper {
        height: 660px;
        .map {
            margin: 0 auto;
            width: 920px;
            height: 100%;
        }
    }
    .line-wrapper {
        height: 300px;
        .line {
            width: 100%;
            height: 100%;
        }
    }
</style>
