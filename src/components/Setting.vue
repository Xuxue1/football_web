<template>
  <el-form ref="form" label-width="80px" label-position="left" class ="my-form">
    <div class="block">
        <el-form-item label="日期">
            <el-date-picker
                v-model="date"
                type="datetimerange"
                placeholder="日期"
                format='yyyy-MM-dd HH:mm:ss'
                :picker-options="pickerOptions"
                class="date-picker">
            </el-date-picker>
        </el-form-item>
    </div>

    <div class="leagle">
      <el-form-item label="联赛">
        <el-input v-model="leagle_"></el-input>
      </el-form-item>
    </div>

    <div>
      <el-form-item label="主队">
        <el-input v-model="mteam_"></el-input>
      </el-form-item>
    </div>

    <div class="leagle">
      <el-form-item label="客队">
        <el-input v-model="oteam_"></el-input>
      </el-form-item>
    </div>

    <div class="leagle">
      <el-form-item label="主队得分">
        <el-input v-model="mscore_"></el-input>
      </el-form-item>
    </div>

    <div class="leagle">
      <el-form-item label="客队得分">
        <el-input v-model="oscore_"></el-input>
      </el-form-item>
    </div>

    <div class="leagle">
      <el-form-item label="轮次">
        <el-input v-model="turn_"></el-input>
      </el-form-item>
    </div>

    <div class="leagle">
      <el-form-item label="公司">
        <el-input v-model="company_"></el-input>
      </el-form-item>
    </div>

    <div class="leagle">
      <el-form-item label="胜">
        <el-input v-model="modds_"></el-input>
      </el-form-item>
    </div>

    <div class="leagle">
      <el-form-item label="平">
        <el-input v-model="podds_"></el-input>
      </el-form-item>
    </div>

    <div class="leagle">
      <el-form-item label="负">
        <el-input v-model="oodds_"></el-input>
      </el-form-item>
    </div>
    <el-form-item>
      <el-button type="primary" @click="submit()">提交</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
  import { mapGetters } from 'vuex'

  export default {
    data() {
      return {
        date: '',
        pickerOptions: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          },
            {
              text: '最近一个月',
              onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                picker.$emit('pick', [start, end]);
              }
            }, {
              text: '最近三个月',
              onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                picker.$emit('pick', [start, end]);
              }
            }]
        },
        startTime_: '',
        endTime_ : '',
        leagle_:'',
        mteam_: '',
        oteam_:'',
        mscore_:'',
        oscore_:'',
        turn_:'',
        company_:'',
        modds_:'',
        podds_:'',
        oodds_:''
      }
    },
    created(){
        this.startTime_ =  this.startTime;
        this.endTime_  = this.endTime;
        this.leagle_ = this.leagle;
        this.mteam_ = this.mteam;
        this.oteam_ = this.oteam;
        this.mscore_ = this.mscore;
        this.oscore_ = this.oscore;
        this.turn_ = this.turn;
        this.company_ = this.company;
        this.modds_ = this.modds;
        this.podds_ = this.podds;
        this.oodds_ = this.oodds;
        var now = new Date();
        var start = new Date(now.getTime() - 7 * 24 * 3600 * 1000);
        this.date = [start,now]

    },

    methods: {
      submit(){
        console.log("date ----"+this.date);
        if((this.date instanceof Array) && this.date.length === 2){
          this.startTime_ = this.formate(this.date[0]);
          this.endTime_ = this.formate(this.date[1]);
        }
        this.$store.commit('MODIFY_SETTING',this.createRequestSettings())
      },
      createRequestSettings(){
        let settings={};
        console.log("start "+this.startTime_);
        settings.startTime = this.startTime_;
        settings.endTime = this.endTime_;
        settings.leagle = this.leagle_;
        settings.mteam = this.mteam_;
        settings.oteam = this.oteam_;
        settings.mscore = this.mscore_;
        settings.turn = this.turn_;
        settings.company = this.company_;
        settings.modds = this.modds_;
        settings.podds = this.podds_;
        settings.oodds = this.oodds_;
        settings.h = this.h;
        return settings
      },
      formate(date){
        let fmt = 'yyyy-MM-dd hh:mm:ss';
        let o = {
          "M+" : date.getMonth()+1,                 //月份
          "d+" : date.getDate(),                    //日
          "h+" : date.getHours(),                   //小时
          "m+" : date.getMinutes(),                 //分
          "s+" : date.getSeconds(),                 //秒
          "q+" : Math.floor((date.getMonth()+3)/3), //季度
          "S"  : date.getMilliseconds()             //毫秒
        };
        if(/(y+)/.test(fmt))
          fmt=fmt.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length));
        for(let k in o)
          if(new RegExp("("+ k +")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
        return fmt;
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
    .el-date-editor--datetimerange.el-input{
        width: 100%
    }
  .my-form{
    width: 70%;
    position: relative;
    margin: 0 auto;
  }
</style>

