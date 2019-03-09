import React from 'react';
import {connect} from "react-redux";
import Header from "../../components/Header";
import AddPlayerForm from "../../components/AddPlayerForm";
import Player from "../../components/Player";
import './Scordboard.css';

class Scoreboard extends React.Component {

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

export default connect(mapStateToProps)(Scoreboard);
