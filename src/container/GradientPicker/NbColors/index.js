/* eslint-disable max-len */
/* eslint linebreak-style: ["error", "windows"] */

// connect : fonction qui permet de créer l'assistant d'un composant pour faire le
// lien avec le store
import { connect } from 'react-redux';

// === on importe le composant de présentation
import NbColors from 'src/components/GradientPicker/NbColors';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le store
// eslint-disable-next-line arrow-body-style
const mapStateToProps = (state) => {
  // on retourne un objet qui va remplir les props du composant de présentation
  return {
    // nom de la prop à remplir: élément à récupérer dans le state
    nbColors: state.colors.nbColors,
  };
};

// === mapDispatchToProps
// si j'ai besoin de modifier le store
const mapDispatchToProps = {};

// === création du composant container (assistant du composant de présentation, qui
// sert d'intermédiaire pour l'accès au store)

// connect retourne une fonction qui permet de créer un assistant
const createContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
);
// j'applique cette fonction sur le composant de présentation => retourne un
// composant React
const containerComponent = createContainer(NbColors);
// j'exporte ce composant
export default containerComponent;

// en version concise :
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(NbColors);

// ce que fait l'assistant, c'est l'équivalent de :
// const value = state.nbColors;
// return (
//  <NbColors nbColors={value}
// )
