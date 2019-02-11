<template>
  <ul class="task-list" v-if="tasks.length">
    <li v-for="(task, index) in tasks" :key="index">
      {{task}}
    </li>
  </ul>
  <div class="task-list-empty" v-else>
    Once you add tasks, they will show up here.
  </div>
</template>

<script>
export default {
  computed: {
    ...Vuex.mapState({
      tasks: 'tasks'
    }),
    ...Vuex.mapGetters(['tasksWithStatus'])
  }
};
</script>

<style lang="scss">
@import '../styles/variables';

.task-list {

}
.task-list-empty {
  padding: 1.5rem;
  text-align: center;
  color: $color-text-muted;
}
</style>