<template>
  <li class="task-list-item" :class="classes" @click="taskSelected()">
    {{task.description}}
  </li>
</template>

<script>
export default {
  props: {
    task: {type: Object, required: true}
  },
  computed: {
    classes() {
      return [`task-${this.task.status}`];
    }
  },
  methods: {
    taskSelected() {
      this.$store.commit('setSelectedTask', this.task);
    }
  }
}
</script>

<style lang="scss">
.task-list-item {
  padding: 0.5rem;
}
</style>
