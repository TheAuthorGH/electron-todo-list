import Vue from 'vue';
import Vuex from 'vuex';

window.Vuex = Vuex;
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [],
    selectedTask: null,
    taskFilters: {
      searchQuery: null
    }
  },
  mutations: {
    createTask(state) {
      const task = {
        status: 'todo',
        description: 'Lorem ipsum dolor sit amet',
        creationDate: new Date()
      };
      state.tasks.push(task);
      return task;
    },
    clearTasks(state) {
      state.tasks = [];
    },
    setSelectedTask(state, task) {
      state.selectedTask = task;
    }
  },
  getters: {
    filteredTasks(state) {
      const filters = state.taskFilters;
      if(filters.searchQuery)
        return state.tasks.filter(task => task.description.toLowerCase().includes(filters.searchQuery.toLowerCase()));
      else
        return state.tasks;
    }
  }
});