<template>
  <div class="task-list" v-if="tasks.length">
    <input v-model="searchQuery" class="task-list-search" placeholder="Search..."/>
    <ul class="task-list-results">
      <li class="task-snippet" v-for="(task, index) in displayTasks" :key="index">
        {{task.description}}
      </li>
    </ul>
  </div>
  <div class="task-list-empty" v-else>
    Once you add tasks, they will show up here.
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: null
    };
  },
  computed: {
    ...Vuex.mapState({
      tasks: 'tasks'
    }),
    ...Vuex.mapGetters(['tasksWithStatus']),
    displayTasks() {
      return this.searchQuery
        ? this.tasks.filter(task => task.description.includes(this.searchQuery))
        : this.tasks;
    }
  }
};
</script>

<style lang="scss">
@import '../styles/variables';

.task-list {
  display: flex;
  flex-direction: column;
  .task-snippet {
    padding: 0.5rem;
  }
}
.task-list-empty {
  padding: 1.5rem;
  text-align: center;
  color: $color-text-muted;
}
</style>