<template>
  <section class="task-viewer" v-if="selectedTask">

  </section>
</template>

<script>
export default {
  computed: {
    ...Vuex.mapState({
      selectedTask: 'selectedTask'
    })
  }
};
</script>

<style>
.task-viewer {

}
</style>
