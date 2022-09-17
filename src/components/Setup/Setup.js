import React from 'react';
import Pikachu from '../../images/pikachu.png';
import './Setup.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export class Setup extends React.Component {
  render() {
    let { mode, gameRule, numberOfPoks } = this.props.AppState;
    let {
      handleModeChange,
      handleGameRuleChange,
      handleNumberOfPoksChange,
      setPlay
    } = this.props;
    let disabled = !(mode && gameRule && numberOfPoks);
    const amounts = ['20', '40', '60', '80', '100'];
    const rules = ['HP', 'attack', 'defense', 'sum'];
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
            {rules.map((rule) => (
              <option key={rule} value={rule}>
                {rule}
              </option>
            ))}
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
            {amounts.map((amount) => (
              <option key={amount} value={amount}>
                {amount}
              </option>
            ))}
          </select>
        </div>
        <Link
          style={{ textDecoration: 'none' }}
          to={{
            pathname: '/game',
            search: `?mode=${mode}&gameRule=${gameRule}&numberOfPoks=${numberOfPoks}`,
          }}
        >
          <button disabled={disabled} className="playButton" type="button" onClick={setPlay}>
            <span>PLAY</span>
            <img src={Pikachu} alt="pikachu" />
          </button>
        </Link>
      </div>
    );
  }
}

Setup.propTypes = {
  AppState: PropTypes.object.isRequired,
  handleModeChange: PropTypes.func.isRequired,
  handleGameRuleChange: PropTypes.func.isRequired,
  handleNumberOfPoksChange: PropTypes.func.isRequired,
  setPlay: PropTypes.func.isRequired,
};
