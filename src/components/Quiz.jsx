import React, { useState, useCallback } from 'react';
import QUESTIONS from '../questions.jsx';
import Question from './Question.jsx';
import Summary from './Summary.jsx';

const Quiz = () => {


    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;

    const isComplete = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback((selectedAnswer) => {
        setUserAnswers((prevUserAnswers) => {
            return [...prevUserAnswers, selectedAnswer];
        })
    }, []);

    const handleSkipAnswer = useCallback(
        () => handleSelectAnswer(null), [handleSelectAnswer]
    );

    if (isComplete) {
        return <Summary userAnswers={userAnswers} />
    }


    return (
        <div id='quiz'>
            <div id='question'>
                <Question
                    index={activeQuestionIndex}
                    key={activeQuestionIndex}
                    onSelect={handleSelectAnswer}
                    onSkip={handleSkipAnswer}
                />
            </div>
        </div>


    );
}

export default Quiz;
