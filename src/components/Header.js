import React from 'react';
import {Statistics} from "./Statistics";
import {Stopwatch} from "./Stopwatch";

export const Header = ({players, title}) => {
  //const {players, title} = props; // 위 ()를 (props)로 받을 시엔 이렇게 하고, 아예 처음부터 props에 바로 할당해도 됨.
  return (
    <header>
      <Statistics className="stats" players={players}/>
      <h1>{title}</h1>
      <Stopwatch />
    </header>
  );
};
