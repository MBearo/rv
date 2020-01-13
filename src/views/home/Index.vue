<template>
  <div class="vue">
    Vue : home 
    <div>vue : {{value}}</div>
    <el-button type="primary" @click="valueMinus">修改vue的值-1</el-button>
    <el-button type="primary" @click="selfAdd">修改react的值+1</el-button>
  </div>
</template>
<script>
export default {
  name:'home',
  props: {
  
  },
  
  components: {
  
  },
  
  mixins: [ ],
  
  data () {
    return {
      value:1
    }
  },
  
  computed: {
  
  },
  
  watch: {
    value(val){
      console.log('value watched');
    }
  },
  
  created () {
  
  },
  updated(){
    console.log('vue updated');
  },
  mounted () {
  
  },
  
  methods: {
    selfAdd(){
      this.$$selfAdd()
    },
    valueAdd(){
      console.log('added');
      this.value++
    },
    valueMinus(){
      console.log('minus');
      this.value--
    }
  }
}
</script>
<style scoped>
  .vue{
    border: 1px solid #42b983;
    padding: 10px;
  }
</style>
