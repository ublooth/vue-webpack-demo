<template>
    <div id="count">
        <div>{{text}}<input type="text" :value="num"></div>
        <input type="button" value="开始" @click="start"/>
        <input type="button" value="暂停" @click="suspend"/>
        <input type="button" value="继续" @click="cont"/>
        <input type="button" value="重新" @click="again"/>
    </div>
</template>
<script>
import { clearTimeout } from 'timers';
// import { setTimeout } from 'timers';
    export default {
        data() {
            return {
                text: '计数器:' ,
                num:'0',
            }
        },
        methods: {
            // 开始
            start() {
                this.timer = window.setTimeout(() => {
                    this.num++;
                    this.$emit("message",this.start());
                },1000)
            },
            // 暂停
            suspend() {
                console.log(222222211)
                // console.log(this.suspend())
                clearTimeout(this.timer)
            },
            // 继续
             cont() {
                
            },
            // 重新
             again() {
               
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