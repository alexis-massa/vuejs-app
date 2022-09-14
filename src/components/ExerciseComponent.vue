<template>

  <div class="container">
    <table class="table table-striped">
      <thead>
        <th>id</th>
        <th>title</th>
        <th>description</th>
      </thead>
      <tbody>
        <tr v-for="exercise in exercises" v-bind:key="exercise.id">
          <td>{{ exercise.id }}</td>
          <td>{{ exercise.title }}</td>
          <td>{{ exercise.description }}</td>
        </tr>
      </tbody>
    </table>
  </div>

</template>

<script lang="js">
import ExerciseService from '@/services/ExerciseService';

export default {
  name: 'ExerciseComponent',
  data() {
    return {
      exercises: []
    }
  },
  methods: {
    getExercises() {
      ExerciseService.getExercises().then((res) => { this.exercises = res.data });
    }
  },
  created() {
    this.getExercises();
  }
}


</script>

<style scoped lang="scss">
.exercise-component {}
</style>
