// séparer le state en plusieurs morceaux, plusieurs "tiroirs" pour mieux s'y
// retrouver
// createStore ne peut pas prendre en argument plusieurs reducers, je les combine
// avec combineReducers pour lui fournir un reducer qui contient tout
import { combineReducers } from 'redux';

// on importe tous les reducers
import recipesReducer from './Orecipes/recipes';
import userReducer from './Orecipes/user';
import colorsReduce from './GradientPicker/colors'

// on définit le reducer principal, qui combine les autres
const rootReducer = combineReducers({
  // nomDuTiroir: reducer qui gère cette partie du state
  recipes: recipesReducer,
  user: userReducer,
  colors: colorsReduce,
});

// pour accéder au state défini dans le reducer 'recipesReducer', il faudra que je
// descende dans le tiroir 'recipes' => state.recipes.xxxxx

export default rootReducer;
