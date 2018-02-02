import store from '../store'

export default {
  bind (el, binding, vnode) {
    el.ondrop=function (el) {
      let uiName = el.dataTransfer.getData("uiName");
      console.log(uiName);
    }
  }
};
