<template>
    <div id="count">
        <div>{{text}}<input type="text" :value="num"></div>
        <input type="button" value="开始" @click="start(),start2()" v-if="hidden"/>
        <input type="button" value="暂停" @click="suspend(),suspend2()" v-if="hidden2"/>
        <input type="button" value="继续" @click="cont(),cont2()" v-if="hidden3"/>
        <input type="button" value="清除" @click="again(),again2()"/>
    </div>
</template>
<script>
    export default {
        data() {
            this.timer = null;
            return {
                text: '计数器:' ,
                num:'0',
                hidden:true,
                hidden2:false,
                hidden3:false,
            }
        },
        methods: {
            // 开始
            start() {
                this.timer = window.setInterval(() => {
                    this.num++;
                },1000);
            },
            start2() {
                this.hidden = !this.hidden;
                this.hidden2 = !this.hidden2;
            },
            // 暂停
            suspend() {
                window.clearInterval(this.timer);
            },
            suspend2() {
                this.hidden2 = !this.hidden2;
                this.hidden3 = !this.hidden3;
            },
            // 继续
            cont() {
                this.start();
            },
            cont2() {
                this.hidden2 = !this.hidden2;
                this.hidden3 = !this.hidden3;
            },
            // 重新
            again() {
                 window.clearInterval(this.timer);
                 this.num = 0;
            },
            again2() {
                 this.hidden = !this.hidden;
                 if(this.hidden2 == true) {
                     this.hidden2 = false
                 }
                 if(this.hidden3 == true) {
                     this.hidden3 = false
                 }
            },
        }
    }
</script>
<style>
    #count {
        color: red;
        font-size: 26px;
    }
</style>