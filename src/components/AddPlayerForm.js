import React from 'react';


export class AddPlayerForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playerName: ''
    }
  }

  handleValueChange = (e) => {
    this.setState({playerName:e.target.value})
    console.log(e)
  };

  render() {
    return (
      <form>
        <input type="text" placeholder="enter a player's name" value={this.state.playerName} onChange={this.handleValueChange}/>
        <input type="submit" value="Add Player"/>
      </form>
    );
  }
}
