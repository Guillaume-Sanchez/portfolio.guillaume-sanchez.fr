/* eslint-disable max-len */
/* eslint linebreak-style: ["error", "windows"] */

import { connect } from 'react-redux';

import Gradient from 'src/components/GradientPicker/Gradient';

const mapStateToProps = (state) => {
  // on retourne un objet qui va remplir les props du composant de présentation
  return {
    direction: state.colors.direction,
    firstColor: state.colors.firstColor,
    lastColor: state.colors.lastColor,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // nom de la prop à remplir: callback qui dispatch l'action
  };
};

const createContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const containerComponent = createContainer(Gradient);

export default containerComponent;
