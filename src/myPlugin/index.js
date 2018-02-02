import ComponentsLib from "../uiLib"

export default {
  install:function(Vue, options) {
    Vue.directive('dropable',{
      bind:function (el, binding) {
        console.log(el)
        el.ondrop=function (e) {
          let uiName = e.dataTransfer.getData("uiName");
          binding.value.children.push(new ComponentsLib[uiName]());
          e.stopPropagation()
          console.log(binding)
        }
      }
    })
  }
}


