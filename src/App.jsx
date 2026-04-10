import React, { useState } from "react";
import TypingBox from "./components/TypingBox";
import Keyboard from "./components/Keyboard";
import Timer from "./components/Timer";
import Stats from "./components/Stats";
import { generateSequence } from "./utils/generateSequence";
import "./index.css";

function App() {
  const [sequence, setSequence] = useState(generateSequence());
  const [index, setIndex] = useState(0);
  const [total, setTotal] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [time, setTime] = useState(300);
  const [isActive, setIsActive] = useState(false);

  const handleKeyPress = (e) => {
    if (!isActive) setIsActive(true);
    if (time === 0) return;

    const expectedKey = sequence[index];
    const pressedKey = e.key;

    setTotal((prev) => prev + 1);

    if (pressedKey === expectedKey) {
      setCorrect((prev) => prev + 1);
      setIndex((prev) => prev + 1);
    }
  };

  return (
    <div className="app">
      <h1 className="title">⌨️ Touch Typing Trainer</h1>

      <Timer time={time} setTime={setTime} isActive={isActive} />

      <div className="next-key">
        Next Key: <span>{sequence[index]}</span>
      </div>

      <TypingBox handleKeyPress={handleKeyPress} />

      <Keyboard currentKey={sequence[index]} />

      <Stats total={total} correct={correct} />

      {time === 0 && <h2 className="end">Time's Up!</h2>}
    </div>
  );
}

export default App;