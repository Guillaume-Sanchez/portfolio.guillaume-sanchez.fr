import axios from 'axios';

import { FETCH_RECIPES, saveRecipes } from 'src/actions/recipes';

const recipesMiddleware = (store) => (next) => (action) => {
  
  switch (action.type) {
    case FETCH_RECIPES:

      axios.get('http://localhost:3001/recipes')
        .then((response) => {
          store.dispatch(saveRecipes(response.data));
          console.log(response.data)
        })
        .catch((error) => {
          console.warn(error);
        });

      next(action);
      break;

    default:

      next(action);
  }
};
export default recipesMiddleware;
























