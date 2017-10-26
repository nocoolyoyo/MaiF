<!--评论组件-->
<!--组件调用说明
    1. 组件包含列表展示，列表数据与传入的数据对象做绑定，通过构造参数指定的对象展示对应的参数;
    2. 因为是视图是相应数据的，绑定数据与调用的上层组件是双向绑定，所以通过改变数据源进行视图数据展示变更；
    3. 分页是静态分页，可做指定服务端分页，则可以不指定闯入的数据，而调用组件内自己的数据调用方法；
    静态样式控制类：无

    示例
    数据模板可以参照该目录下的template.json模板数据

-->
<template>
    <div class="ui minimal comments">
        <h3 class="ui dividing header" v-if="title">{{title}}</h3>

        <div class="comment" v-for="comment in data">
            <!--<a class="avatar">-->
                <!--<img src="../../assets/image/avatar.jpg">-->
            <!--</a>-->
            <avatar class="avatar round" :img-src="comment.avatar"></avatar>
            <div class="content">
                <a class="author">{{comment.author}}</a>
                <div class="metadata">
                    <span class="date">{{comment.createTime}}</span>
                </div>
                <div class="text">{{comment.content}}</div>
                <div class="actions">
                    <a class="reply">回复</a>
                </div>
            </div>
            <div class="comments" v-if="comment.children">
                <div class="comment" v-for="reply in comment.children">
                    <avatar class="avatar round" :img-src="reply.avatar"></avatar>
                    <div class="content">
                        <a class="author">{{reply.author}}</a>
                        <div class="metadata">
                            <span class="date">{{reply.createTime}}</span>
                        </div>
                        <div class="text"><span v-if="reply.receiverId"> 回复 <a class="author">{{reply.receiver}}</a></span>{{reply.content}}</div>
                        <div class="actions">
                            <a class="reply">回复</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<style lang="scss" scoped>
    @import "../../assets/scss/methods";
    .ui.comments .comment .avatar {
         margin: 0;
    }
</style>
<script>
    //FixMe:模拟数据，记得要移除
    import Comments from "../comments/template"

    import Avatar from "../avatar/avatar.vue"


    export default {
        components: {Avatar},
        data () {
            return {
                data: Comments
            }
        },
        props: {
            //评论组件标题，若不传则默认不展示标题
            title: String,
            //评论皮肤模板选择
            skin: String,
            //传入的评论数据对象
//            data: [Array],
            //传入的获取评论数据的地址
            server: String,
            //分页设置相关,
            pagination: Object,
        }
    }
</script>