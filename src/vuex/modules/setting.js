/**
 *
 * @type {{}}
 */

import * as types from './../types'

var now = new Date();
var start = new Date(now.getTime() - 7 * 24 * 3600 * 1000);

const formate = date =>{
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
};

const state = {
  startTime:formate(start),
  endTime:formate(now),
  leagle:'',
  mteam:'',
  oteam:'',
  mscore:'',
  oscore:'',
  turn:'',
  company:'',
  modds:'',
  podds:'',
  oodds:'',
  inited:false,
};

const getters = {
  startTime: state=>state.startTime,
  endTime: state=>state.endTime,
  leagle: state=>state.leagle,
  mteam: state=>state.mteam,
  oteam: state=>state.oteam,
  mscore: state=>state.mscore,
  oscore: state=>state.oscore,
  turn: state=>state.turn,
  company: state=>state.company,
  modds: state=>state.modds,
  podds: state=>state.podds,
  oodds: state=>state.oodds,
  inited: state=>state.inited
};

const mutations = {
  [types.MODIFY_SETTING](state,settings){
    console.log("recive "+JSON.stringify(settings));
    state.inited = true;
    state.endTime = settings.endTime;
    state.startTime = settings.startTime;
    state.leagle = settings.leagle;
    state.mteam = settings.mteam;
    state.oteam = settings.oteam;
    state.mscore = settings.mscore;
    state.oscore = settings.oscore;
    state.turn = settings.turn;
    state.company = settings.company;
    state.modds = settings.modds;
    state.podds = settings.podds
  }
};

const actions={};


export default {
  state,
  getters,
  actions,
  mutations
}





