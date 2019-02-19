<template>
  <div id="app">
    <section class="sidebar">
      <task-controls/>
      <task-filters/>
      <task-list/>
    </section>
    <main>
      <welcome-screen v-if="tasks.length < 1"/>
      <task-viewer/>
    </main>
  </div>
</template>

<script>
import TaskControls from './components/TaskControls';
import TaskFilters from './components/TaskFilters';
import TaskList from './components/TaskList';
import WelcomeScreen from './components/WelcomeScreen';

export default {
  components: {
    TaskControls,
    TaskFilters,
    TaskList,
    WelcomeScreen
  },
  computed: {
    ...Vuex.mapState({
      tasks: 'tasks'
    })
  }
};
</script>

<style lang="scss">
@import './styles/variables';

body {
  display: flex;
  min-height: 100vh;
  min-width: 100vw;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

#app {
  height: auto;
  width: 100%;
  display: flex;
  .sidebar {
    background-color: $color-bg-grey;
    width: 18rem;
    display: flex;
    flex-direction: column;
  }
  main {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    p {
      margin: 0.5rem 0;
    }
  }

  button, a {
    cursor: pointer;
  }
}
</style>