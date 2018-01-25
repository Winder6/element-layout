<template>
  <el-container style="height: 100%;">
    <el-header>
        <el-button type="primary" @click="showCode">code</el-button>
    </el-header>
    <el-container>
      <el-aside width="250px">
          <ui-lib-box></ui-lib-box>
      </el-aside>
      <el-main>
        <preview-box></preview-box>
      </el-main>
      <el-aside width="250px">
          <attr-editor></attr-editor>
      </el-aside>
    </el-container>
    <el-dialog
      title="提示"
      :visible.sync="codeDialogVisible"
      width="80%">
      <pre contenteditable="true"><code v-highlight class="html">{{code}}</code></pre>
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

  export default {
    name: "",
    data() {
      return {
          codeDialogVisible:false
      }
    },
    computed:{
      code(){
        return this.$store.state.code
      }
    },
    methods: {
      showCode(){
        this.$store.dispatch('convertToCode')
        this.codeDialogVisible=true

        // let data=this.components[0];
        // let attr = 'type=primary';
        // let code = data.template;
        // console.log(code)
      }
    },
    components: {
      UiLibBox,
      AttrEditor,
      PreviewBox
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

  .el-aside {
    padding: 10px;
    color: #333;
  }

  .el-main {
    padding: 10px;
    background-color: #E9EEF3;
    color: #333;
  }
</style>
