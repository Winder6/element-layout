import Vue from 'vue'
import Vuex from 'vuex'
import {convertToCode} from '@/util'
import LayoutData from '../uiLib/LayoutData.js'
import {guid} from "../util"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    editingAttr: {},
    components: new LayoutData(guid()),
    code: '',
    rightClickMenuData: {}
  },
  getters: {
    editingAttr: ({editingAttr}) => editingAttr,
    components: ({components}) => components,
    code: ({code}) => code,
    rightClickMenuData: ({rightClickMenuData}) => rightClickMenuData,
  },
  mutations: {
    setEditingAttr(state, e) {
      state.rightClickMenuData = {
        style: {
          display: "none",
        }
      }
      state.editingAttr = getEditingAttr(e)
    },
    setComponents(state, data) {
      state.components = data
    },
    setCode(state, data) {
      state.code = data
    },
    setRightClickMenu(state, el) {
      let oX = window.event.clientX;
      let oY = window.event.clientY - 20;
      state.rightClickMenuData = {
        style: {
          display: "block",
          left: oX + "px",
          top: oY + "px"
        },
        uid: el.componentData.uid
      }
    },
    hideRightClickMenu(state){
      state.rightClickMenuData = {
        style: {
          display: "none",
        }
      }
    }
  },
  actions: {
    convertToCode({commit, state}) {
      let html = convertToCode(state.components);
      commit('setCode', html)
    }
  }
})

function getEditingAttr(e) {
  let el = e.target;
  while (!el.componentData) {
    el = el.parentNode
  }
  return el.componentData
}
