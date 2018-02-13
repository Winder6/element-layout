// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import hljs from 'highlight.js'
import App from './App'
import router from './router'
import store from './store'
import './style/index.less'
import myPlugin from './myPlugin'

Vue.use(ElementUI);
Vue.use(myPlugin);
Vue.config.productionTip = false;

Vue.directive('highlight',{
  bind:function (el, binding) {
    el.textContent = binding.value;
    hljs.highlightBlock(el)
  },
  componentUpdated:function (el, binding) {
    el.textContent = binding.value;
    hljs.highlightBlock(el)
  }
})

// Vue.directive('dropable',{
//   bind:function (el, binding) {
//     el.ondrop=function (e) {
//       let uiName = e.dataTransfer.getData("uiName");
//       binding.value.children.push(new ComponentsLib[uiName]());
//         e.stopPropagation()
//       console.log(binding)
//     }
//   }
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
