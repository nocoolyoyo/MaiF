<!--表单元素展示页面-->

<template title="表单元素展示">
    <div class="frame">
        <h2 class="frame-header ui header dividing">
            <span class="ui ">表單元素展示</span>
            <span class="ui label small"><i class="mail icon"></i>2017-05-23</span>
        </h2>

        <uploader :options='uploadOpts'></uploader>


        <div class="ui card">
            <div class="content">
                <div class="header">Project Timeline</div>
            </div>
            <div class="content">
                <h4 class="ui sub header" id="exp">活动</h4>
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
    import EventBus from "../../module/custom/EventBus"
    import Uploader from "../../component/uploader/uploader.vue"
    import Table from "../../component/table/table.vue"



    //這裏是頁面節點喧嚷完畢后的回調，相當於jquery的domReady
    function domReady(dom,$dom,Vm){

        dom.querySelector("#exp");
        $dom.find("#exp").on("click", function () {
            console.log(123213)
        })


    }

    function frmFormTest(data) {
        console.log(data)
    }

    //页面输出对象
    export default {
        components: { Uploader },
        data () {
            return {
                uploadOpts: {
                    server: "www.baidu.com"
                }
            }
        },
        methods: {

        },
        mounted(){
            domReady(this.$el,$(this.$el),this);
        },
        created: function () {
            EventBus.on('frm-form_test', frmFormTest);
        },
        beforeDestroy: function () {
            EventBus.off('frm-form_test',frmFormTest);
        },
    };
</script>

<style lang="scss">

</style>

