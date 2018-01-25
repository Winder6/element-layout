<template>
    <span class="ui-item" draggable="true" @dragstart="dragstart" @drag="drag" :data-name="name">
        {{name}}
    </span>
</template>

<script type="text/ecmascript-6">
  export default {
    name:'UiItem',
    props:{
      name:String
    },
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
        let uiName = e.target.getAttribute('data-name')
        e.dataTransfer.setData('uiName', uiName)
      },
      drag(e) {

      }
    }
  }
</script>

<style lang="less" type="text/less">

</style>
