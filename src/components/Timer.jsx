import React, { useEffect } from "react";

const Timer = ({ time, setTime, isActive }) => {
    useEffect(() => {
        let interval;

        if (isActive && time > 0) {
            interval = setInterval(() => {
                setTime((prev) => prev - 1);
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [isActive, time]);

    return <h2 className="timer">⏱️ {time}s</h2>;
};

export default Timer;