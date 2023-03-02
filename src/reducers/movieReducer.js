import { movies } from '../movies'

const initialState = {
    movies: movies,
    sira: 0
  }

const movieReducer = (state = initialState, action) => {
    return {
        state
      }
}

export default movieReducer;