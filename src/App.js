import { useState } from "react";
import { evaluate } from "mathjs";

import "./App.css";

import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import ClearButton from "./components/ClearButton/ClearButton";

const App = () => {
  const [input, setInput] = useState("");

  const addToInput = (val) => {
    setInput(input + val);
  };

  const handleEqual = () => {
    const expression = evaluate(input);
    setInput(expression);
  };

  return (
    <div className="app">
      <div className="calc-wrapper">
        <Input input={input}></Input>
        <div className="row">
          <Button handleClick={addToInput}>1</Button>
          <Button handleClick={addToInput}>2</Button>
          <Button handleClick={addToInput}>3</Button>
          <Button handleClick={addToInput}>+</Button>
        </div>
        <div className="row">
          <Button handleClick={addToInput}>4</Button>
          <Button handleClick={addToInput}>5</Button>
          <Button handleClick={addToInput}>6</Button>
          <Button handleClick={addToInput}>*</Button>
        </div>
        <div className="row">
          <Button handleClick={addToInput}>7</Button>
          <Button handleClick={addToInput}>8</Button>
          <Button handleClick={addToInput}>9</Button>
          <Button handleClick={addToInput}>/</Button>
        </div>
        <div className="row">
          <Button handleClick={addToInput}>.</Button>
          <Button handleClick={addToInput}>0</Button>
          <Button handleClick={handleEqual}>=</Button>
          <Button handleClick={addToInput}>-</Button>
        </div>
        <div className="row">
          <ClearButton handleClear={() => setInput("")}>C</ClearButton>
        </div>
      </div>
    </div>
  );
};

export default App;
