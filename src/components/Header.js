import React from 'react';
import {Statistics} from "./Statistics";
import {Stopwatch} from "./Stopwatch";

export const Header = (props) => {
  console.log(":::::" + props.players);
  return (
    <header>
      <Statistics className="stats" players={props.players}/>
      <h1>{props.title}</h1>
      <Stopwatch />
    </header>
  );
};
