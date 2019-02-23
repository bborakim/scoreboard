import React, { Component } from 'react';
import './App.css';


const Header = (props) => {
  // console.log(props);
  return (
    <header>
      <h1>{ props.title }</h1>
      <span className="stats">Players: { props.totalPlayers }</span>
    </header>
  )
};

class Counter extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      score: 0
    }
    // this.incrementScore.bind(this);
  };

  incrementScore = () => {
    // console.log('increment', this);  // lexical this : 자기 자신을 가르킨다.
    // this.state.socre = 1;   // 이렇게 하면 값은 바뀔 순 있지만 화면이 렌더링이 되지 않는다.
    // this.setState({score: 1});
    this.setState(prevState => ({ score: prevState.score + 1 } ))

  };

  decrementScore = () => {
    this.setState(prevState => ({score: prevState.score - 1 }))
  };

  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={this.decrementScore}> - </button>
        <span className="counter-score">{this.state.score}</span>
        <button className="counter-action increment" onClick={this.incrementScore}> + </button>
      </div>
    );
  }
};


const Player = (props) => {
  return (
    <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={() => props.removePlayer(props.id)}>x</button>
      </span>
      <span className="player-name">
        {props.name}
      </span>
      <Counter />
    </div>
  );
};

// function component -> class component 로 변경
class App extends React.Component {
  state = {
    players: [
      {name: 'LDK', id: 1},
      {name: 'HONG', id: 2},
      {name: 'KIM', id: 3},
      {name: 'PARK', id: 4},
    ]
  };

  handleRemovePlayer = (id) => {
    console.log(id);
    this.setState(prevState => {
      console.log(prevState.players);
      return {
        // players: prevState.players.filter(player => player.id !== id)
        players: prevState.players.filter(player => player.id !== id)
      }
    })
  };


  render() {
    return (
      <div className="scoreboard">
        <Header title="My scoreboard" totalPlayers={this.state.players.length} />

        {/*Players List*/}
        { this.state.players.map(item =>
          <Player
            id={item.id.toString()}
            name={item.name}
            removePlayer={this.handleRemovePlayer}
          />) }
      </div>
    );
  }
}

export default App;
