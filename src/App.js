import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import StartPage from './components/StartPage';
import Quiz from './components/Quiz';
import ReportPage from './components/ReportPage';
import Navbar from './components/Navbar'
import './App.css'

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [userEmail, setUserEmail] = useState('');
  const [userAnswers, setUserAnswers] = useState({});
  const [quizStarted, setQuizStarted] = useState(false);
  const [selectedGender, setSelectedGender] = useState(''); // Initialize the selected gender state
  const [alert, setAlert] = useState('')

  useEffect(() => {

    fetch('https://opentdb.com/api.php?amount=15')
      .then((response) => response.json())
      .then((data) => {
        const formattedQuestions = data.results.map((question) => ({
          question: question.question,
          choices: [question.correct_answer, ...question.incorrect_answers],
          correct_answer: question.correct_answer,
        }));
        setQuestions(formattedQuestions);
      });
  }, []);

  const handleStartQuiz = (email) => {
    setUserEmail(email);
    setQuizStarted(true);
  };

  const handleQuizComplete = (answers) => {
    setUserAnswers(answers);
    setQuizStarted(false);
  };

  let showAlert = (value) => {
    if(value === 'submit') 
      setAlert(`Click on the given question numbers options to check the result. \n You can also check the statistics by clicking on the 'Show Statistics' button below.`)
    else if(value === 'modal')
      setAlert(`Click on the Quiz logo on the top-left side of the page to restart the quiz.`)

    setTimeout(() => {
      setAlert(null)
    }, 5000);
  }

  return (
    <Router>

      <div id='main-container'>

        <Navbar quizStarted={quizStarted} />


        <div className="app cont">
          <Routes>
            <Route path="/" element={quizStarted ? <Quiz questions={questions} onComplete={handleQuizComplete} setAlert={setAlert} showAlert={showAlert} /> : <StartPage selectedGender={selectedGender} setSelectedGender={setSelectedGender} onStart={handleStartQuiz} />} />
            <Route path="/report" element={Object.keys(userAnswers).length ? <ReportPage questions={questions} userAnswers={userAnswers} userEmail={userEmail} selectedGender={selectedGender} alert={alert} showAlert={showAlert}/> : <Navigate to="/" />} />
          </Routes>
        </div>

      </div>

    </Router>
  );
};

export default App;
