import React from 'react';
import './App.css';
import Header from "./components/Header";
import Player from "./components/Player";
import AddPlayerForm from "./components/AddPlayerForm";
import {connect} from "react-redux";

// 선택 범위 : control-w
/*const header = (
  <header>
    <h1 id={myTitleId}>ldk's {title}</h1>
    <p>{desc}</p>
  </header>
);*/

class App extends React.Component {
/*  handleRemovePlayer = (id) => {
    this.setState(prevState => ({
      players: prevState.players.filter(player => player.id !== id)
    }))
  };*/

  render() {
    return (
      <div className="scoreboard">
        <Header players={this.props.players} />

        {
          this.props.players.map((play, index) => <Player
            id={play.id}
            name={play.name}
            index={index}
            score={play.score}
            key={play.id} />)
        }

        <AddPlayerForm />
      </div>
    )
  }
}

let mapStateToProps = (state) => ({
  players: state.playerReducer.players
})

export default connect(mapStateToProps)(App);
