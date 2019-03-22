// import Vue from 'vue';
// import trim from '~plugins/filters/trim'

// const filters = {
//   trim
// }

// Object.keys(filters).forEach(key => {
//   Vue.filter(key, filters[key])
// })

import Vue from 'vue'
import capitalize from './filters/capitalize'
import dateFormat from './filters/dateFormat'
import parseTime from  './filters/parseTime'

// Vue.filter('capitalize', capitalize);
// Vue.filter('dateFormat', dateFormat);
// Vue.filter('parseTime', parseTime);