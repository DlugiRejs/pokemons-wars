import React from 'react';
import Game from './components/Game/Game.js';
import { Setup } from './components/Setup/Setup.js';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

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
    return (
      <BrowserRouter>
        <div className="App">
          <header>
            <div className="pokemonLogo"></div>
            {this.state.play ? (
              <Link style={{ textDecoration: 'none' }} to="/">
                <button
                  className="exitButton"
                  type="button"
                  onClick={this.resetState}
                >
                  EXIT
                </button>
              </Link>
            ) : (
              <button className="transpButton" type="button"></button>
            )}
          </header>
          <Routes>
            <Route
              path="/"
              element={
                <Setup
                  AppState={this.state}
                  handleModeChange={this.handleModeChange}
                  handleGameRuleChange={this.handleGameRuleChange}
                  handleNumberOfPoksChange={this.handleNumberOfPoksChange}
                  setPlay={this.setPlay}
                />
              }
            />
            <Route path="/game" element={<Game />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
