<template>

    <table class="ui celled table">
        <!--<thead>-->
            <!--<table-head :styleObject="tableStyle"-->
                        <!--:columns="cloneColumns"-->
                        <!--:obj-data="objData"-->
                        <!--:columns-width="columnsWidth"-->
                        <!--:data="rebuildData"></table-head>-->
        <!--</thead>-->
        <thead>
            <tr><th>标题</th>
                <th>标题</th>
                <th>标题</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
            </tr>
            <tr>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
            </tr>
            <tr>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <th colspan="3">
                    <div class="ui right floated pagination menu">
                        <a class="icon item">
                            <i class="left chevron icon"></i>
                        </a>
                        <a class="item">1</a>
                        <a class="item">2</a>
                        <a class="item">3</a>
                        <a class="item">4</a>
                        <a class="icon item">
                            <i class="right chevron icon"></i>
                        </a>
                    </div>
                </th>
            </tr>
        </tfoot>
    </table>
</template>
<script>
    const prefixCls = 'maif';


    export default {
        name: "Table",
        data () {
            return {

            };
        },
        props: {
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
            //无数据占位符
            noDataText: {
                type: String
            },
        }
    };
</script>
<style lang="scss" scoped>
    $table-prefixCls: 'maif';
</style>
