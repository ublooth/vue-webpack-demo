<template>
    <div>
        <h1>Hello App!</h1>
        <p>
            <router-link to="/foo">Go to Foo</router-link>
            <router-link to="/bar">Go to Bar</router-link>
            <router-link to="/counter">Go to Count</router-link>
            <router-link to="/todo">Go to TodoList</router-link>
        </p>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                text: '236' 
            }
        }
    }
</script>
<style></style>