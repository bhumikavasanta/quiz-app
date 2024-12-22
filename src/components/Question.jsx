import React, { useState } from 'react';
import Timer from './Timer';
import Answers from './Answers';
import QUESTIONS from '../questions';

const Question = ({
    index,
    onSelect,
    onSkip
}) => {

    const [answer, setAnswer] = useState({
        selectedAnswer: '',
        isCorrect: null
    });

    const handleSelectAnswer = (answer) => {
        setAnswer({
            selectedAnswer: answer,
            isCorrect: null
        })

        setTimeout(() => {
            setAnswer({
                selectedAnswer: answer,
                isCorrect: QUESTIONS[index].answers[0] === answer
            })
            
            setTimeout(() => {
                onSelect(answer);
                
            }, 2000);
        }, 1000);
    }

    let answerState = '';
    if(answer.selectedAnswer && answer.isCorrect !== null) {
        answerState = answer.isCorrect ? 'correct' : 'wrong';
    } else if (answer.selectedAnswer) {
        answerState = 'answered';
    }

    return (
        <div id='question'>
            <Timer
                timeout={10000}
                onTimeout={onSkip}
            />
            <h2>
                {QUESTIONS[index].text}
            </h2>
            <Answers
                answers={QUESTIONS[index].answers}
                selectedAnswer={answer.selectedAnswer}
                answersState={answerState}
                onSelect={handleSelectAnswer}
            />
        </div>
    );
}

export default Question;
