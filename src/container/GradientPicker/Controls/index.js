/* eslint-disable max-len */
/* eslint linebreak-style: ["error", "windows"] */

// connect : fonction qui permet de créer l'assistant d'un composant pour faire le
// lien avec le store
import { connect } from 'react-redux';

import { randomFirstColor, randomLastColor } from 'src/actions/gradient';

// === on importe le composant de présentation
import Controls from 'src/components/GradientPicker/Controls';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le store
// eslint-disable-next-line arrow-body-style
const mapStateToProps = (state) => {
  // on retourne un objet qui va remplir les props du composant de présentation
  return {
    // nom de la prop à remplir: élément à récupérer dans le state
  };
};

// === mapDispatchToProps
// si j'ai besoin de modifier le store
// paramètre dispatch : référence vers store.dispatch
// eslint-disable-next-line arrow-body-style
const mapDispatchToProps = (dispatch) => {
  return {
    // nom de la prop à remplir: callback qui dispatch l'action
    randomColorFirst: () => {
      const action = randomFirstColor();
      dispatch(action);
    },
    randomColorLast: () => {
      dispatch(randomLastColor());
    },
  };
};

// === création du composant container (assistant du composant de présentation, qui
// sert d'intermédiaire pour l'accès au store)

// connect retourne une fonction qui permet de créer un assistant
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Controls);
