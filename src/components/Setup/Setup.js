import React from 'react';
import Pikachu from '../../images/pikachu.png';
import './Setup.css';

export function Setup () {
  return (
        <div>
            <header>
                <div className="pokemonLogo"></div>
                <button className="transpButton" type="button"></button>
            </header>
            <div className="setupMain">
                <div className="setupCard">
                    <p className="setupDesc">MODE</p>
                    <select
                        name="mode"
                        id="mode">
                        <option value="">--Choose Mode--</option>
                        <option value="2_Players">2 Players</option>
                        <option value="with_comp">With computer</option>
                    </select>
                </div>
                <div className="setupCard">
                    <p className="setupDesc">GAME RULE</p>
                    <select
                        name="rule"
                        id="rule">
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
                        id="number">
                        <option value="">--Choose Number--</option>
                        <option value="20">20</option>
                        <option value="40">40</option>
                        <option value="60">60</option>
                        <option value="80">80</option>
                        <option value="100">100</option>
                    </select>
                </div>
                <button className="playButton" type="button">
                    <span>PLAY</span><img src={Pikachu} alt="pikachu" />
                </button>
            </div>
        </div>
  );
}

