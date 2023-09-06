// This function calculates the grade and remarks based on the provided score.
export function calculateGrade(score) {
    let grade = '';
    let remarks = '';
  
    if (score >= 90) {
      grade = 'A+';
      remarks = 'Excellent';
    } else if (score >= 80) {
      grade = 'A';
      remarks = 'Very Good';
    } else if (score >= 70) {
      grade = 'B';
      remarks = 'Good';
    } else if (score >= 60) {
      grade = 'C';
      remarks = 'Average';
    } else if (score >= 50) {
      grade = 'D';
      remarks = 'Below Average';
    } else {
      grade = 'F';
      remarks = 'Fail';
    }
  
    return { grade, remarks };
  }
  