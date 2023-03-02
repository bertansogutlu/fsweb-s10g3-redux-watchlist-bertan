

const initialState = {
  favMovies: []
}

const listReducer = (state = initialState, action) => {

  switch (action.type) {
    case "ekle":
       return {
        ...state,
        favMovies: [...state.favMovies, action.payload]
       };

    case "cikar":
     return {
      ...state,
      favMovies: state.favMovies.filter(movie => movie.id !== action.payload )
     };
    default:
      return state;
  }
}

export default listReducer;