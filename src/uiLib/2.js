exports.cid = '6'
exports.name = 'Button';
exports.nickname = 'Button';
exports.type = 'Button';
exports.template = `
<Button{model}>{innerHTML}</Button>
`
exports.desc = '按钮';
exports.allow = null;
exports.model = {
  name: {
    type: 'text',
    compileType: 'innerHTML',
    value: '提交',
    desc: ''
  },
  style: {
    type: 'text',
    value: '',
    desc: 'value'
  },
  type: {
    type: 'select',
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
};

exports.script = function() {

};

exports.render = function(createElement) {
  const context = this
  const store = createElement.store


  if (!context.initScript) {
    context.initScript = true
  }

  return createElement(context.type, {
    style: context.model.style.value,
    props: {
      type: context.model.type.value
    },
    domProps: {
      controlConfig: this,
      innerHTML: context.model.name.value
    },
    directives: [{
      name: 'editable',
      value: 'Button'
    }],
    on: {
      click(e) {

        createElement.eventCenter.trigger('submit-form', {
          from: context.uid,
          data: ''
        })
      }
    },
    nativeOn: {
      click: function(e) {
        store.commit('dragModule/showEditorPanel', e)
      }
    },
  })
}
