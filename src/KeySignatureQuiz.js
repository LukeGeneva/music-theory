import React from 'react';
import SheetMusic from './SheetMusic';
import { MAJOR_KEYS } from './keys';
import { randomItem } from './array';

const KeySignatureQuiz = ({ level, onCorrect, onIncorrect }) => {
  const pool = MAJOR_KEYS.slice(0, level);
  const [keySignature, setKeySignature] = React.useState(randomItem(pool));

  const handleAnswer = answer => {
    answer === keySignature ? onCorrect() : onIncorrect();
    setKeySignature(randomItem(pool));
  };

  return (
    <>
      <SheetMusic abcString={`K:${keySignature}\n|`} />
      {pool.map(choice => (
        <button key={choice} onClick={() => handleAnswer(choice)}>
          {choice}
        </button>
      ))}
    </>
  );
};

export default KeySignatureQuiz;
