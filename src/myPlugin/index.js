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
          let pid = binding.value.uid;
          binding.value.children.push(new ComponentsLib[uiName](guid(),pid));
          e.stopPropagation()
        }
      }
    });
    Vue.directive('editable',{
        bind:function (el, binding) {
          //点击设置属性
          el.onclick=function (e) {
            e.stopPropagation()
            console.log(e)
            store.commit('setEditingAttr', e)
          }
          //右键菜单
          el.oncontextmenu = function (e) {
            // e.preventDefault();
            e.preventDefault()
            e.stopPropagation()
            // console.log(el.componentData);
            store.commit('setRightClickMenu', el)
            return false
          }
        }
      })
  }
}


