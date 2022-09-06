import React from 'react';
import dark from '../../images/dark.svg';
import psychic from '../../images/psychic.svg';
import fighting from '../../images/fighting.svg';
import fire from '../../images/fire.svg';
import ghost from '../../images/ghost.svg';
import normal from '../../images/normal.svg';
import electric from '../../images/electric.svg';
import steel from '../../images/steel.svg';
import water from '../../images/water.svg';
import grass from '../../images/grass.svg';
import fairy from '../../images/fairy.svg';
import './Card.css';
import PropTypes from 'prop-types';

export class Card extends React.Component {
  choosePokLogoAndStyle = () => {
    switch (this.props.type) {
      case 'dark':
        return {
          logo: dark,
          card: { backgroundColor: '#544D4D' },
          image: '#797979',
        };
      case 'psychic':
        return {
          logo: psychic,
          card: { backgroundColor: '#E1AFEE' },
          image: '#F6DCF6',
        };
      case 'fighting':
        return {
          logo: fighting,
          card: { backgroundColor: '#F8C77F' },
          image: '#F7DFC9',
        };
      case 'fire':
        return {
          logo: fire,
          card: { backgroundColor: '#F9A576' },
          image: '#FFD7C0',
        };
      case 'ghost':
        return {
          logo: ghost,
          card: { backgroundColor: '#E3E3E3' },
          image: '#FFF8F8',
        };
      case 'electric':
        return {
          logo: electric,
          card: { backgroundColor: '#F8F0AB' },
          image: '#FFFFFF',
        };
      case 'steel':
        return {
          logo: steel,
          card: { backgroundColor: '#C4C4C4' },
          image: '#E3E3E3',
        };
      case 'water':
        return {
          logo: water,
          card: { backgroundColor: '#9FC9F0' },
          image: '#C6F6F4',
        };
      case 'grass':
        return {
          logo: grass,
          card: { backgroundColor: '#94E393' },
          image: '#E8FFDA',
        };
      case 'fairy':
        return {
          logo: fairy,
          card: { backgroundColor: '#FECBFF' },
          image: '#FFEFFF',
        };
      default:
        return {
          logo: normal,
          card: { backgroundColor: '#E3E3E3' },
          image: '#FFF8F8',
        };
    }
  };

  render() {
    let { name, sprite, HP, attack, defense, sum, onClick } = this.props;
    return (
      <div
        className="pokemonCard"
        style={this.choosePokLogoAndStyle().card}
        onClick={onClick}
      >
        <div className="pokemonName">{name}</div>
        <div className="pokemonSymbol">
          <img src={this.choosePokLogoAndStyle().logo} alt="symbol" />
        </div>
        <div
          className="pokemonImage"
          style={{
            backgroundImage: `url(${sprite})`,
            backgroundColor: this.choosePokLogoAndStyle().image,
          }}
        ></div>
        <div className="pokemonHP pokemonParams">HP</div>
        <div className="pokemonHPValue pokemonParams">{HP}</div>
        <div className="pokemonAttack pokemonParams">ATTACK</div>
        <div className="pokemonAttackValue pokemonParams">{attack}</div>
        <div className="pokemonDefense pokemonParams">DEFENSE</div>
        <div className="pokemonDefenseValue pokemonParams">{defense}</div>
        <div className="pokemonSum pokemonParams">SUM</div>
        <div className="pokemonSumValue pokemonParams">{sum}</div>
      </div>
    );
  }
}

Card.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  sprite: PropTypes.string,
  HP: PropTypes.number,
  attack: PropTypes.number,
  defense: PropTypes.number,
  sum: PropTypes.number,
  onClick: PropTypes.func.isRequired,
};
