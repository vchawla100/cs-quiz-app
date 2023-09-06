import React from 'react';
import PropTypes from 'prop-types';
import { calculateScore } from '../utils/ScoreCalculator';
import { calculateGrade } from '../utils/GradeCalculator';
import { Segment, Header, Grid } from 'semantic-ui-react';

const Statistics = ({ questions, userAnswers }) => {
    const totalQuestions = 15;

    const correctAnswers = Object.values(questions).filter((question, index) => {
        return userAnswers[index] ? userAnswers[index] === question.correct_answer : false;
    }).length;

    const score = calculateScore(totalQuestions, correctAnswers);
    const { grade, remarks } = calculateGrade(score);

    return (
        <Segment>
            <Grid columns={3} divided>
                <Grid.Row stretched>
                    <Grid.Column>
                        <Header as="h1" textAlign="center" block>
                            {remarks}
                        </Header>
                    </Grid.Column>
                    <Grid.Column>
                        <Header as="h2" textAlign="center" block>
                            Grade: {grade}
                        </Header>
                        <Header as="h3" textAlign="center" block>
                            Total Questions: {totalQuestions}
                        </Header>
                    </Grid.Column>
                    <Grid.Column>
                        <Header as="h3" textAlign="center" block>
                            Correct Answers: {correctAnswers}
                        </Header>
                        <Header as="h3" textAlign="center" block>
                            Your Score: {score}%
                        </Header>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <Header as="h3" textAlign="center" block>
                            Passing Score: 50%
                        </Header>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    );
};

Statistics.propTypes = {
    questions: PropTypes.array.isRequired,
    userAnswers: PropTypes.array.isRequired,
};

export default Statistics;
