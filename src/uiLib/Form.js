import store from "../store"
import ComponentsLib from '../uiLib/index.js'

export default class Form {
  constructor(uid,pid) {
    this.uid = uid
    this.pid=pid
    this.name = 'Form'
    this.children = []
    this.template = '<el-form{attr}>{innerHTML}</el-form>'
    this.attr = {
      labelWidth: {
        type: 'text',
        value: '80px',
        name: 'label-width'
      },
    }
  }

  render(createElement) {
    const context = this;
    return createElement(
      'el-form',
      {
        props: {
          labelWidth: this.attr.labelWidth.value,
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
        }
      },
      this.children.map(function (child) {
        return child.render(createElement)
      })
    )
  }
}
