import React from 'react';
import './Game.css';
import { getPoks } from '../../utils/getPoks';
import { Card } from '../Card/Card.js';
import Loading from '../Loading/Loading.js';
import withSearchParams from '../withSearchParams';

class CardBack extends React.Component {
  render() {
    return (
      <div className="pokemonCardBack" onClick={this.props.onClick}>
        <div className="pokemonLogoBack"></div>
      </div>
    );
  }
}

class Game extends React.Component {
  state = {
    indexOne: 0,
    indexTwo: 1,
    poks: [],
    playerOnePoints: 0,
    playerTwoPoints: 0,
    loading: true,
    beginning: true,
  };

  getPoksData = async (numOfPoks) => {
    let data,
      poksData = [];
    data = await getPoks(numOfPoks);
    for (let i = 0; i < numOfPoks; i++) {
      poksData[i] = {
        name: !!data[i].forms[0].name ? data[i].forms[0].name : 'XXX',
        HP: !!data[i].stats[0].base_stat ? data[i].stats[0].base_stat : 0,
        attack: !!data[i].stats[1].base_stat ? data[i].stats[1].base_stat : 0,
        defense: !!data[i].stats[2].base_stat ? data[i].stats[2].base_stat : 0,
        sum:
          (!!data[i].stats[0].base_stat ? data[i].stats[0].base_stat : 0) +
          (!!data[i].stats[1].base_stat ? data[i].stats[1].base_stat : 0) +
          (!!data[i].stats[2].base_stat ? data[i].stats[2].base_stat : 0),
        sprite: !!data[i].sprites.other.dream_world.front_default
          ? data[i].sprites.other.dream_world.front_default
          : data[i].sprites.front_default,
        type: data[i].types[0].type.name,
      };
    }

    this.setState({
      poks: poksData,
      loading: false,
    });
  };

  componentDidMount() {
    const sp = this.props.router.searchParams;
    const numberOfPoks = sp.get('numberOfPoks');
    this.getPoksData(numberOfPoks);
  }

  componentDidUpdate(prevProps, prevState) {
    const sp = this.props.router.searchParams;
    const mode = sp.get('mode');
    let { indexOne, indexTwo, beginning } = this.state;

    if (
      (prevState.beginning && !beginning) ||
      (prevState.indexOne + 1 !== prevState.indexTwo &&
        indexOne + 1 === indexTwo &&
        mode === '2_Players') ||
      (prevState.indexOne + 2 === indexOne && mode === 'with_comp')
    ) {
      this.pointsCalculator();
    }
  }

  handleClickCardOne = () => {
    const sp = this.props.router.searchParams;
    const mode = sp.get('mode');
    if (this.state.beginning) {
      this.setState({
        beginning: false,
      });
    } else {
      this.setState((state) => {
        if (state.indexOne < state.poks.length - 2) {
          if (mode === 'with_comp') {
            return {
              indexOne: state.indexOne + 2,
              indexTwo: state.indexTwo + 2,
            };
          } else if (mode === '2_Players') {
            if (state.indexOne < state.indexTwo) {
              return {
                indexOne: state.indexOne + 2,
              };
            }
          }
        }
      });
    }
  };
  handleClickCardTwo = () => {
    const sp = this.props.router.searchParams;
    const mode = sp.get('mode');
    if (this.state.beginning) {
      if (mode === '2_Players') {
        this.setState({
          beginning: false,
        });
      }
    } else {
      this.setState((state) => {
        if (state.indexTwo < state.poks.length - 1) {
          if (mode === '2_Players') {
            if (
              state.indexOne > state.indexTwo ||
              state.indexOne + 1 === state.indexTwo
            ) {
              return {
                indexTwo: state.indexTwo + 2,
              };
            }
          }
        }
      });
    }
  };

  pointsCalculator = () => {
    let { poks, indexOne, indexTwo } = this.state;
    const sp = this.props.router.searchParams;
    const gameRule = sp.get('gameRule');

    if (poks[indexOne][gameRule] > poks[indexTwo][gameRule]) {
      this.setState((state) => {
        return {
          playerOnePoints: state.playerOnePoints + 1,
        };
      });
    }
    if (poks[indexOne][gameRule] < poks[indexTwo][gameRule]) {
      this.setState((state) => {
        return {
          playerTwoPoints: state.playerTwoPoints + 1,
        };
      });
    }
  };

  render() {
    const sp = this.props.router.searchParams;
    const mode = sp.get('mode');
    let {
      poks,
      indexOne,
      indexTwo,
      loading,
      beginning,
      playerOnePoints,
      playerTwoPoints,
    } = this.state;

    return (
      <div className="gameMain">
        {loading ? (
          <Loading />
        ) : (
          <React.Fragment>
            <div className="playerCard">
              <p className="playerDesc">{`PLAYER ${
                mode === 'with_comp' ? '' : '1'
              }: ${playerOnePoints}`}</p>
              {beginning ? (
                <CardBack onClick={this.handleClickCardOne} />
              ) : (
                <Card
                  type={poks[indexOne].type}
                  name={poks[indexOne].name}
                  sprite={poks[indexOne].sprite}
                  HP={poks[indexOne].HP}
                  attack={poks[indexOne].attack}
                  defense={poks[indexOne].defense}
                  sum={poks[indexOne].sum}
                  onClick={this.handleClickCardOne}
                />
              )}
            </div>
            <div className="playerCard">
              <p className="playerDesc">{`${
                mode === 'with_comp' ? 'COMPUTER' : 'PLAYER 2'
              }: ${playerTwoPoints}`}</p>
              {beginning ? (
                <CardBack onClick={this.handleClickCardTwo} />
              ) : (
                <Card
                  type={poks[indexTwo].type}
                  name={poks[indexTwo].name}
                  sprite={poks[indexTwo].sprite}
                  HP={poks[indexTwo].HP}
                  attack={poks[indexTwo].attack}
                  defense={poks[indexTwo].defense}
                  sum={poks[indexTwo].sum}
                  onClick={this.handleClickCardTwo}
                />
              )}
            </div>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default withSearchParams(Game);
