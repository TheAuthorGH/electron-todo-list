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
  justify-content: flex-end;
  padding: 0.5rem;
  button {
    width: 2rem;
    height: 2rem;
    color: white;
    border-radius: 50%;
    &.task-add {
      background-color: #4A4;
      &:hover {
        background-color: #6C6;
      }
    }
  }
}
</style>
