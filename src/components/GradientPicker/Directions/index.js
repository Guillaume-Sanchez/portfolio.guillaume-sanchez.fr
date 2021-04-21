import React from 'react';

import DirectionButton from 'src/container/GradientPicker/Directions/DirectionButton';

const Directions = () => (
  <div className="buttons group">
    <DirectionButton direction="270deg" label="to left" />
    <DirectionButton direction="90deg" label="to right" />
  </div>
);

export default Directions;
