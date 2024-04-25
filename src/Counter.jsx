import { useState } from "react";
import { useEffect } from "react";

function Counter() {
  const [value, setValue] = useState(0);
  function increment() {
    setValue((prev) => prev + 1);
    console.log("Value after increment", value);
  }
  function decrement() {
    setValue((prev) => prev - 1);
    console.log("Value after decrement", value);
  }

  // useEffect(() => {
  //   console.log("Value change");
  // }, [value]);
  // useEffect(() => {
  //   console.log("Value changed on every render");
  // });
  useEffect(() => {
    console.log("value changed");
  }, []);

  return (
    <div>
      <button onClick={increment}>+</button>
      <div>{value}</div>
      <button onClick={decrement}>-</button>
    </div>
  );
}
export default Counter;
