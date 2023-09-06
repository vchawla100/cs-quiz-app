import React from 'react'
import { NavLink } from 'react-router-dom';
import quizIcon from '../assets/quiz-icon.png';

const Navbar = ({ quizStarted }) => {

  const handleHelpClick = (() => {
    if (!quizStarted) {
      window.open('https://www.joshtalks.com/'); 
    }
  });

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="" id='nav-props'>
        <span className="navbar-brand mx-4" style={{ width: "20vw", textAlign: "left" }}>
          <NavLink to="/" exact style={{ textDecoration: 'none', color: 'white' }}>
            <img src={quizIcon} alt="" style={{ width: 'auto', height: '7vh' }} title='Home'/>
          </NavLink>
        </span>
        <span className="navbar-brand mx-4 h1" style={{ width: "60vw", textAlign: "center" }}>
          <h1>Quiz-App</h1>
        </span>
        <span className="navbar-brand mx-4 h1" style={{ width: "20vw", textAlign: "right" }} onClick={handleHelpClick}>
          {quizStarted ? 'In-progress' : 'Help'}
        </span>
      </div>
    </nav>
  )
}

export default Navbar;
