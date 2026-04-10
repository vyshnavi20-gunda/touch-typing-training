import React from "react";

const keys = ['a', 's', 'd', 'f', 'j', 'k', 'l', ';'];

const Keyboard = ({ currentKey }) => {
    return (
        <div className="keyboard">
            {keys.map((key, index) => (
                <div
                    key={index}
                    className={`key ${key === currentKey ? "active" : ""}`}
                >
                    {key}
                </div>
            ))}
        </div>
    );
};

export default Keyboard;