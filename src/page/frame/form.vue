<!--表单元素展示页面-->


<template title="表单元素展示">
    <div class="frame">
        <div class="ui card">
            <div class="content">
                <div class="header">Project Timeline</div>
            </div>
            <div class="content">
                <h4 class="ui sub header">活动</h4>
                <div class="ui small feed">
                    <div class="event">
                        <div class="content">
                            <form class="ui form">
                                <div class="field">
                                    <label>First Name</label>
                                    <input type="text" name="first-name" placeholder="First Name">
                                </div>
                                <div class="field">
                                    <label>Last Name</label>
                                    <input type="text" name="last-name" placeholder="Last Name">
                                </div>
                                <div class="field">
                                    <div class="ui checkbox">
                                        <input type="checkbox" tabindex="0" class="hidden">
                                        <label>我同意本条款和条件</label>
                                    </div>
                                </div>
                                <button class="ui button" type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                    <div class="event">
                        <div class="content">
                            <div class="summary"><a>Stevie Feliciano</a> was added as an <a>Administrator</a> </div>
                        </div>
                    </div>
                    <div class="event">
                        <div class="content">
                            <div class="summary"><a>Helen Troy</a> added two pictures </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="extra content">
                <button class="ui button">Join Project</button>
            </div>
        </div>
    </div>






</template>

<script>
    import Vue from "vue"

    //页面输出对象
    export default  {
        data () {
            return {

            }
        },
        methods: {
        },
        //这里是需要进行初始化操作
        mounted () {
            //下拉菜单初始化
//            $('.ui.dropdown').dropdown();
//            //菜单初始化
//            $('.ui.accordion').accordion({exclusive:false});
        }
    };
</script>

<style lang="scss">

</style>

