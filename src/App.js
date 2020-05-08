import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useSelector,useDispatch} from 'react-redux';

function App() {
  const counter = useSelector(state=>state.counter)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <h1>Counter : {counter}</h1>
        <button onClick={()=>dispatch({type:'INCREMENT'})}>+</button>
        <button onClick={()=>dispatch({type:'DECREMENT'})}>-</button>
      </header>
    </div>
  );
}

export default App;
