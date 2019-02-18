<template>
  <section class="task-controls">
    <button class="tasks-clear" title="Clear all tasks" @click="tasksCleared()">
      <span class="fa fa-trash fa-fw"></span>
    </button>
    <button class="task-add" title="Add Task" @click="taskAdded()">
      <span class="fa fa-plus fa-fw"></span>
    </button>
  </section>
</template>

<script>
export default {
  computed: {
    ...Vuex.mapState({
      tasks: 'tasks'
    })
  },
  methods: {
    taskAdded() {
      this.$store.commit('createTask');
    },
    tasksCleared() {
      this.$store.commit('clearTasks');
    }
  }
};
</script>

<style lang="scss">
.task-controls {
  display: flex;
  width: auto;
  justify-content: flex-end;
  padding: 0.5rem;
  button {
    width: 1.8rem;
    height: 1.8rem;
    color: white;
    border-radius: 3px;
    margin-left: 0.5rem;
    &.task-add {
      background-color: #4A4;
      &:hover {
        background-color: #6C6;
      }
    }
    &.tasks-clear {
      background-color: #A44;
      &:hover {
        background-color: #C66;
      }
    }
  }
}
</style>
