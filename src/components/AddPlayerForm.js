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

  handleSubmit = (e) => {
    console.log(e);
    e.preventDefault(); // 현재페이지를 리로딩하면 모든 변수의 값을 초기화 하기때문에 기본이벤트를 막음.
    //부모 이벤트 호출
    this.props.addPlayer(this.state.playerName);
    
    //폼 초기화
    this.setState({playerName :''});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="enter a player's name" value={this.state.playerName} onChange={this.handleValueChange}/>
        <input type="submit" value="Add Player"/>
      </form>
    );
  }
}
