<template>
    <div id="app">{{text}}
        <counter></counter> 
    </div>
</template>

<script>
import counter from './counter.vue'

    export default {
        data() {
            return {
                text: 'test vue' 
            }
        },
        components:{
            counter
        },
        methods: {
            getMeaasge() {
                console.log(123)
            },
            asd() {
                console.log(2233)
            }
        }
    }
</script>
<style></style>