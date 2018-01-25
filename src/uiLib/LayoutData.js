export default class LayoutData {
  constructor() {
    this.allow = []
    this.children = []
    this.cid = '100'
    this.clazzId = 6
    this.code = function (exports) {
      exports.cid = '100'
      exports.name = 'DropPanel';
      exports.nickname = 'DropPanel';
      exports.type = 'Div';
      exports.template = `
<div {model} {slotName}>{slot}</div>
`
      exports.desc = '拖拽安置面板';
      exports.allow = [];

      exports.model = {
        style: {
          type: 'json',
          value: {},
          desc: 'value'
        }
      };

      exports.script = function () {

      };

      exports.render = function (createElement) {
        const context = this
        const store = createElement.store


        if (!context.initScript) {
          context.initScript = true

        }


        return createElement('Div', {
          style: context.model.style.value,
          domProps: {
            controlConfig: this
          },
          directives: [{
            name: 'droppable'
          }],
          'class': {
            'soul-drop-panel': true
          },
          nativeOn: {
            click: function (e) {
              store.commit('dragModule/showEditorPanel', e)
            }
          },
        }, context.children.map(function (child) {

          return child.render(createElement)
        }))
      }
    }
    this.desc = '拖拽安置面板';
    this.initScript = false
    this.maxUid = 16
    this.model = {
      style: {
        desc: 'value',
        type: 'json',
        value: {}
      }
    };
    this.name = 'DropPanel'
    this.nickname = 'DropPanel'
    this.render = function (createElement) {
      const context = this
      const store = createElement.store
      if (!context.initScript) {
        context.initScript = true
      }
      return createElement(
        'Div',
        {
          style: context.model.style.value,
          domProps: {
            controlConfig: this
          },
          // directives: [{
          //   name: 'droppable'
          // }],
          'class': {
            'soul-drop-panel': true
          },
          nativeOn: {
            click: function (e) {
              store.commit('dragModule/showEditorPanel', e)
            }
          },
        },
        context.children.map(function (child) {
          return child.render(createElement)
        })
    )
    }
    ;
    this.renderProd = '';
    this.script = function () {

    };
    this.template = "`<div {model} {slotName}>{slot}</div>`";
    this.type = 'Div';
    this.uid = '12';
  }
}
