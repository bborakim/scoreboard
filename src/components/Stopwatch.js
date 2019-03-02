import React from 'react';


export class Stopwatch extends React.Component {
  timeRef; // 클래스 public 속성

  constructor(props) {
    super(props);
    this.state ={
      isRunning: false,
      timer : 0
    }
  }

  handleStopwatch = () =>{
    //이전상태에서 받아서 isRunning 상태를 반대로 만드는 토글
    this.setState(prevState => ({
      isRunning : !prevState.isRunning
    }));
  };

  render() {
    return (
      <div className="stopwatch">
        <h2>Stopwatch</h2>
        <span className="stopwatch-time">{this.state.timer}</span>
        <button onClick={this.handleStopwatch}>{this.state.isRunning ? 'Stop' : 'Start'}</button>
        <button onClick={()=>this.setState({timer:0})}>Reset</button>
      </div>
    );
  }
  //Dom이 생성된 직후
  componentDidMount() {
    this.timeRef = setInterval(this.tick, 1000)
    //setInterval(()=> this.tick(), 1000) // 위와 동일한 코드임
  }
  tick =()=>{
    if(this.state.isRunning){
      this.setState(prevState => ({
        timer :prevState.timer + 1
      }))
    };
  };

  //Dom이 파괴되기 직전
  componentWillUnmount() {
    clearInterval(this.timeRef);
  }
}
