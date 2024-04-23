import { useState } from "react";

function Counter() {
  const [value, setValue] = useState(0);
  function increment() {
    setValue(value + 1);
    console.log("Value after inceremnt", value);
  }
  function decrement() {
    setValue(value - 1);
    console.log("Value after decrement", value);
  }
  return (
    <div>
      <button onClick={increment}>+</button>
      {value}
      <button onClick={decrement}>-</button>
    </div>
  );
}
export default Counter;
