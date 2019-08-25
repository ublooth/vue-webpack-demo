<template>
    <div>
        <!-- <div id="app">{{text}}</div>
        <counter @message2="asd"></counter> -->
        <div id="app">
            <h1>My Todo App123!</h1>
            <TodoList/>
        </div>
    </div>
    
</template>

<script>
// import counter from './counter.vue'
// import { setTimeout } from 'timers';
import TodoList from './components/TodoList.vue'
    export default {
        data() {
            return {
                text: 'test vue' 
            }
        },
        components:{
            // counter
            TodoList
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