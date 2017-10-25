<template>

    <table class="ui celled table">
        <table-head v-if="isHead" :columns="columns"></table-head>
        <table-body :columns="columns" :data="bodyData" :empty="empty"></table-body>
        <table-foot v-if="isPagination" :pagination="pagination"></table-foot>
    </table>
</template>
<script>
    import Vue from "vue"
    import tableHead from "./table-head.vue"
    import tableBody from "./table-body.vue"
    import tableFoot from "./table-foot.vue"
    const prefixCls = 'maif';

    export default {
        name: "Table",
        components: { tableHead, tableBody, tableFoot },
        data () {
            return {
                bodyData: this.data,
            };
        },
        props: {
            //数据请求的服务器地址如果不传或者为空则表示是本地加载
            server: {
                type: String,
                default:""
            },
            //表格数据
            data: {
                type: Array,
                default () {
                    return [];
                }
            },
            //表格展示column
            columns: {
                type: Array,
                default () {
                    return [];
                }
            },
            //全局无数据占位符
            empty: String,
            //是否显示表头
            isHead:  {
                type: Boolean,
                default:true
            },
            //是否开启分页
            isPagination: {
                type: Boolean,
                default:false
            },
            //分页参数
            pagination: {
                type: Object,
                default () {
                    return {
                        side: "client",
                        perRage: 10,
                        perRange: [10,50,100]
                    };
                },
            }
        },
        computed: {

        },
        method: {

        },
        created(){
            console.log(this)
        },
        mounted(){

        }
    };
</script>
<style lang="scss" scoped>
    $table-prefixCls: 'maif';
</style>
