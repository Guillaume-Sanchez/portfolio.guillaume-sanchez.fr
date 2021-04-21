import {
  RANDOM_LAST_COLOR,
  RANDOM_FIRST_COLOR,
  CHANGE_DIRECTION,
} from 'src/actions/gradient';

const initialState = {
  firstColor: '#e367a4',
  lastColor: '#48b1f3',
  direction: '90deg',
  nbColors: 0,
};

// reducer : "entonnoir" qui fournit un nouvel état à partir de l'état actuel
// et d'une action (intention) à appliquer sur l'état.
// reducer : fonction qui prend en paramètre :
// - l'état actuel
// - l'action à appliquer
// et qui retourne le nouvel état

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case CHANGE_DIRECTION:
      return {
        ...state,
        direction: action.direction,
      };

    // je veux traduire l'intention en un traitement
    case RANDOM_FIRST_COLOR:
      // je crée une copie du state pour être sûr de ne pas le modifier directement,
      // et je vais appliquer les modifications sur cette copie
      return {
        ...state,
        nbColors: state.nbColors + 1,
        firstColor: action.color,
      };

      // équivalent à
      // return {
      //   firstColor: state.firstColor,
      //   lastColor: state.lastColor,
      //   nbColors: state.nbColors,
      //   direction: state.direction,
      //   nbColors: state.nbColors + 1,
      //   firstColor: action.color
      // };
      // => si une propriété est déclarée 2 fois, c'est la dernière valeur qui est
      // prise en compte


    case RANDOM_LAST_COLOR:
      return {
        ...state,
        nbColors: state.nbColors + 1,
        lastColor: action.color,
      };

    default:
      return state;
  }
}

export default reducer;

// valeur par défaut pour les paramètres d'une fonction
// si on appelle la fonction sans fournir de valeur, utilisation de la valeur par
// défaut
// reducer(state1) => va utiliser {} pour le paramètre action
// reducer() => va utiliser initialState pour state, {} pour action

// le store va appeler reducer(), sans arguments, pour récupérer le state initial
