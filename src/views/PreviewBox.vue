<template>
  <div class="layout-box" id="div1" @drop="drop" @dragover="allowDrop">
    <render-layout :components="components"></render-layout>
  </div>
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
      components(){
        return this.$store.state.components
      }
    },
    methods: {
      allowDrop(e) {
        e.preventDefault();
      },
      drop(e) {
        let data = e.dataTransfer.getData("uiName");
        console.log(data)
        let name = 'Button'
        let uid = guid()
        let ex = new ComponentsLib[name](uid)

        this.components.push(ex);
        this.$store.commit('setComponents',this.components)
        // this.components.push(new ComponentsLib[name](uid));
        e.preventDefault();
      },
    },
    components:{
      RenderLayout
    }
  }
</script>

<style lang="less" type="text/less">
  .layout-box {
    height: 100%;
    padding: 10px;
    box-sizing: border-box;
    border: 1px solid #aaaaaa;
  }
</style>
