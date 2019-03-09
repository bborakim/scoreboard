import React from 'react';
import {addPlayer} from "../redux/actions";
import {connect} from "react-redux";

class AddPlayerForm extends React.Component {
  // Dom에 접근하기 위한 참조값
  textInput = React.createRef();

  constructor(props) {
    super(props);
  }

  handleValueChange = (e) => {
    console.log(e);
    this.setState({playerName: e.target.value})
  }

  handleSubmit = (e) => {
    console.log(e);
    // 페이지 리로딩 방지
    e.preventDefault();
    // 부모 이벤트 호출
    this.props.addPlayer(this.textInput.current.value);
    // 폼 초기화
    this.setState({playerName: ''});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="enter a player's name" ref={this.textInput}></input>
        <input type="submit" value="Add Player"></input>
      </form>
    );
  }
}

export default connect(null, {addPlayer})(AddPlayerForm);