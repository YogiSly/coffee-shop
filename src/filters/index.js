import Vue from 'vue'

Vue.filter('addCurency', (value) => {
  return value + "$"
})