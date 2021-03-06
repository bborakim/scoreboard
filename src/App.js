import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Player} from "./components/Player";
import {AddPlayerForm} from "./components/AddPlayerForm";
// 선택 범위 : control-w
/*const header = (
  <header>
    <h1 id={myTitleId}>ldk's {title}</h1>
    <p>{desc}</p>
  </header>
);*/

class App extends React.Component {
  state = {
    players: [
      {name: 'LDK', score: 0, id: 1},
      {name: 'HONG', score: 0, id: 2},
      {name: 'KIM', score: 0, id: 3},
      {name: 'PARK', score: 0, id: 4},
    ]
  };

  handleRemovePlayer = (id) => {
    this.setState(prevState => ({
      players: prevState.players.filter(player => player.id !== id)
    }))
  };

  handleAddPlayer = (name) => {
    this.setState(prevState => {
      //가장 큰 playerId를 구한다.
      let maxId = 0;
      this.state.players.forEach(item => item.id > maxId ? maxId = item.id : maxId = maxId);

      return {
        players: [
          ...prevState.players,
          {id: maxId + 1, name, score: 0} // name:name -> name 으로 해도됨
        ]
      }
    });
  };

  handleChangeSocore = (index, delta) => {
    console.log(index, delta);
    const players = this.state.players.map((player, idx) => {
      if (idx === index) {
        player.score = player.score + delta;
        return player;
      } else {
        return player;
      }
    });

    this.setState({players});
  };

  render() {
    return (
      <div className="scoreboard">
        <Header title="My scoreboard" players={this.state.players} />

        {
          this.state.players.map((play, index) => <Player
            id={play.id}
            name={play.name}
            index={index}
            score={play.score}
            key={play.id} removePlayer={this.handleRemovePlayer}
            changeScore={this.handleChangeSocore} />)
        }

        <AddPlayerForm addPlayer={this.handleAddPlayer}/>
      </div>
    )
  }
}

export default App;
