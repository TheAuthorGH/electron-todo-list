<template>
  <form class="task-filters">
    <input placeholder="Search..."/>
  </form>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: null
    };
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
  }
}
</style>
