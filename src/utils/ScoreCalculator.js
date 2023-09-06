// This function calculates the score based on the number of correct answers and total questions.
export function calculateScore(totalQuestions, correctAnswers) {
    
    if (totalQuestions === 0) {
        return 0; // Handle the case where there are no questions to prevent division by zero.
    }

    const percentage = (correctAnswers / totalQuestions) * 100;
    return parseFloat(percentage.toFixed(2)); // Return the score as a floating-point number with 2 decimal places.
}
