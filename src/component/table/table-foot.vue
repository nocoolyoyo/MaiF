<template>
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
                    <a class="item">...</a>
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
</template>
<script>


    export default {
        name: 'TableFoot',
        props: {
            pagination: Object,
            sidePagination: {
                type: String,
                default (){
                    return "client"
                }
            }
        },
        computed: {
            styles () {
                const style = Object.assign({}, this.styleObject);
                const width = this.$parent.bodyHeight === 0 ? parseInt(this.styleObject.width) : parseInt(this.styleObject.width) + this.$parent.scrollBarWidth;
                style.width = `${width}px`;
                return style;
            }
        },
        methods: {

        }
    };
</script>
