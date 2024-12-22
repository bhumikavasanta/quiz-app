import React, { useEffect, useState } from 'react';

const Timer = ({timeout, onTimeout}) => {
    const [remainingTime, setRemainingTime] = useState(timeout);
    
    useEffect(() => {
        const timer = setTimeout(onTimeout, timeout);
        return () => {
            clearTimeout(timer)
        }
    }, [onTimeout, timeout]);

    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTime(prevRemTime => prevRemTime - 100);
        }, 100);
        return ()=>{
            clearInterval(interval);
        };
    }, []);

    
    return (
        <progress id='question-time' max={timeout} value={remainingTime}/>
    );
}

export default Timer;
