import React from 'react';

const AccordionQuestions = ({ questions, userAnswers }) => {

    return (
        <div className="accordion">
            {questions.map((question, index) => {
                const isCorrect = userAnswers[index] ? userAnswers[index] === question.correct_answer : false;
                const accordionClass = isCorrect ? 'correct' : 'incorrect';

                return (
                    <div className='accordion-item' key={index}>
                        <h2 className="accordion-header" id={`heading${index}`}>
                            <button
                                char={`${accordionClass}`}
                                className={`accordion-button`}
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#collapse${index}`}
                                aria-controls={`collapse${index}`}
                            >
                                Question {index + 1}
                            </button>
                        </h2>
                        <div
                            id={`collapse${index}`}
                            className="accordion-collapse collapse"
                            aria-labelledby={`heading${index}`}
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                <p dangerouslySetInnerHTML={{ __html: `Question: ${question.question}` }} />
                                <p dangerouslySetInnerHTML={{ __html: `Your Answer: ${userAnswers[index]}` }} />
                                <p dangerouslySetInnerHTML={{ __html: `Correct Answer: ${question.correct_answer}` }} />
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default AccordionQuestions;
