import store from "../store"

export default class Button {
  constructor(id) {
    this.uid=id
    this.name = 'Button'
    this.template = '<el-button{attr}>{innerHTML}</el-button>'
    this.attr = {
      name: {
        type: 'text',
        compileType: 'innerHTML',
        value: '提交',
        desc: '',
        name:'text'
      },
      // style: {
      //   type: 'text',
      //   value: '',
      //   desc: 'value',
      //   name:'style'
      // },
      type: {
        type: 'select',
        name:'type',
        items: [{
          label: 'primary',
          value: 'primary'
        },
          {
            label: 'ghost',
            value: 'ghost'
          },
          {
            label: 'dashed',
            value: 'dashed'
          },
          {
            label: 'text',
            value: 'text'
          },
          {
            label: 'info',
            value: 'info'
          },
          {
            label: 'success',
            value: 'success'
          },
          {
            label: 'warning',
            value: 'warning'
          },
          {
            label: 'error',
            value: 'error'
          }
        ],
        value:'primary',
        desc: 'type of button'
      }
    }
  }

  render(createElement){
    const context = this;
    let type='info';
    let loading=false;
    return createElement('el-button', {
      props: {
        type: this.attr.type.value,
        loading,
        // size: String,
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
      domProps: {
        componentData: this,
        innerHTML: this.attr.name.value
      },
      nativeOn: {
        click: function (e) {
          console.log(e)
          store.commit('setEditingAttr', e)
        }
      },
    })
  }
}
