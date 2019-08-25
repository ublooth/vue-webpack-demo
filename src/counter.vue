<template>
    <div id="count">
        <div>{{text}}<input type="text" :value="num"></div>
        <input type="button" value="开始" @click="start"/>
        <input type="button" value="暂停" @click="suspend"/>
        <input type="button" value="继续" @click="cont"/>
        <input type="button" value="清除" @click="again"/>
    </div>
</template>
<script>
    export default {
        data() {
            this.timer = null;
            return {
                text: '计数器:' ,
                num:'0',
            }
        },
        methods: {
            // 开始
            start() {
                // setInterval 
                this.timer = window.setTimeout(() => {
                    this.num++;
                    this.start();
                },1000);
            },
            // 暂停
            suspend() {
                window.clearTimeout(this.timer);
            },
            // 继续
             cont() {
                this.start();
            },
            // 重新
             again() {
                 window.clearTimeout(this.timer);
                 this.num = 0;
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