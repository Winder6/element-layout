import store from "../store"
import ComponentsLib from '../uiLib/index.js'
export default class Input {
  constructor(id) {
    this.uid=id
    this.name = 'FormItem'
    this.children=[]
    this.template = '<el-input{attr}>{innerHTML}</el-input>'
    this.attr = {
      type: {
        type: 'select',
        name:'type',
        items: [{
          label: 'text ',
          value: 'text'
        },
          {
            label: 'textarea',
            value: 'textarea'
          }
        ],
        value:'text',
        desc: 'type of button'
      },
      'v-model':{
          type:"text",
          name:"v-model",
          value:""
      }
    }
  }

  render(createElement){
    const context = this;
    return createElement(
      'el-input',
      {
      props: {
        type: this.attr.type.value,
        // icon: {
        //   type: String,
        //   default: ''
        // },
        // nativeType: {
        //   type: String,
        //   default: 'button'
        // },
        // loading: Boolean,
        // disabled: Boolean,
        // plain: Boolean,
        // autofocus: Boolean,
        // round: {
        //   type:Boolean,
        //   default:false
        // }
      },
        directives: [{
          name: 'dropable',
          value: context
        }],
      domProps: {
        componentData: this,
        // innerHTML: this.attr.name.value
      },
      nativeOn: {
        click: function (e) {
          console.log(e)
          store.commit('setEditingAttr', e);
        },
      },
    }
      )
  }
}
