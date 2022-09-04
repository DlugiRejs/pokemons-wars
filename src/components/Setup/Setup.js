import React from 'react';
import Pikachu from '../../images/pikachu.png';
import './Setup.css';

export class Setup extends React.Component {
  render() {
    let { mode, gameRule, numberOfPoks } = this.props.AppState;
    let {
      handleModeChange,
      handleGameRuleChange,
      handleNumberOfPoksChange,
      setPlay,
    } = this.props;
    let disabled = !(mode && gameRule && numberOfPoks);
    return (
      <div className="setupMain">
        <div className="setupCard">
          <p className="setupDesc">MODE</p>
          <select
            name="mode"
            id="mode"
            value={mode}
            onChange={handleModeChange}
          >
            <option value="">--Choose Mode--</option>
            <option value="2_Players">2 Players</option>
            <option value="with_comp">With computer</option>
          </select>
        </div>
        <div className="setupCard">
          <p className="setupDesc">GAME RULE</p>
          <select
            name="rule"
            id="rule"
            value={gameRule}
            onChange={handleGameRuleChange}
          >
            <option value="">--Choose Rule--</option>
            <option value="HP">HP</option>
            <option value="attack">Attack</option>
            <option value="defense">Defense</option>
            <option value="sum">Sum</option>
          </select>
        </div>
        <div className="setupCard">
          <p className="setupDesc">NUMBER OF POKEMONS</p>
          <select
            name="number"
            id="number"
            value={numberOfPoks}
            onChange={handleNumberOfPoksChange}
          >
            <option value="">--Choose Number--</option>
            <option value="20">20</option>
            <option value="40">40</option>
            <option value="60">60</option>
            <option value="80">80</option>
            <option value="100">100</option>
          </select>
        </div>
        <button
          disabled={disabled}
          className="playButton"
          type="button"
          onClick={setPlay}
        >
          <span>PLAY</span>
          <img src={Pikachu} alt="pikachu" />
        </button>
      </div>
    );
  }
}
