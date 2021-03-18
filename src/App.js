import React from 'react';
import logo from './logo.svg';
import './App.css';
import GuessedWords from './GuessedWords';
import Congrats from './Congrats';

class App extends React.Component {

  render(){
  
    return(
      <div data-test="component-app">
          <Congrats success={true} />
          <GuessedWords guessedWords={[{guessedWord: 'train', letterMatchCount: 5}]} />
      </div>
    )
  }
  
}

export default App;
