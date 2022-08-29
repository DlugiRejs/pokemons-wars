import React from 'react';
import Eye from '../../images/eye.svg';
import './Game.css';

export function Game() {
  return (
    <div>
      <header>
        <div className="pokemonLogo"></div>
        <button className="exitButton" type="button">
          EXIT
        </button>
      </header>
      <div className="gameMain">
        <div className="playerCard">
          <p className="playerDesc">PLAYER 1: 100</p>
          <div className="pokemonCard">
            <div className="pokemonName">PokemonName</div>
            <div className="pokemonSymbol">
              <img src={Eye} alt="symbol" />
            </div>
            <div className="pokemonImage"></div>
            <div className="pokemonHP pokemonParams">HP</div>
            <div className="pokemonHPValue pokemonParams">230</div>
            <div className="pokemonAttack pokemonParams">ATTACK</div>
            <div className="pokemonAttackValue pokemonParams">3</div>
            <div className="pokemonDefense pokemonParams">DEFENSE</div>
            <div className="pokemonDefenseValue pokemonParams">288</div>
            <div className="pokemonSum pokemonParams">SUM</div>
            <div className="pokemonSumValue pokemonParams">1234</div>
          </div>
        </div>
        <div className="playerCard">
          <p className="playerDesc">PLAYER 2: 100</p>
          <div className="pokemonCardBack">
            <div className="pokemonLogoBack"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
