import React, { useState, useCallback } from 'react';
import QUESTIONS from '../questions.jsx';
import QuizComplete from '../assets/quiz-complete.png';
import Timer from './Timer.jsx';
import Answers from './Answers.jsx';

const Quiz = () => {


    const [answersState, setAnswersState] = useState('')
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = answersState === '' ? userAnswers.length : userAnswers.length - 1;

    const isComplete = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback((selectedAnswer) => {
        setAnswersState('answered');
        setUserAnswers((prevUserAnswers) => {
            return [...prevUserAnswers, selectedAnswer];
        })
        setTimeout(() => {
            if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
                setAnswersState('correct');
            } else {
                setAnswersState('wrong');
            }
            setTimeout(() => {
                setAnswersState('');
            }, 2000);
        }, 1000);
    }, [activeQuestionIndex]);

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
                <Timer key={activeQuestionIndex} timeout={10000} onTimeout={handleSkipAnswer} />
                <h2>
                    {
                        QUESTIONS[activeQuestionIndex].text
                    }
                </h2>
                <Answers
                    answers={QUESTIONS[activeQuestionIndex].answers}
                    selectedAnswer={userAnswers[userAnswers.length - 1]}
                    answersState={answersState}
                    handleSelectAnswer={handleSelectAnswer}
                />
            </div>
        </div>


    );
}

export default Quiz;
