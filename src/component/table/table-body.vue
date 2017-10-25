<template>
    <tbody>
        <tr v-for="list in data">
            <td v-for="item in columns">
                <div v-if="typeof list[item.field]!== 'undefined' && list[item.field]!==''" v-html="list[item.field]"></div>
                <div v-else>{{item.empty||empty}}</div>
            </td>
        </tr>
    </tbody>
</template>
<script>


    export default {
        name: 'TableBody',
        props: {
            empty: String,
            columns: Array,
            //表格数据
            data: Array
        },
        computed: {

        },
        methods: {
            rowChecked (_index) {
                return this.objData[_index] && this.objData[_index]._isChecked;
            },
            rowDisabled(_index){
                return this.objData[_index] && this.objData[_index]._isDisabled;
            },
            rowExpanded(_index){
                return this.objData[_index] && this.objData[_index]._isExpanded;
            },
            handleMouseIn (_index) {
                this.$parent.handleMouseIn(_index);
            },
            handleMouseOut (_index) {
                this.$parent.handleMouseOut(_index);
            },
            clickCurrentRow (_index) {
                this.$parent.clickCurrentRow(_index);
            },
            dblclickCurrentRow (_index) {
                this.$parent.dblclickCurrentRow(_index);
            }
        }
    };
</script>
