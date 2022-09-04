import React from 'react';
import { Game } from './components/Game/Game.js';
import { Setup } from './components/Setup/Setup.js';
import './App.css';

class App extends React.Component {
  state = {
    mode: '',
    gameRule: '',
    numberOfPoks: 0,
    play: false,
  };

  handleModeChange = (event) => {
    this.setState({
      mode: event.target.value,
    });
  };

  handleGameRuleChange = (event) => {
    this.setState({
      gameRule: event.target.value,
    });
  };

  handleNumberOfPoksChange = (event) => {
    this.setState({
      numberOfPoks: parseInt(event.target.value, 10),
    });
  };

  setPlay = () => {
    this.setState({
      play: true,
    });
  };

  resetState = () => {
    this.setState({
      mode: '',
      gameRule: '',
      numberOfPoks: 0,
      play: false,
    });
  };

  render() {
    let { mode, gameRule, numberOfPoks } = this.state;
    return (
      <div className="App">
        <header>
          <div className="pokemonLogo"></div>
          {this.state.play ? (
            <button
              className="exitButton"
              type="button"
              onClick={this.resetState}
            >
              EXIT
            </button>
          ) : (
            <button className="transpButton" type="button"></button>
          )}
        </header>
        {this.state.play ? (
          <Game numberOfPoks={numberOfPoks} mode={mode} gameRule={gameRule} />
        ) : (
          <Setup
            AppState={this.state}
            handleModeChange={this.handleModeChange}
            handleGameRuleChange={this.handleGameRuleChange}
            handleNumberOfPoksChange={this.handleNumberOfPoksChange}
            setPlay={this.setPlay}
          />
        )}
      </div>
    );
  }
}

export default App;
