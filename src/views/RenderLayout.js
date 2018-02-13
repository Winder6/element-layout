export default {
  name:'RenderLayout',
  props:{
      components:{
        type:Object,
        default:{}
      }
  },
  render(h) {
    console.log(this.components)
    return this.components.render(h)
  }
}
