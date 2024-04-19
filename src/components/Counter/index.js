import React, { useState } from 'react'
import "./style.css";

function Counter() {
   
    const [count, setCount] = useState(0);
    // Calculate the background color based on the count
    const backgroundColor = `rgba(0, 0, 255, ${count / 10})`;

  return (
    <div className='counter-container' style={{backgroundColor}}>
       <div className='counter'>
           <h2>Counter: {count}</h2>
           <button onClick={() => setCount(count+1)}>Increment</button>
           <button onClick={() => setCount(count-1)}>Decrement</button>
           <button onClick={() => setCount(0)}>Reset</button>
       </div>
    </div>
  )
}

export default Counter