import React from 'react';

const OverviewPanel = ({ questions, userAnswers, currentQuestionIndex, onSelectQuestion, visitedQuestions }) => {
  return (
    <div className="overview-panel my-3">
      <div className="question-status-container">
        {questions.map((_, index) => {
          const isCurrent = index === currentQuestionIndex;
          const isAnswered = userAnswers[index];
          const isVisited = visitedQuestions.has(index);

          return (
            <div
              key={index}
              className={`question-status ${
                isCurrent ? 'current' : isAnswered ? 'answered' : isVisited ? 'visited' : ''
              }`}
              onClick={() => onSelectQuestion(index)}
            >
              {index + 1}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OverviewPanel;
