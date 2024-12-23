import React, { useState } from 'react';
import Timer from './Timer';
import Answers from './Answers';
import QUESTIONS from '../questions';

const Question = ({
    index,
    onSelect,
    onSkip,
}) => {

    const [answer, setAnswer] = useState({
        selectedAnswer: '',
        isCorrect: null
    });

    let timer = 10000;
    if (answer.selectedAnswer) {
        timer = 1000;
    }
    if (answer.isCorrect !== null) {
        timer = 2000;
    }

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
    if (answer.selectedAnswer && answer.isCorrect !== null) {
        answerState = answer.isCorrect ? 'correct' : 'wrong';
    } else if (answer.selectedAnswer) {
        answerState = 'answered';
    }

    return (
        <div id='question'>
            <Timer
                key={timer}
                timeout={timer}
                onTimeout={answer.selectedAnswer === ''  ? onSkip : null}
                mode={answerState}
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
