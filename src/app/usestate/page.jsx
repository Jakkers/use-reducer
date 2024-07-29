"use client";

import { useState } from "react";

export default function UseStatePage() {
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount(count + 1);
  }
  function decrementCount() {
    setCount(count - 1);
  }

  return (
    <div>
      <h2>useState Page</h2>
      <h2>Count: {count}</h2>
      <button onClick={incrementCount}>up</button>
      <button onClick={decrementCount}>down</button>
    </div>
  );
}
