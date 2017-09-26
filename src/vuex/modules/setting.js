/**
 *
 * @type {{}}
 */

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




export default {
  state
}






