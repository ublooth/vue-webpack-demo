<template>
   
    <div id="app">{{text}}
        <counter @message2="asd"></counter>
        
            
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
                // window.clearTimeout();
                console.log(num)
            }
        }
    }
    
</script>
<style></style>