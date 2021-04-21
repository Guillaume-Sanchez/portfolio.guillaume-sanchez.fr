// == Import npm
import React from 'react';

// == Import
import './loader.scss';

// == Composant
const Loader = () => (
  <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
);

// == Export
export default Loader;