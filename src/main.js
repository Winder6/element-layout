// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import hljs from 'highlight.js'
import App from './App'
import router from './router'
import store from './store'

Vue.use(ElementUI);
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

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
