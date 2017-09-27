/**
 *
 * @type {{}}
 */

import * as types from './../types'

const state = {
  startTime:'',
  endTime:'',
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





