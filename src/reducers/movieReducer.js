import { movies } from '../movies'

const initialState = {
  movies: movies,
  sira: 0
}

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Siradaki":
      return {
      ...state,
      sira: state.sira + 1
      };
    default:
      return state;
  }
}

export default movieReducer;