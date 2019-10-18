import React from 'react';
import './App.css';
import KeySignatureQuiz from './KeySignatureQuiz';

function App() {
  return (
    <div className="App">
      <KeySignatureQuiz
        keySignature="D"
        onCorrect={() => alert('Correct!')}
        onIncorrect={() => alert('Incorrect!')}
      />
    </div>
  );
}

export default App;
