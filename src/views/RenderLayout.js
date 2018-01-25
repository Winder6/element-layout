import LayoutData from '../uiLib/LayoutData'

export default {
  name:'RenderLayout',
  props:{
      components:{
        type:Array,
        default:[]
      }
  },
  render(h) {
    const myLayoutData = new LayoutData;
    // myLayoutData.children = JSON.parse(JSON.stringify(this.components))
    myLayoutData.children.push(...this.components);
    return myLayoutData.render(h)
    // return createElement('el-button',  '主要按钮');
  }
}
