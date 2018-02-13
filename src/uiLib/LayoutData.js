
export default class LayoutData {
  constructor(id) {
    this.uid=id
    this.children = []
    this.desc = '拖拽安置面板';
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
          domProps: {
            controlConfig: this
          },
          directives: [{
            name: 'dropable',
            value: context
          }],
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
  }
}
