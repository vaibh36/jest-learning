import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [count, setCount] = React.useState(0)
  
    return(
      <div data-test="component-app">
        <h1 data-test="counter-display">Counter <span data-test="count">{count}</span></h1>
        <button onClick={() => setCount(count+1)} data-test="increment-button">Increment</button>
      </div>
    )
  
}

export default App;
