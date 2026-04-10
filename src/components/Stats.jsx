import React from "react";

const Stats = ({ total, correct }) => {
    const accuracy = total === 0 ? 0 : ((correct / total) * 100).toFixed(2);

    return (
        <div className="stats">
            <div>Total: {total}</div>
            <div>Correct: {correct}</div>
            <div>Accuracy: {accuracy}%</div>
        </div>
    );
};

export default Stats;