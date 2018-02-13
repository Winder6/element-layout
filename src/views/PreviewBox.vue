<template>
    <render-layout :components="components" class="components-box show-border" @click="show"></render-layout>
  <!--<div class="layout-box" @drop="drop" @dragover="allowDrop">-->
    <!--<render-layout :components="components" class="show-border"></render-layout>-->
  <!--</div>-->
</template>

<script type="text/ecmascript-6">
  import RenderLayout from './RenderLayout.js'
  import ComponentsLib from '../uiLib/index.js'
  import {guid} from '@/util'
  export default {
    data() {
      return {

      }
    },
    created() {

    },
    computed: {
      //这里将state中组件数据和视图中组件数据匹配，后面数据有变动就会响应式渲染
      components(){
        return this.$store.state.components
      }
    },
    methods: {
      show(){
        alert(1);
      },
      // allowDrop(e) {
      //   e.preventDefault();
      // },
      // drop(e) {
      //   console.log('previewBox')
      //   let uiName = e.dataTransfer.getData("uiName");
      //   let uid = guid()
      //   let ex = new ComponentsLib[uiName](uid)
      //   this.components.push(ex);
      //   this.$store.commit('setComponents',this.components)
      //   // this.components.push(new ComponentsLib[name](uid));
      //   e.preventDefault();
      // },
      showCode(){
        this.$emit('showCode')
      }
    },
    components:{
      RenderLayout
    }
  }
</script>

<style lang="less" type="text/less">

  .components-box{

    height: 100%;
    padding: 10px;
    box-sizing: border-box;
    box-shadow: rgba(0,0,0,.1) 0 3px 10px;
    border-radius: 10px;
    background: #fff;
  }
</style>
