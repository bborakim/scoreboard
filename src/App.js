import React, { Component } from 'react';
import './App.css';

// 선택 범위 : control-w
/*const header = (
  <header>
    <h1 id={myTitleId}>ldk's {title}</h1>
    <p>{desc}</p>
  </header>
);*/

const Header = (props) => {
  console.log(props);
  return (
    <header>
      <h1>{props.title}</h1>
      <span className="stats">Players: {props.totalPlayers}</span>
    </header>
  );
}

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: 1,
      score: 0
    }
    // this.incrementScore.bind(this);
  }

  incrementScore = () => {
    console.log('increment', this); // lexical this: 자기자신을 가르킨다
    // this.state.score = 1; // 이렇게하면 화면이 렌더링이 안된다.
    // this.setState({score: 1})
    this.setState(prevState => ({score: prevState.score + 1}))
  };

  decrementSocre = () => {
    this.setState(prevState => ({score: prevState.score - 1}))
  }

  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={this.decrementSocre}> - </button>
        <span className="counter-score">{this.state.score}</span>
        <button className="counter-action increment" onClick={this.incrementScore}> + </button>
      </div>
    );
  }
}

const Player = (props) => (
  <div className="player">
    <span className="player-name">
      <button className="remove-player" onClick={() => props.removePlayer(props.id)}>X</button>
    </span>
    <span className="player-name">{props.name}</span>
    <Counter score={props.score}/>
  </div>
);

class App extends React.Component {
  state = {
    players: [
      {name: 'LDK', id: 1},
      {name: 'HONG', id: 2},
      {name: 'KIM', id: 3},
      {name: 'PARK', id: 4},
    ]
  }

  handleRemovePlayer = (id) => {
    this.setState(prevState => ({
      players: prevState.players.filter(player => player.id !== id)
    }))
  }

  render() {
    return (
      <div className="scoreboard">
        <Header title="My scoreboard" totalPlayers={ 1 + 10 } />

        {
          this.state.players.map(play => <Player
            id={play.id}
            name={play.name}
            score={play.score} key={play.id} removePlayer={this.handleRemovePlayer} />)
        }
      </div>
    )
  }
}

export default App;
