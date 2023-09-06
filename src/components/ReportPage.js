import React, { useState } from 'react';
import AccordionQuestions from './Accordion'; // Import the AccordionQuestions component
import Statistics from './Statistics';
import Alert from './Alert'
import './styles/ReportPage.css'

const ReportPage = ({ questions, userAnswers, userEmail, selectedGender, alert, showAlert }) => {

  const handleModalClick = (() => {
    showAlert('modal');
  });

  return (
    <div className="report-page cont">
      <h2 color='red'><b>Quiz Report for:</b> {selectedGender === 'Female' ? 'Mrs. ' : selectedGender === 'Male' ? 'Mr. ' : 'Mx. '} {userEmail.substring (0, userEmail.indexOf("@")) }</h2>

      <div id='accordCont'>
        <AccordionQuestions questions={questions} userAnswers={userAnswers} />
      </div>

      <button type="button" class="btn btn-secondary mt-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop" >
        Show Statistics
      </button>

      <div class="modal bg-red" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel"><b>Overall Statistics</b></h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleModalClick}></button>
            </div>
            <div class="modal-body">
              <Statistics questions={questions} userAnswers={userAnswers} />
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={handleModalClick}>Close</button>
            </div>
          </div>
        </div>
      </div>

      <Alert alert={alert}/>
    </div>
  );
};

export default ReportPage;
