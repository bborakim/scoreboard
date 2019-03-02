import React from 'react';
import {Counter} from "./Counter";

export class Player extends React.Component {
  render(){
    //console.log("player : " + this.props); // [object Object] 이렇게 오브젝트가 4개 출력
    //console.log(this.props.name + "  render");  // KIM 이렇게 이름이 4개 출력
    const {removePlayer, id, name} = this.props;
    return (
      <div className="player">
      <span className="player-name">
      <button className="remove-player" onClick={() => removePlayer(id)}>X</button>
      </span>
        <span className="player-name">{name}</span>
        <Counter {...this.props}/>
      </div>
    );
  }
  //true or false를 return 해야함. true가 렌더링 해라, false가 렌더링 하지마라
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return nextProps.score !== this.props.score;
  }

  //1. conponentWillReceiveProps
  //2.shouldComponentUpdate -> true 일때 업데이트 하고, false면 안함.
  //3.
};

/*<Counter index={props.index} score={props.score} changeScore={props.changeScore}/>*/
