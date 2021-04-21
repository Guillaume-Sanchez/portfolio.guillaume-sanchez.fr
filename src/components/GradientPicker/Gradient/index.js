import React from 'react';
import PropTypes from 'prop-types';

/*
  const result = direction === '90deg'
    ? `${firstSpan} → ${lastSpan}`
    : `${lastSpan} ← ${firstSpan}`;
*/

const Gradient = ({ direction, firstColor, lastColor }) => {
  const gradient = `linear-gradient(${direction},${firstColor},${lastColor})`;

  // Le JSX doit avoir un seul élément racine : si on ne veut pas une div
  // supplémentaire dans le HTML on peut utiliser un Fragment => <> </>

  // on peut fournir du style inline : objet fourni à la prop style. C'est du JS
  // qui sera traduit en CSS, donc syntaxe un peu différente du CSS, par exemple
  // textAlign: 'center'

  return (
    <>
      <div id="colors">
        <span style={{ color: firstColor }}>{firstColor}</span>
        <span style={{ transform: `rotate( calc(${direction} - 90deg)` }}>→</span>
        <span style={{ color: lastColor }}>{lastColor}</span>
      </div>
      <div id="gradient" style={{ background: gradient }} />
    </>
  );
};

Gradient.propTypes = {
  direction: PropTypes.string.isRequired,
  firstColor: PropTypes.string.isRequired,
  lastColor: PropTypes.string.isRequired,
};

export default Gradient;
