import React, { useState, useCallback } from 'react';
import QUESTIONS from '../questions.jsx';
import QuizComplete from '../assets/quiz-complete.png';
import Question from './Question.jsx';

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
        return <div id='summary'>
            <img src={QuizComplete} alt='Complete' />
            <h2>
                Quiz Complete
            </h2>
        </div>
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
