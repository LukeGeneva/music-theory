import React from 'react';
import SheetMusic from './SheetMusic';

const keys = ['C', 'G', 'D'];

const KeySignatureQuiz = ({ keySignature, onCorrect, onIncorrect }) => {
  const handleAnswer = answer =>
    answer === keySignature ? onCorrect() : onIncorrect();

  return (
    <>
      <SheetMusic abcString={`K:${keySignature}\n|`} />
      {keys.map(choice => (
        <button key={choice} onClick={() => handleAnswer(choice)}>
          {choice}
        </button>
      ))}
    </>
  );
};

export default KeySignatureQuiz;
