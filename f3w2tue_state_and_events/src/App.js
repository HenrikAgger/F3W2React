import React, {useState, useEffect} from 'react';
import './App.css';

export default function App(){
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const [decrement, setDecrement] = useState(5);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 5)}>Click me to increment</button>
      <button onClick={() => setCount(count - decrement)}>Click me to decrement</button> 
    </div>
  )
}

