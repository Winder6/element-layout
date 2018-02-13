import store from "../store"
import Input from './Input.js'
export default class FormItemInput {
  constructor(id) {
    this.uid=id
    this.name = 'FormItem'
    this.children=[
      new Input()
    ]
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
          // drop:function (e) {
          //   console.log(e);
          //   let uiName = e.dataTransfer.getData("uiName");
          //   // let uid = guid()
          //
          //   console.log(uiName);
          //   let ex = new ComponentsLib[uiName]();
          //   context.children.push(ex);
          //   // this.$store.commit('setComponents',this.components)
          //   // this.components.push(new ComponentsLib[name](uid));
          //   e.preventDefault();
          //   e.stopPropagation()
          // },
        },
      },
      this.children.map(function (child) {
        return child.render(createElement)
      })
    )
  }
}
