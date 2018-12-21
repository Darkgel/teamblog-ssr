// import Vue from 'vue';
// import trim from '~plugins/filters/trim'

// const filters = {
//   trim
// }

// Object.keys(filters).forEach(key => {
//   Vue.filter(key, filters[key])
// })

import Vue from 'vue';
import capitalize from './filters/capitalize.js';
import dateFormat from './filters/dateFormat.js';

// Vue.filter('capitalize', capitalize);
// Vue.filter('dateFormat', dateFormat);