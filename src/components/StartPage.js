import React, { useState, useEffect, useRef } from 'react';
import quizMicLogo from '../assets/quiz-microphone-logo.png';

const StartPage = ({ onStart, selectedGender, setSelectedGender }) => {
    const inputRef = useRef('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        // focus to the i/p element on component mounts
        inputRef.current.focus();
    }, []);

    const handleGenderSelect = (gender) => {

        setSelectedGender(gender); // Update the selected gender when an option is clicked
    };


    const handleSubmit = (e) => {
        if (document.getElementById('genderBtn').innerText.trim() === 'Select Gender') {
            alert('Please select the Gender.')
            return
        }

        e.preventDefault();
        if (email.trim() !== '') {
            onStart(email);
        }
    };

    return (
        <div className="start-page">
            <h1>Quiz Login</h1>
            <div className="mb-3 cont">
                <label htmlFor="exampleFormControlInput1" className="form-label m-3">Email address</label>
                <input type="email" className="form-control m-3" id="email-ip" ref={inputRef} placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />

                <div className="dropdown mx-2">
                    <button
                        id='genderBtn'
                        className="btn btn-info dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        {selectedGender || 'Select Gender'} {/* Display the selected gender or default text */}
                    </button>
                    <ul className="dropdown-menu dropdown-menu-dark">
                        <li>
                            <a
                                className={`dropdown-item ${selectedGender === 'Male' ? 'active' : ''}`}
                                onClick={() => handleGenderSelect('Male')}
                            >
                                Male
                            </a>
                        </li>
                        <li>
                            <a
                                className={`dropdown-item ${selectedGender === 'Female' ? 'active' : ''}`}
                                onClick={() => handleGenderSelect('Female')}
                            >
                                Female
                            </a>
                        </li>
                        <li>
                            <hr className="dropdown-divider" />
                        </li>
                        <li>
                            <a
                                className={`dropdown-item ${selectedGender === 'Prefer not to say' ? 'active' : ''}`}
                                onClick={() => handleGenderSelect('Prefer not to say')}
                            >
                                Prefer not to say
                            </a>
                        </li>
                    </ul>
                </div>

                <button type="button" className="btn btn-secondary" onClick={handleSubmit}>Submit</button>

                <img src={quizMicLogo} alt="quiz-mic-logo" id='quiz-mic' />

            </div>
        </div>
    );
};

export default StartPage;
