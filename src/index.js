import './styles/reset';
import './styles/variables';
import './styles/util';

import Vue from 'vue';
import store from './store';
import App from './App';

new Vue({
  el: '#app',
  render: h => h(App),
  store
});