import React from 'react';
import QuizComplete from '../assets/quiz-complete.png';
import QUESTIONS from '../questions';

const Summary = ({userAnswers}) => {

    const skippedAnswers = userAnswers.filter(answer=>answer===null).length;
    const correctAnswers = userAnswers.filter((answer,index)=>answer===QUESTIONS[index].answers[0]).length;
    const inCorrectAnswers = QUESTIONS.length - skippedAnswers - correctAnswers;

    return (
        <div id='summary'>
            <img src={QuizComplete} alt='Trophy' />
            <h2>
                Quiz Complete
            </h2>
            <div id='summary-stats'>
        <p>
            <span className='number'>
                {skippedAnswers}
            </span>
            <span className='text'>
                Skipped
            </span>
        </p>
        <p>
            <span className='number'>
                {correctAnswers}
            </span>
            <span className='text'>
                Answered Correctly
            </span>
        </p>
        <p>
            <span className='number'>
                {inCorrectAnswers}
            </span>
            <span className='text'>
                Answered InCorrectly
            </span>
        </p>
            </div>
            <ol>
                {
                    userAnswers.map((answer, index) => {

                        let cssClasses = 'user-answer';

                        if(answer===null) {
                            cssClasses += ' skipped';
                        } else if (answer === QUESTIONS[index].answers[0]) {
                            cssClasses += ' correct';
                        } else {
                            cssClasses += ' wrong';
                        }

                        return (
                            <li
                            key={index}
                            >
                    <h3>
                        {index + 1}
                    </h3>
                    <p className='question'>
                        {QUESTIONS[index].text}
                    </p>
                    <p className={cssClasses}>
                        {answer ?? 'Skipped'}
                    </p>
                </li>
                        )
                    })
                }
                
            </ol>
        </div>
    );
}

export default Summary;
