import React, {Fragment} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Home} from "./Home";
import {Scoreboard} from "./Scoreboard";
import {Heroes} from "./Heroes";

// named export
export class Root extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <BrowserRouter>
        <>
          <p>공통메뉴 영역</p>
          <Switch>
          <Route exact path="/" component={Home} ></Route>
          <Route path="/heroes" component={Heroes} > </Route>
          <Route path="/scoreboard" component={Scoreboard}></Route>
          </Switch>
        </>
      </BrowserRouter>
    );
  }
};