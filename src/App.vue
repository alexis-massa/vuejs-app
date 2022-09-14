<template>
  <div class="app">
    <ExerciseComponent />
  </div>
</template>

<script>
import ExerciseComponent from './components/ExerciseComponent.vue';

export default {
  name: 'App',
  components: {
    ExerciseComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
