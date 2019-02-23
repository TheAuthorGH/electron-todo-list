<template>
  <form class="task-filters">
    <input
      v-model.trim="taskFilters.searchQuery"
      placeholder="Search..."
    />
  </form>
</template>

<script>
export default {
  computed: {
    ...Vuex.mapState({
      taskFilters: 'taskFilters'
    })
  }
};
</script>

<style lang="scss">
.task-filters {
  display: flex;
  input {
    background-color: white;
    margin: 0.5rem;
    padding: 0.5rem;
    width: 100%;
  }
}
</style>
