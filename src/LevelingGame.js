import React from 'react';
import KeySignatureQuiz from './KeySignatureQuiz';

const LevelingGame = () => {
  const [level, setLevel] = React.useState(1);
  const [streak, setStreak] = React.useState(0);
  console.log(level);

  const handleCorrectAnswer = () => {
    const newStreak = streak + 1;
    setStreak(newStreak);
    if (newStreak % 5 === 0) setLevel(level + 1);
  };

  const handleIncorrectAnswer = () => {
    setStreak(0);
  };

  return (
    <KeySignatureQuiz
      level={level}
      onCorrect={handleCorrectAnswer}
      onIncorrect={handleIncorrectAnswer}
    />
  );
};

export default LevelingGame;
