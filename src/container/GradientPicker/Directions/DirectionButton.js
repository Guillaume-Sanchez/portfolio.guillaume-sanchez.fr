// connect : fonction qui permet de créer l'assistant d'un composant pour faire le
// lien avec le store
import { connect } from 'react-redux';

import { changeDirection } from 'src/actions/gradient';

// === on importe le composant de présentation
import DirectionButton from 'src/components/GradientPicker/Directions/DirectionButton';

const mapStateToProps = (state) => {
  // on retourne un objet qui va remplir les props du composant de présentation
  return {
    // nom de la prop à remplir: élément à récupérer dans le state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // nom de la prop à remplir: callback qui dispatch l'action
    updateDirection: (direction) => {
      dispatch(changeDirection(direction));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DirectionButton);
