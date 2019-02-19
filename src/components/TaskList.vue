<template>
  <section class="task-list" v-if="filteredTasks.length">
    <ul class="task-list-results">
      <task-list-item
        v-for="(task, index) in filteredTasks"
        :key="index"
        :task="task"
      />
    </ul>
  </section>
  <section class="task-list-empty" v-else>
    Once you add tasks, they will show up here.
  </section>
</template>

<script>
import TaskListItem from './TaskListItem';

export default {
  components: {
    TaskListItem
  },
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
}
.task-list-empty {
  padding: 1.5rem;
  text-align: center;
  color: $color-text-muted;
}
</style>