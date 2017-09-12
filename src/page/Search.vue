<template>
  <div>
    <div class="search-box">
    <el-input v-model="input" size="large" placeholder="请输入内容" icon="search" class="search-input"></el-input>
    <el-button type="text" @click="dialogFormVisible = true" class="setting-button">设置</el-button>
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
          prop="date"
          label="开赛日期"
          sortable
          width="150">
        </el-table-column>
        <el-table-column
          prop="leagle"
          label="联赛"
          width="150">
        </el-table-column>
        <el-table-column
          prop="turn"
          label="轮次"
          width:="150">
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
          prop="mOdds"
          label="主"
          width="70">
        </el-table-column>
        <el-table-column
          prop="pOdds"
          label="平"
          width="70">
        </el-table-column>
        <el-table-column
          prop="oOdds"
          label="客"
          width="70">
        </el-table-column>
      </el-table>
    </div>
    <div class="block">
      <span class="demonstration">完整功能</span>
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
  export default {
    data() {
      return {
        tableData: [{
          date: '2017-09-12 01:00',
          leagle: '瑞典甲',
          turn:'R_23',
          company:'利记sbobet',
          mTeam:'特雷勒堡',
          score:'2-1',
          oTeam:'哥德堡盖斯',
          mOdds:'1.13',
          pOdds:'17',
          oOdds:'1.7',
          tag: '公司'
        },
          {
            date: '2017-09-12 01:00',
            leagle: '瑞典甲',
            turn: 'R_23',
            company: '利记sbobet',
            mTeam:'特雷勒堡',
            score:'2-1',
            oTeam:'哥德堡盖斯',
            mOdds:'1.13',
            pOdds:'17',
            oOdds:'1.7',
            tag: '公司'
          },
          {
            date: '2017-09-12 01:00',
            leagle: '瑞典甲',
            turn: 'R_23',
            company: '利记sbobet',
            mTeam:'特雷勒堡',
            score:'2-1',
            oTeam:'哥德堡盖斯',
            mOdds:'1.13',
            pOdds:'17',
            oOdds:'1.7',
            tag: '公司'
          },
          {
            date: '2017-09-12 01:00',
            leagle: '瑞典甲',
            turn: 'R_23',
            company: '利记sbobet',
            mTeam:'特雷勒堡',
            score:'2-1',
            oTeam:'哥德堡盖斯',
            mOdds:'1.13',
            pOdds:'17',
            oOdds:'1.7',
            tag: '公司'
          },
          {
            date: '2017-09-12 01:00',
            leagle: '瑞典甲',
            turn: 'R_23',
            company: '利记sbobet',
            mTeam:'特雷勒堡',
            score:'2-1',
            oTeam:'哥德堡盖斯',
            mOdds:'1.13',
            pOdds:'17',
            oOdds:'1.7',
            tag: '公司'
          },
          {
            date: '2017-09-12 01:00',
            leagle: '瑞典甲',
            turn: 'R_23',
            company: '利记sbobet',
            mTeam:'特雷勒堡',
            score:'2-1',
            oTeam:'哥德堡盖斯',
            mOdds:'1.13',
            pOdds:'17',
            oOdds:'1.7',
            tag: '公司'
          }],
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
        input: ''
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
      }
    }
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
