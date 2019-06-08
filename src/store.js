import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bookerSelection: {
      selectedPort: {
        from: '',
        to: ''
      },
      dates: {
        depature: '',
        arrival: ''
      },
      selectedPaxTypes: {
      },
      selectedCabinType: ''
    }
  },
  mutations: {
    SelectPort (direction, portCode) {
      this.bookerSelection.selectPort[direction] = portCode
    },
    selectDates (dates) {
      this.bookerSelection.Dates = dates
    }
  },
  actions: {

  }
})
