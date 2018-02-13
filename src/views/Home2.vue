<template>
  <el-container style="height: 100%;background: #f5f5f5;">
    <el-container>
      <el-aside class="ul-lib-box-container" width="250px">
          <ui-lib-box></ui-lib-box>
      </el-aside>
      <el-main>
        <!--<el-button type="primary" @click="showCode">code</el-button>-->
        <!--<el-button type="primary" @click="hello">hello</el-button>-->
        <preview-box @showCode="showCode"></preview-box>
      </el-main>
      <el-aside class="attr-editor-container" width="250px">
          <attr-editor></attr-editor>
      </el-aside>
    </el-container>
    <el-dialog
      title="提示"
      :visible.sync="codeDialogVisible"
      width="80%">
      <pre contenteditable="true"><code v-highlight="code" class="html"></code></pre>
      <span slot="footer" class="dialog-footer">
    <el-button @click="codeDialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="codeDialogVisible = false">确 定</el-button>
  </span>
    </el-dialog>
  </el-container>
</template>

<script>
  import UiLibBox from './UiLibBox'
  import PreviewBox from './PreviewBox'
  import AttrEditor from './AttrEditor.vue'
  import Test from './Test.js'
  export default {
    name: "",
    data() {
      return {
          codeDialogVisible:false,

      }
    },
    computed:{
      code(){
        return this.$store.state.code
      }
    },
    methods: {
      showCode(){
        this.$store.dispatch('convertToCode');
          this.codeDialogVisible=true


        // let data=this.components[0];
        // let attr = 'type=primary';
        // let code = data.template;
        // console.log(code)
      },
      hello(){
        console.log(this.$refs.test)
      }
    },
    components: {
      UiLibBox,
      AttrEditor,
      PreviewBox,
      Test
    }
  }
</script>

<style scoped>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .ul-lib-box-container{
    padding-left: 10px;
  }

  .attr-editor-container{
    padding-right: 10px;
  }


  .el-main {
    padding: 10px;
    color: #333;
  }
</style>
