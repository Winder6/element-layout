<template>
    <div class="attr-editor-box">
      <h4>属性设置：{{editingAttr.name}}</h4>
      <el-form label-position="left" ref="form" :model="form" label-width="70px" size="small">
        <div v-for="(config, index) in editingAttr.attr">
          <el-form-item  v-if="config.type === 'text'" :label="config.name">
            <el-input  v-model="config.value"></el-input>
          </el-form-item>
          <el-form-item  v-if="config.type === 'select'" :label="config.name">
            <el-select v-model="config.value">
              <el-option v-for="(item,index) in config.items" :key="index" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </el-form-item>
        </div>
      </el-form>
    </div>
</template>

<script>
    export default {
        name: "",
        data(){
          return {
            form:{
              name:''
            }
          }
        },
        computed:{
          editingAttr:{
            get(){
              return this.$store.state.editingAttr
            },
            set(){
              console.log('haha')
            }
          }
        },
      methods:{
      },
      watch:{
          // editingAttr(v){
          //   this.editingAttr=v;
          //
          // }
      }
    }
</script>

<style lang="less" type="text/less">
    .attr-editor-box{
        h4{
          line-height: 60px;
          margin: 0 0 20px 0;
          border-bottom: 1px solid #ddd;
        }
      .el-input__inner{
        background: #f4f4f4 !important;
      }
    }

</style>
