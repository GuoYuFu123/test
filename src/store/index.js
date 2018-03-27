import Vuex from 'vuex'
import Vue from 'vue'

import list from './modules/list'
import detail from './modules/detail'

Vue.use(Vuex)

const store = new Vuex.Store({
  'modules': {
    list,
    detail
  }
})

export default store