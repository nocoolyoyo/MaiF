<!--主界面-->
<template title="主页">
    <div class="frame">
        <mtable></mtable>
        <div class="ui card">
            <div class="content">
                <div class="header">Project Timeline</div>
                <button class="ui facebook button" @click="triggerTestEvent"><i class="facebook icon"></i> 事件傳播 </button>
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
    import Mtable from "../../component/table/table.vue"
    //页面输出对象
    export default  {
        components: {Mtable},
        data () {
            return {
            }
        },
        methods: {
            triggerTestEvent(){
                EventBus.emit('frm-form_test', {params:12332});
            }
        },
        mounted(){
            console.log(this)
        }
    };
</script>
<style lang="scss">
</style>

