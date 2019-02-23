import React from 'react';


export class Counter extends React.Component {
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
