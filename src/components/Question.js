import { useState, useEffect } from 'react';

const Question = ({ question, choices, onSelect, userAnswers, currentQuestionIndex }) => {
  const [selectedChoice, setSelectedChoice] = useState(null);

  // reset the selected choice when the currentQuestionIndex changes
  useEffect(() => {
    setSelectedChoice(null);
  }, [currentQuestionIndex]);

  const handleChoiceClick = (choice) => {
    setSelectedChoice(choice);
    onSelect(choice);
  };

  return (
    <div className="question">
      <h2 dangerouslySetInnerHTML={{ __html: question }} /> {/* to exploit the escape sequences */}
      <ul>
        {choices.map((choice, index) => (
          <li
            className={`choice ${(selectedChoice === choice || userAnswers[currentQuestionIndex] === choice) ? 'selected' : ''} my-2`}
            key={index}
            onClick={() => handleChoiceClick(choice)}
            dangerouslySetInnerHTML={{ __html: choice }}
          />
        ))}
      </ul>
    </div>
  );
};

export default Question;
