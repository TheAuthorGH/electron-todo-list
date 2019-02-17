import Vue from 'vue';
import Vuex from 'vuex';

window.Vuex = Vuex;
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [],
    currentTask: null
  },
  mutations: {
    createTask(state) {
      const task = {
        status: 'todo',
        description: 'Lorem ipsum dolor sit amet'
      };
      state.tasks.push(task);
      return task;
    }
  },
  getters: {
    tasksWithStatus: state => status => state.tasks.filter(task => task.status === status)
  }
});