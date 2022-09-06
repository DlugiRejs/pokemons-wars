import React from 'react';

const styles = {
  fontFamily: 'Righteous',
  fontSize: '2.25rem',
  color: '#3466af',
  margin: '10px auto',
  textAlign: 'center',
};

export default class Loading extends React.Component {
  state = {
    text: 'LOADING',
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      if (this.state.text === 'LOADING...') {
        this.setState({
          text: 'LOADING',
        });
      } else {
        this.setState(({ text }) => {
          return {
            text: text + '.',
          };
        });
      }
    }, 600);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return <p style={styles}>{this.state.text}</p>;
  }
}
