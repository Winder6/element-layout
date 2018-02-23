import store from "../store"
import ComponentsLib from '../uiLib/index.js'
export default class FormItem {
  constructor(uid,pid) {
    this.uid = uid
    this.pid=pid
    this.name = 'FormItem'
    this.children=[]
    this.template = '<el-form-item{attr}>{innerHTML}</el-form-item>'
    this.attr = {
      label: {
        type: 'text',
        // compileType: 'innerHTML',
        value: '项目一',
        desc: '',
        name:'text'
      },
    }
  }

  render(createElement){
    const context = this;
    return createElement(
      'el-form-item',
      {
      props: {
        label: this.attr.label.value,
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
        'class': {
          'ui-item-box': true
        },
        directives: [
          {
          name: 'dropable',
          value: context
        },
          {
            name: 'editable'
          }
        ],
      domProps: {
        componentData: this,
        // innerHTML: this.attr.name.value
      },
    },
      this.children.map(function (child) {
        return child.render(createElement)
      })
      )
  }
}
