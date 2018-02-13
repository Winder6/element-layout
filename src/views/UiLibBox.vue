<template>
    <div>
      <h4 class="title">组件库</h4>
      <ui-item name="Button"></ui-item>
      <ui-item name="Form"></ui-item>
      <ui-item name="FormItem"></ui-item>
      <ui-item name="Input"></ui-item>
      <ui-item name="FormItemInput"></ui-item>
    </div>
</template>

<script type="text/ecmascript-6">
  import UiItem from '@/components/UiItem.vue'
  export default {
    data() {
      return {
      }
    },
    created() {

    },
    computed: {
    },
    methods: {
      dragstart(e) {
        e.dataTransfer.setData("info", "button");
      },
      drag(e) {

      },
    },
    components:{
      UiItem
    }
  }
</script>

<style lang="less" type="text/less">
  .title{
    line-height: 60px;
    margin: 0;

  }
</style>
