<template>
    <div>
      <ui-item name="Button"></ui-item>
      <p  draggable="true" @dragstart="dragstart" @drag="drag">
        主要按钮
      </p>
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

</style>
