import ComponentsLib from "../uiLib"
import {guid} from "../util"
import store from "../store"

export default {
  install:function(Vue, options) {
    Vue.directive('dropable',{
      bind:function (el, binding) {
        el.ondragover = function (e) {
          e.preventDefault();
        }
        el.ondrop=function (e) {
          let uiName = e.dataTransfer.getData("uiName");
          binding.value.children.push(new ComponentsLib[uiName](guid()));
          e.stopPropagation()
        }
      }
    });
    Vue.directive('editable',{
        bind:function (el, binding) {
          el.oncontextmenu = function (e) {
            // e.preventDefault();
            console.log(el.componentData);
            store.commit('setRightClickMenu', el)
            return false
          }
        }
      })
  }
}


