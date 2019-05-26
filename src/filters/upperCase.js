import Vue from 'vue'

Vue.filter('upperCase', value => {
  return value.toUpperCase()
}
)
