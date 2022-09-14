import axios from 'axios'

const EXERCISE_API_BASE_URL = 'http://localhost:8080/api/exercises'

class ExerciseService {
    getExercises() {
        return axios.get(EXERCISE_API_BASE_URL);
    }
}

export default new ExerciseService()