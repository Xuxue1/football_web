/**
 * Created by zhaif on 2017/7/22.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import settings from './modules/setting'



Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    settings
  }
})
