import React from 'react';
import SheetMusic from './SheetMusic';
import { MAJOR_KEYS } from './keys';
import _ from 'lodash';

const KeySignatureQuiz = ({ level, onCorrect, onIncorrect }) => {
  const pool = MAJOR_KEYS.slice(0, level);
  const [keySignature, setKeySignature] = React.useState(_.sample(pool));

  const handleAnswer = answer => {
    answer === keySignature ? onCorrect() : onIncorrect();
    setKeySignature(_.sample(pool));
  };

  return (
    <>
      <SheetMusic abcString={`K:${keySignature}\n|`} />
      {_.shuffle(pool).map(choice => (
        <button key={choice} onClick={() => handleAnswer(choice)}>
          {choice}
        </button>
      ))}
    </>
  );
};

export default KeySignatureQuiz;
