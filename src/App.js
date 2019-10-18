import React from 'react';
import './App.css';
import SheetMusic from './SheetMusic';

const abcString = `K:E\n|`;

function App() {
  return (
    <div className="App">
      <SheetMusic abcString={abcString} />
    </div>
  );
}

export default App;
