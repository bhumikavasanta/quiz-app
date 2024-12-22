import React, { useRef } from 'react';

const Answers = ({ answers, selectedAnswer, answersState, handleSelectAnswer }) => {

    const shuffledAnswers = useRef();

    if (!shuffledAnswers.current) {
        shuffledAnswers.current = [...answers];
        shuffledAnswers.current.sort(() => Math.random() - 0.5);
    }

    return (
        <ul id='answers'>
            {
                shuffledAnswers.current.map((answer) => {
                    const isSelected = selectedAnswer === answer;
                    let cssClasses = '';
                    if (answersState === 'answered' && isSelected) {
                        cssClasses = 'selected';
                    }
                    if (
                        (answersState === 'correct' || answersState === 'wrong') && isSelected
                    ) {
                        cssClasses = answersState;
                    }
                    return <li key={answer} className='answer'>
                        <button onClick={() => handleSelectAnswer(answer)} className={cssClasses}>
                            {answer}
                        </button>
                    </li>
                })
            }
        </ul>
    );
}

export default Answers;
