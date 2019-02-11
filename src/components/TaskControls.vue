<template>
  <section class="task-controls">
    <button class="task-add" @click="taskAdded()">
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
    }
  }
};
</script>

<style lang="scss">
.task-controls {
  display: flex;
  width: auto;
  button {
    padding: 0.5rem;
    color: white;
    &.task-add {
      background-color: #4A4;
    }
  }
}
</style>
