/*@flow*/
<template>
    <div class="search-box">
      <el-input v-model="input" size="large" placeholder="请输入内容" icon="search" class="search-input">
        <el-button slot="append" icon="search" @click="click"></el-button>
      </el-input>
      <el-button type="text" @click="dialogFormVisible = true" class="setting-button">设置</el-button>
      <div class="dialog">
        <el-dialog title="" :visible.sync="dialogFormVisible">
          <Setting></Setting>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
          </div>
        </el-dialog>
      </div>
    </div>
</template>

<script>
  import Setting from '../components/Setting.vue'
  import { mapGetters } from 'vuex'

  export default {
    components: {
      Setting
    },
    data() {
      return {
        dialogFormVisible:false,
        input: '',
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'
      }
    },
    computed: {
      ...mapGetters({
        startTime: 'startTime',
        endTime: 'endTime',
        leagle:'leagle',
        mteam:'mteam',
        oteam:'oteam',
        mscore:'mscore',
        oscore:'oscore',
        turn:'turn',
        company:'company',
        modds:'modds',
        podds:'podds',
        oodds:'oodds',
      })
    },
    methods:{
      click(){
        this.$router.push('/search')
      }

    }
  }
</script>

<style>
  .search-box{
      width: 80%;
      margin: 0 auto;
      margin-top: 15%;
      position: relative;
  }

  .search-input{
    width: 70%;
    position: relative;
  }

  setting-button{
    float: left;
    left: auto;
  }
</style>
