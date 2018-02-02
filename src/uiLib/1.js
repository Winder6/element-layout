exports.cid = '46'
exports.name = 'Icon';
exports.nickname = 'Icon';
exports.type = 'Icon';
exports.template= `<Icon{model}></Icon>`
exports.desc = 'Icon';
exports.allow = [];
exports.model = {
  type:{
    type:'select',
    value:'refresh',
    desc:''
  }
};

exports.script = function (eventCenter) {

};

exports.render = function (createElement) {
  const context = this
  const store = createElement.store

  if(!context.initScript){
    context.initScript=true
  }

  return createElement(context.type, {
    props:{
      type:context.model.type.value
    },
    domProps: {
      controlConfig: this
    },
    directives: [
      {
        name:'editable',
        value:'Icon'
      }
    ],
    nativeOn: {
      click: function (e) {
        store.commit('dragModule/showEditorPanel', e)
      }
    },
  })
}
