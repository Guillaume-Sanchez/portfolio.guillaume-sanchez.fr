// == Import npm
import React from 'react';

// == Import
import NbColors from 'src/container/GradientPicker/NbColors';
import Controls from 'src/container/GradientPicker/Controls';
import Gradient from 'src/container/GradientPicker/Gradient';
import Directions from '../Directions';

import './index.scss'

// == Composant
const App = () => (
  <div className="GradientPicker">
    <NbColors />
    <Controls />
    <Gradient />
    <Directions />
  </div>
);

// == Export
export default App;
