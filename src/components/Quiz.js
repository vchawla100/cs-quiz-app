import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Question from './Question';
import OverviewPanel from './OverviewPanel';

const Quiz = ({ questions, onComplete, setAlert, showAlert }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState({});
    const [timeRemaining, setTimeRemaining] = useState(1800); // 30 minutes in seconds
    const [visitedQuestions, setVisitedQuestions] = useState(new Set([0]))

    const navigate = useNavigate();

    useEffect(() => {
        const timer = setInterval(() => {
            if (timeRemaining > 0) {
                setTimeRemaining(timeRemaining - 1);
            } else {
                clearInterval(timer);
                handleSubmitQuiz();
            }
        }, 1000);
    
        return () => {
            clearInterval(timer);
        };
    }, [timeRemaining]); 
    

    const handleSelectAnswer = (choice) => {
        setUserAnswers((prevAnswers) => ({
            ...prevAnswers,
            [currentQuestionIndex]: choice,
        }));
    };

    const handleSubmitQuiz = () => {
        if (!timeRemaining) alert('Time is completed.')
        
        if(!Object.values(userAnswers).length)
            alert('No answers selected. Quiz is ending now.')
        
        onComplete(userAnswers);

        showAlert('submit');

        navigate('/report');
    };

    const goToQuestion = (index) => {
        setCurrentQuestionIndex(index);

        const newSet = new Set(visitedQuestions);
        newSet.add(index);
        setVisitedQuestions(newSet);
    };

    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;

    return (
        <div className="quiz container mt-5">
            <div className="timer alert alert-info">
                Time Remaining: {minutes}m {seconds}s
            </div>
            <Question
                question={questions[currentQuestionIndex].question}
                choices={questions[currentQuestionIndex].choices}
                userAnswers={userAnswers}
                currentQuestionIndex={currentQuestionIndex}
                onSelect={handleSelectAnswer}
            />
            <OverviewPanel
                questions={questions}
                userAnswers={userAnswers}
                currentQuestionIndex={currentQuestionIndex}
                onSelectQuestion={goToQuestion}
                visitedQuestions={visitedQuestions}
            />
            <button className="btn btn-primary" onClick={handleSubmitQuiz}>
                Submit Quiz
            </button>
        </div>
    );
};

export default Quiz;
