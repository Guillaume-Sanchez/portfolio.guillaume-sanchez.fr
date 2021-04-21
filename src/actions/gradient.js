import { randomHexColor } from '../components/GradientPicker/utils';

// === action types
// on stocke le type dans une variable => éviter les fautes de frappe et donc une
// incohérence entre dispatch et reducer
export const RANDOM_FIRST_COLOR = 'RANDOM_FIRST_COLOR';
export const RANDOM_LAST_COLOR = 'RANDOM_LAST_COLOR';
// export const DIRECTION_TO_LEFT = 'DIRECTION_TO_LEFT';
// export const DIRECTION_TO_RIGHT = 'DIRECTION_TO_RIGHT';
// export const DIRECTION_TO_45 = 'DIRECTION_TO_45';
// on mutualise :
export const CHANGE_DIRECTION = 'CHANGE_DIRECTION';


// === action creators
// fonction qui retourne une action d'un type donné, avec le payload nécessaire

// export const randomLastColor = (newColor) => {
//   return {
//     type: RANDOM_LAST_COLOR,
//     color: newColor,
//   };
// };

// une seule instruction qui est un return => enlever return et accolades
// si on retourne un objet => rajouter des parenthèses (pour ne pas confondre avec
// le corps de la fonction)
export const randomLastColor = () => ({
  type: RANDOM_LAST_COLOR,
  color: randomHexColor(),
});

export const randomFirstColor = () => ({
  type: RANDOM_FIRST_COLOR,
  color: randomHexColor(),
});

export const changeDirection = (direction) => ({
  type: CHANGE_DIRECTION,
  direction,
  /* strictement équivalent à direction: direction, */
});
