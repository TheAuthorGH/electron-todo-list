<template>
  <div class="task-list" v-if="filteredTasks.length">
    <ul class="task-list-results">
      <li class="task-snippet" v-for="(task, index) in filteredTasks" :key="index">
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
    ...Vuex.mapGetters(['filteredTasks'])
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