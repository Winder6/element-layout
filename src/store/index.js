import Vue from 'vue'
import Vuex from 'vuex'
import {convertToCode} from '@/util'
import LayoutData from '../uiLib/LayoutData.js'
import {guid} from "../util"

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
      editingAttr:{},
      components:new LayoutData(guid()),
      code:''
  },
  mutations: {
      setEditingAttr(state,e){
        e.stopPropagation();
        state.editingAttr = getEditingAttr(e)
      },
      setComponents(state,data){
        state.components=data
      },
      setCode(state,data){
        state.code=data
      },
    setRightClickMenu(state,data){
      
}
  },
  actions:{
      convertToCode({commit,state}){
        let html=convertToCode(state.components);
        commit('setCode',html)
      }
  }
})

function getEditingAttr(e) {
  let el = e.target;
  while(!el.componentData){
    el = el.parentNode
  }
  return el.componentData
}
