import store from '../store'
export default {
  name:'Button',
  template:`<el-button {{attr}}>按钮</el-button>`,
  attr: {
    name: {
      type: 'text',
      compileType: 'innerHTML',
      value: '提交',
      desc: '',
      name:'text'
    },
    style: {
      type: 'text',
      value: '',
      desc: 'value',
      name:'style'
    },
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
  },
  render:function (createElement) {
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
        controlConfig: this,
        innerHTML: this.attr.name.value
      },
      nativeOn: {
        click: function (e) {
          console.log(e)
          store.commit('setEditingAttr', e.target)
        }
      },
    })
  }
}
