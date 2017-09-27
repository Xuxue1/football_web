<template>
  <div>
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
    <div class="result-table">
      <el-table
        :data="tableData"
        border>
        <el-table-column
          type="index"
          label="序号"
          width="80">
        </el-table-column>
        <el-table-column
          prop="startTime"
          label="开赛日期"
          sortable
          width="170">
        </el-table-column>
        <el-table-column
          prop="league"
          label="联赛"
          width="150">
        </el-table-column>
        <el-table-column
          prop="turn"
          label="轮次"
          width:="100">
        </el-table-column>
        <el-table-column
          prop="company"
          label="公司"
          width="150">
        </el-table-column>
        <el-table-column
          prop="mTeam"
          label="主队"
          width="150">
        </el-table-column>
        <el-table-column
          prop="score"
          label="比分"
          width="70">
        </el-table-column>
        <el-table-column
          prop="oTeam"
          label="客队"
          width="150">
        </el-table-column>
        <el-table-column
          prop="modds"
          label="主"
          width="70">
        </el-table-column>
        <el-table-column
          prop="podds"
          label="平"
          width="70">
        </el-table-column>
        <el-table-column
          prop="oodds"
          label="客"
          width="70">
        </el-table-column>
      </el-table>
    </div>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
      </el-pagination>
    </div>
  </div>

</template>

<script>
  import Setting from '../components/Setting.vue'
  import axios from 'axios'
  import store from './../vuex/store'
  import qs from 'qs'
  import { mapGetters } from 'vuex'
  axios.defaults.headers = {
    'Content-Type': 'application/x-www-form-urlencoded;application/json;charset=UTF-8',
    'X-Requested-With': 'XMLHttpRequest',
    'Accept': 'application/json'
  };
  axios.defaults.timeout = 10000;

  export default {
    components: {
      Setting
    },
    created(){
      let settings = {
        "startTime":"2017-08-01 00:00:00",
        "endTime":"2017-10-01 00:00:00"
      };
      let input  = "公司=威廉";
      let pageSize = 50;
      let pageNum = 1;
      axios.post('/football/search/query',qs.stringify({
        "settings":JSON.stringify(settings),
        "input":input,
        "pageSize":pageSize,
        "pageNum":pageNum
      })).then(response=>{
        console.log(response.data);
        this.tableData = response.data.rows.map(d=>{
            d.startTime = d.startTime.slice(0,16);
          console.log(d);
          if(d.scoreM && d.scoreO){
            d.score = d.scoreM+"-"+d.scoreO
          }else{
            d.score = '-'
          }
          return d;
        })
      });
    },
    data() {
      return {
        dialogFormVisible: false,
        tableData: [],
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
        input: '',
        setting:{}
      }
    },
    methods: {
      formatter(row, column) {
        return row.address;
      },
      filterTag(value, row) {
        return row.tag === value;
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      createRequestSettings(){
        let settings={};
        settings.startTime = this.startTime;
        settings.endTime = this.endTime;
        settings.leagle = this.leagle;
        settings.mteam = this.mteam;
        settings.oteam = this.oteam;
        settings.mscore = this.mscore;
        settings.turn = this.turn;
        settings.company = this.company;
        settings.modds = this.modds;
        settings.podds = this.podds;
        settings.oodds = this.oodds;
        return JSON.stringify(settings)
      },
      click(){
        console.log(this.createRequestSettings())
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
  }
</script>

<style>
  .search-box{
    width: 90%;
    margin: 0 auto;
    margin-top: 0px;
    position: relative;
  }

  .search-input{
    width: 80%;
    position: relative;
  }

  setting-button{
    float: left;
    left: auto;
  }
  .result-table{
    width: 90%;
    margin: 0 auto;
    margin-top: 50px;
    position: relative;
  }
</style>
