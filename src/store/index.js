import Vue from 'vue'
import Vuex from 'vuex'
import {convertToCode} from '@/util'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
      editingAttr:{},
      components:[],
      code:''
  },
  mutations: {
      setEditingAttr(state,el){
        state.editingAttr = el.controlConfig
      },
      setComponents(state,data){
        state.components=data
      },
      setCode(state,data){
        state.code=data
      }
  },
  actions:{
      convertToCode({commit,state}){
        let html=convertToCode(state.components);
        commit('setCode',html)
      }
  }
})
