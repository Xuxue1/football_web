<template>
  <el-form ref="form" :model="form" label-width="80px" label-position="left">
    <div class="block">
      <span class="">日期</span>
      <el-date-picker
        v-model="value7"
        type="datetimerange"
        align="center"
        placeholder="日期"
        format='yyyy-MM-dd HH:mm:ss'
        :picker-options="pickerOptions"
        class="date-picker">
      </el-date-picker>
    </div>

    <div class="leagle">
      <el-form-item label="联赛">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
    </div>

    <div class="leagle">
      <el-form-item label="主队">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
    </div>

    <div class="leagle">
      <el-form-item label="客队">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
    </div>

    <div class="leagle">
      <el-form-item label="主队得分">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
    </div>

    <div class="leagle">
      <el-form-item label="客队公司">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
    </div>

    <div class="leagle">
      <el-form-item label="轮次">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
    </div>

    <div class="leagle">
      <el-form-item label="公司">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
    </div>

    <div class="leagle">
      <el-form-item label="胜">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
    </div>

    <div class="leagle">
      <el-form-item label="平">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
    </div>

    <div class="leagle">
      <el-form-item label="负">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
    </div>
  </el-form>
</template>
<script>
  export default {
    data() {
      return {
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
        value7: '',
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
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      onClick() {
        console.log(this.value7[0] instanceof Date);
        console.log("Hello!" + (JSON.stringify(this.value7)))
      }
    }
  }

</script>

<style>
  .block{
    float: left;
  }
  .leagle{
    float: left;
  }
</style>
