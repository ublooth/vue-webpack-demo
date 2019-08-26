<template>
  <div>
    <input type="text" placeholder="请输入文字" v-model.trim="box" @keyup.enter="add">
    <div v-for="(item,index) of list" :key="index">
      {{item.test}}
      <input type="button" value="X" @click="del(index)">
    </div>
    <p v-if="hide">没有数据，请在输入框中添加数据</p>
  </div>
</template>
<script>
export default {
  data() {
    return{
      box:'',
      obj:{},
      hide:false,
      list:[
        {
          test:"测试11",
        },
        {
          test:"测试22",
        },
        {
          test:"测试33",
        },
        ],
    }
  },
  methods:{
    // 添加
    add() {
      this.obj = Object.assign({test:this.box});
      this.list.push(this.obj);
      this.box = '';
      if(this.list.length > 0) {
        this.hide = false;
      }
    },
    // 删除
    del(index) {
      this.list.splice(index,1);
      if(this.list.length == 0) {
        this.hide = true;
      } 
    },
  },
  components:{
    
  },
}
</script>