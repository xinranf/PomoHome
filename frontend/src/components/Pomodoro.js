import React from 'react';
import { useState, useEffect } from 'react';
import pauseIcon from './Pause.png';

export default function Pomodoro() {
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(5);
    const [displayMsg, setDisplayMsg] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(true);
    const [time, setTime] = useState(0);

    const handleSubmitStart = async (e) => {
        e.preventDefault()
        setIsActive(true);
        setIsPaused(false);
    }
    const handleSubmitPause = async (e) => {
        e.preventDefault()
        setIsPaused(!isPaused);
    }

    useEffect(() => {
        let interval = 0;
        if (isActive && isPaused === false) {
            interval = setInterval(() => {
                if (seconds <= 0) {
                    if (minutes !== 0) {
                        setSeconds(59);
                        setMinutes((minutes) => minutes - 1);
                    } else {
                        let minutes = displayMsg ? 24 : 4;
                        let seconds = 59;

                        setSeconds(seconds);
                        setMinutes(minutes);
                        setDisplayMsg(!displayMsg);
                    }
                } else {
                    setSeconds(seconds - 1);
                }
            }, 1000);
        } else {
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval);
        };
    }, [isActive, isPaused, seconds])

    // useEffect(() => {
    //     let interval = setInterval(() => {
    //         if (timerStart) {
    //             clearInterval(interval);

    //             if (seconds === 0) {
    //                 if (minutes !== 0) {
    //                     setSeconds(59);
    //                     setMinutes(minutes - 1);

    //                 } else {
    //                     let minutes = displayMsg ? 24 : 4;
    //                     let seconds = 59;

    //                     setSeconds(seconds);
    //                     setMinutes(minutes);
    //                     setDisplayMsg(!displayMsg);
    //                 }
    //             } else {
    //                 setSeconds(seconds - 1);
    //             }
    //             console.log("current time: " + minutes + seconds);
    //         }
    //     }, 1000);
    // }, [timerStart, seconds]);

    const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

    return (
        <div className="pomodoro">
            <div className="msg">
                {displayMsg &&
                    <div><p>Break time! </p></div>}
                {!displayMsg &&
                    <div><p>Focus! </p></div>}
            </div>
            <div className="timer">
                {timerMinutes}:{timerSeconds}
                {/* <div>{time}</div> */}
                <div>
                    {(isPaused) ?
                        (<button className="pomo-btn" onClick={handleSubmitStart}>
                            <img src={require("./Start2.png")} alt="start" />
                        </button>) :
                        (<button className="pomo-btn" onClick={handleSubmitPause}>
                            <img src={require("./Pause2.png")} alt="pause" />
                        </button>)}
                    {/* <button onClick={handleSubmitStart}>Start</button>
            <button onClick={handleSubmitPause}>Pause</button> */}
                </div>
            </div>
        </div>
    )
}