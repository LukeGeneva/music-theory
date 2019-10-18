import React from 'react';
import abcjs from 'abcjs';

const SheetMusic = ({ abcString }) => {
  React.useEffect(() => {
    abcjs.renderAbc('sheet-music', abcString);
  });

  return <div id="sheet-music"></div>;
};

export default SheetMusic;
