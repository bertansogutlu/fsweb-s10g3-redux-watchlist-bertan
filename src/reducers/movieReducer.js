import { movies } from '../movies'

const initialState = {
  movies: movies,
  sira: 0
}

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case "basaDon":
      return {
        ...state,
        sira: 0
      };
    case "onceki":
      return {
        ...state,
        sira: state.sira > 0 ? state.sira - 1 : state.sira
      };
    case "siradaki":
      return {
        ...state,
        sira: state.sira + 1
      };
    default:
      return state;
  }
}

export default movieReducer;