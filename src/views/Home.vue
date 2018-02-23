<template>
  <el-container style="height: 100%;">
    <el-header class="header-box">
      <el-button type="default" @click="showCode">code</el-button>
      <el-button type="default" @click="hello">hello</el-button>
    </el-header>
    <el-container class="main-box">
      <el-aside class="ul-lib-box-container" width="250px">
        <ui-lib-box></ui-lib-box>
      </el-aside>
      <el-main>
        <work-box></work-box>
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
    <ul class="el-dropdown-menu el-popper right-click-menu"
        :style="rightClickMenuData.style">
      <li class="el-dropdown-menu__item" @click="deleteComponent">删除</li>
    </ul>
  </el-container>
</template>

<script>
  import UiLibBox from './UiLibBox'
  import WorkBox from './WorkBox'
  import AttrEditor from './AttrEditor.vue'
  import Test from './Test.js'
  import {mapGetters, mapMutations} from 'vuex'
  import {findComponentByUid} from "../util"

  export default {
    name: "",
    data() {
      return {
        codeDialogVisible: false,
      }
    },
    computed: {
      ...mapGetters(['components','code','rightClickMenuData']),
    },
    methods: {
      showCode() {
        this.$store.dispatch('convertToCode');
        this.codeDialogVisible = true


        // let data=this.components[0];
        // let attr = 'type=primary';
        // let code = data.template;
        // console.log(code)
      },
      hello() {
        console.log(this.$refs.test)
      },
      deleteComponent(){
        // console.log(this.components);
        let uid = this.rightClickMenuData.uid;
        let deleteItem = findComponentByUid(this.components,uid);
        let patentItem = findComponentByUid(this.components,deleteItem.pid)
        console.log(deleteItem,patentItem);
        let index = patentItem.children.indexOf(deleteItem);
        patentItem.children.splice(index, 1);
        this.$store.commit('hideRightClickMenu')
      },
    },
    components: {
      UiLibBox,
      AttrEditor,
      WorkBox,
      Test
    }
  }
</script>

<style scoped>
  .header-box {
    color: #333;
    text-align: center;
    line-height: 60px;
    border-bottom: 1px solid #eee;
    /*box-shadow: 0 2px 8px #f0f1f2;*/
  }

  .main-box {
    background: #f9fbfb;
  }

  .ul-lib-box-container {
    border-right: 1px solid #eee;
    padding: 10px;
  }

  .attr-editor-container {
    border-left: 1px solid #eee;
    padding: 10px;
  }

  .el-main {
    padding: 15px;
    color: #333;
  }

  .right-click-menu{
    display: none;
    position: absolute;
    z-index: 10001;
  }
</style>
