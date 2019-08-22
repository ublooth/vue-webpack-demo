<template>
    <div>
        <div id="app">{{text}}</div>
        <counter></counter>
    </div>
</template>

<script>
    import counter from './counter.vue'
    export default {
        data() {
            return {
                text: '236' 
            }
        },
        components: {
            counter
        },
        methods: {
            test() {
                console.log('test')
            }
        },
        mounted() {
            console.log(123)
            this.test()
            this.text = 'hello'
        }
    }
</script>
<style>
#app {
    color: red;
}
</style>