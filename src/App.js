
import { Switch, Route, NavLink } from "react-router-dom";
import Movie from "./components/Movie";
import FavMovie from "./components/FavMovie";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const movies = useSelector(store => store.movieReducer.movies);
  const sira = useSelector(store => store.movieReducer.sira);
  const movie = movies[sira];

  return (
    <div className="wrapper max-w-2xl mx-auto">
      <nav className="flex text-2xl pb-6 pt-8 gap-2 justify-center">
        <NavLink to="/" exact className="py-3 px-6 " activeClassName="bg-white shadow-sm text-blue-600">
          Filmler
        </NavLink>
        <NavLink to="/listem" className="py-3 px-6 " activeClassName="bg-white shadow-sm text-blue-600">
          Listem
        </NavLink>
      </nav>
      <Switch>
        <Route exact path="/">
          <Movie />

          <div className="flex gap-3 justify-end py-3">
            <button
              onClick={() => dispatch({ type: "siradaki" })}
              className="select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500"
            >
              Sıradaki
            </button>
            <button className="select-none px-4 py-2 bg-blue-700 hover:bg-blue-600 text-white" onClick={() => dispatch({ type: "ekle", payload: movie })}>
              Listeme ekle
            </button>
          </div>
        </Route>

        <Route path="/listem">
          <div>
            <FavMovie />
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
