import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import recipesMiddleware from '../middlewares/recipesMiddleware';
import userMiddleware from '../middlewares/userMiddleware';

import reducer from 'src/reducers';

// on combine devTools avec les middlewares
const enhancers = composeWithDevTools(
  applyMiddleware(
    recipesMiddleware,
    userMiddleware,
    // ... d'autres middlewares
  ),
);

const store = createStore(
  // reducer
  reducer,
  // enhancer
  enhancers,
);

export default store;